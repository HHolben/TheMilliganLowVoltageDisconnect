//----------This Section of the arduino software is created by index.html using CodeHead.js----------
 
 
Milligan Engineering Low Voltage Disconnect Arduino Code
 

//Specify Libraries for a device with an encoder
 	#include <EEPROM.h> //This library is necesary for memory management
 	#include <LiquidCrystal_I2C.h> //This library is necesary for LCD display management
 	#include <Encoder.h> //This library is necesary for using rotary encoders as inputs
 	LiquidCrystal_I2C lcd(0x27,20,4);  // set the LCD address to 0x27 for a 20 chars and 4 line display
 	const int EEPROM_ADDR = 0; // EEPROM address to store the user input
 	const int MAX_INPUT_LENGTH = 32; // Maximum length of user input
 	char userInput[MAX_INPUT_LENGTH] = {0}; // Buffer to store user input
 
//----------This Section of the arduino software is created by index.html using ConvertMenuItemsToString.js----------
 	//Menu Items: 
 	 String InterfaceItems[][2] = {//Liquid crystal display related variables
 
int scrollPosition = 0;     //First Line
 	bool selectPressed = false; // Select button latch
 	int ReturnToStatusPage = false;
//Voltage Probe related variables
 	const float Resistor1 = 1.35e6; //ohms
 	const float Resistor2 = 750e3; //ohms
 
//Global Variables:
 	String DeviceName = "Theophilus";
 	float NominalVoltage = 12;
 	float ShutOffVoltage = 6;
 	float TurnBackOnVoltage = 10;
 	unsigned long OverrideDelay = 20*60000; //milliseconds
 	unsigned long TimerOffset = 0*1000; //milliseconds
 	const int DisconnectBufferTime = 30;  // Number of seconds to add to Disconnect timer (minimum value)
 	int LanguageSetting = 0;
 	int DeviceSetting = 3;
 	int SelectedPage = 0;
 	bool OutputState = 1;
 	const int MaximumEncoderPosition = 4;
//Timer-related variables
 	unsigned long previousMillis = 0;
 	unsigned long RolloverTime = (pow(2,32)-1);// Set an interval in milliseconds to ensure that millis() rollover (happens once approximately every 50 days when millis() resets to zero) is never an issue for more than 10 minutes
 

 
//Get Pin Assignments:
 	int VoltageProbe= A0;
 	int lcdSDA= 27;
 	int lcdSCL= 19;
 	int EncoderCLK = 3;
 	int EncoderDT = 2;
 	int EncoderSW = 6;
 	int OverrideDelayButton = 13;
 	int RelayOutput = 3;
 	int InputUp = 11;
 	int InputDown = 7;
 	int InputRight = 8;
 	int InputLeft = 10;
 	int InputSelect = 9;
 //Encoder
 	Encoder myEncoder(2, 3); // Connect encoder pins (Clk,DT)
 	long oldPosition  = -999;
 	int EncoderDirection = 0;                 //Idle by default
 	const int scrollThreshold = 10;    //Update this value based on the desired sensitivty of your encoder
 	int ChangeInPosition = 0;
 	int EncoderSelectState = HIGH;
 	static int lastEncoderSelectState = HIGH;

//Status Page
 	void StatusPageScreen()
 	{
 	 	String PageHeader[2] = {"       Status:      ", "       Estado:      "};
 	 	String ConnectionStatus[][2] = {{"Load Disonnected    ", "Carga Desconectada  "}, {"Load Connected      ", "Carga Conectada     "}};
 	 	String BatteryVoltageStatus[2] = {"Measurement(v):", "Medición(v):"};
 	 	String OverrideStatus[][2] = {{"Override: On             ", "Anulación Activada  "}, {"Override: Off       ", "Anulación Desact.   "}};
 	 	lcd.setCursor(0,0);
 	 	lcd.print(PageHeader[LanguageSetting]);
 	 	lcd.setCursor(0,1);
 	 	lcd.print(ConnectionStatus[OutputState][LanguageSetting]);
 	 	lcd.setCursor(0,2);
 	 	lcd.print(BatteryVoltageStatus[LanguageSetting]);
 	 	lcd.setCursor(16,2);
 	 	lcd.print(MeasureVoltage());
 	 	lcd.setCursor(0,3);
 	 	lcd.print(OverrideStatus[OutputState][LanguageSetting]);
 	 	} // end of StatusPageScreen();
//LCD Screen Menu Page Case Statements: 
 	void MenuPageScreens(int scrollPosition)
 	{
 	 	switch(scrollPosition)
 	 	 	{
 	 	 	case 0:
 	 	 	lcd.setCursor(0,0);
 	 	 	lcd.print(">"+InterfaceItems[0][LanguageSetting]);
 	 	 	lcd.setCursor(0,1);
 	 	 	lcd.print(" "+InterfaceItems[1][LanguageSetting]);
 	 	 	lcd.setCursor(0,2);
 	 	 	lcd.print(" "+InterfaceItems[2][LanguageSetting]);
 	 	 	lcd.setCursor(0,3);
 	 	 	lcd.print(" "+InterfaceItems[3][LanguageSetting]);
 	 	 	break;
 
 	 	 	case 1:
 	 	 	lcd.setCursor(0,0);
 	 	 	lcd.print(" "+InterfaceItems[0][LanguageSetting]);
 	 	 	lcd.setCursor(0,1);
 	 	 	lcd.print(">"+InterfaceItems[1][LanguageSetting]);
 	 	 	lcd.setCursor(0,2);
 	 	 	lcd.print(" "+InterfaceItems[2][LanguageSetting]);
 	 	 	lcd.setCursor(0,3);
 	 	 	lcd.print(" "+InterfaceItems[3][LanguageSetting]);
 	 	 	break;
 
 	 	 	case 2:
 	 	 	lcd.setCursor(0,0);
 	 	 	lcd.print(" "+InterfaceItems[0][LanguageSetting]);
 	 	 	lcd.setCursor(0,1);
 	 	 	lcd.print(" "+InterfaceItems[1][LanguageSetting]);
 	 	 	lcd.setCursor(0,2);
 	 	 	lcd.print(">"+InterfaceItems[2][LanguageSetting]);
 	 	 	lcd.setCursor(0,3);
 	 	 	lcd.print(" "+InterfaceItems[3][LanguageSetting]);
 	 	 	break;
 
 	 	 	case 3:
 	 	 	lcd.setCursor(0,0);
 	 	 	lcd.print(" "+InterfaceItems[0][LanguageSetting]);
 	 	 	lcd.setCursor(0,1);
 	 	 	lcd.print(" "+InterfaceItems[1][LanguageSetting]);
 	 	 	lcd.setCursor(0,2);
 	 	 	lcd.print(" "+InterfaceItems[2][LanguageSetting]);
 	 	 	lcd.setCursor(0,3);
 	 	 	lcd.print(">"+InterfaceItems[3][LanguageSetting]);
 	 	 	break;
 
 	 	 	
 	 	}// end switch(scrollPosition)
 	}// end MenuPageScreens
 

//Adjust Nominal Voltage: 
 	
 	void AdjustNominalVoltage()
 	{
 	 	 	String NominalVoltagePageItems[][2] = {{"Battery Voltage     ", "Voltaje Batería     "},{" volts        ", " voltios     "},{"Cancel ", "Cancelar  "},{"Confirm", "  Confirmar"}};
 	 	lcd.setCursor(0,0);
 	 	lcd.print(NominalVoltagePageItems[0][LanguageSetting]+":");
 	 	lcd.setCursor(0,1);
 	 	lcd.print(NominalVoltage + NominalVoltagePageItems[1][LanguageSetting]);
 	 	lcd.setCursor(0,2);
 	 	lcd.print("                    ");
 	 	lcd.setCursor(0,3);
 	 	lcd.print("                    ");
 	 	} //end Adjust Nominal Voltage
 	void AdjustCutOffVoltagePage()
 	{
String ShutOffVoltagePageItems[][2] = {{"Cut-Off Voltage     ", "Voltaje corte       "},{" volts          ", " voltios            "},{"Cancel ", "Cancelar  "},{" Confirm", "  Confirmar"}};
 lcd.setCursor(0,0);
 	lcd.print(ShutOffVoltagePageItems[0][LanguageSetting]+":");
lcd.setCursor(0,1);lcd.print(ShutOffVoltage+ShutOffVoltagePageItems[1][LanguageSetting]);
 	 lcd.setCursor(0,2);
 	 lcd.print("                    ");
 	 lcd.setCursor(0,3);
 	 lcd.print("                    ");
 	 }
 	void AdjustReconnectVoltagePage()
 	{
 	 String ReconnectVoltagePageItems[][2] = {{"Reconnect Voltage   ", "Voltaje Reconexion  "},{" volts        ", " voltios    "}};
 	 lcd.setCursor(0,0);
 	 lcd.print(ReconnectVoltagePageItems[0][LanguageSetting]+":");
 	 lcd.setCursor(0,1);
 	 lcd.print(TurnBackOnVoltage + ReconnectVoltagePageItems[1][LanguageSetting]);
 	 lcd.setCursor(0,2);
 	 lcd.print("                    ");
 	 lcd.setCursor(9,2);
 	 lcd.print("                    ");
 	 }
 	void AdjustOverrideTimePage()
 	{
 	 String OverrideTimePageItems[][2] = {{"Override Time       ", "Tiempo Anulación    "},{" minutes           ", "     minutos          "}};
 	 lcd.setCursor(0,0);
 	 lcd.print(OverrideTimePageItems[0][LanguageSetting]+":");
 	 lcd.setCursor(0,1);
 	 lcd.print(OverrideDelay/60000+ OverrideTimePageItems[1][LanguageSetting]); //the divide by 60000 converts to minutes
 	 lcd.setCursor(0,2);
 	 lcd.print("                    ");
 	 lcd.setCursor(0,3);
 	 lcd.print("                    ");
 	 }
 
// Scroll function for a devicew with a rotary encoder control input:
 	void Scroll()
 	{
 	 	scrollPosition = 3-abs((myEncoder.read()/4)%4);
 	 	if (scrollPosition > MaximumEncoderPosition)
 	 	{
 	 	 	scrollPosition = scrollPosition-MaximumEncoderPosition-1;
 	 	}
 	} //end Scroll() function
 	void Select(int SelectedPage)
 	{
 	long newPosition = myEncoder.read();
 	if (newPosition != oldPosition){
 	//ChangeInPosition = ChangeInPosition % scrollThreshold;  //Not needed if ChangeInPosition reset
 	ChangeInPosition++;
 	if (newPosition > oldPosition)
 	{
 	EncoderDirection = 1;
 	}
 	else if (newPosition < oldPosition){
 	EncoderDirection = 2;
 	}
 	else
 	{
 	EncoderDirection = 0;  //Idle
 	}
 	if (SelectedPage == 0)
 	{
 	AdjustNominalVoltage();    // Keep updating the screen
 	if (EncoderDirection == 2 && abs(ChangeInPosition >= scrollThreshold))
 	{
 	if (NominalVoltage < 48.0)
 	{
 	NominalVoltage = NominalVoltage + 12;
 	}
 	} //end if(RIGHT_State == HIGH)
 	if (EncoderDirection == 1 && abs(ChangeInPosition >= scrollThreshold))
 	{
 	if (NominalVoltage > 12){
 	NominalVoltage = NominalVoltage - 12;
 	}
 	}
 	}
 	else if (SelectedPage == 1)
 	{
 	AdjustCutOffVoltagePage();
 	if (EncoderDirection == 2 && abs(ChangeInPosition >= scrollThreshold)) //clockwise
 	{
 	ShutOffVoltage = ShutOffVoltage + 0.1;
 	} //end if(RIGHT_State == HIGH)
 	if (EncoderDirection == 1 && abs(ChangeInPosition >= scrollThreshold))
 	{
 	ShutOffVoltage = ShutOffVoltage - 0.1;
 	} // end if(LEFT_State == HIGH)
 	} //end (if SelectedPage==1)
 	else if (SelectedPage == 2)
 	{
 	AdjustReconnectVoltagePage();
 	if (EncoderDirection == 2 && abs(ChangeInPosition >= scrollThreshold))
 	{
 	TurnBackOnVoltage = TurnBackOnVoltage + 0.1;
 	} //if (RIGHT_State == HIGH)
 	if (EncoderDirection == 1 && abs(ChangeInPosition >= scrollThreshold))
 	{
 	TurnBackOnVoltage = TurnBackOnVoltage - 0.1;
 	} //end of  if(LEFT_State == HIGH)
 	} //end of else if (SelectedPage == 2)
 	else if (SelectedPage == 3)
 	{
 	AdjustOverrideTimePage();
 	if (EncoderDirection == 2 && abs(ChangeInPosition >= scrollThreshold))
 	{
 	OverrideDelay = OverrideDelay + (5*60000);
 	}
 	if (EncoderDirection == 1 && abs(ChangeInPosition >= scrollThreshold) && (OverrideDelay > 0))
 	{
 	OverrideDelay = OverrideDelay - (5*60000);
 	} //end of if (LEFT_State == HIGH)
 	}
 	oldPosition = newPosition;    //Update oldPosition for next iteration
 	}
 	}void readUserInput()
{
 	// Read user input from EEPROM and load it into the userInput buffer
 	for (int i = 0; i < MAX_INPUT_LENGTH; i++){
 	 	char c = EEPROM.read(EEPROM_ADDR + i);
 	 	if (c =='\0')
 	 	{
 	 	 	break; // End of stored data
 	 	} //End of if statement
 	 	userInput[i] = c;
 	}//end of for loop
} //end of Read User Input
 
void writeUserInput()
{
 	// Write user input from the userInput buffer to EEPROM
 	for (int i = 0; i < MAX_INPUT_LENGTH; i++)
 	{
 	 	if (userInput[i] == '\0')
 	 	{
 	 	 	break; // End of input
 	 	} //end of if statment
 	EEPROM.write(EEPROM_ADDR + i, userInput[i]);
 	} //end of for loop
 	EEPROM.write(EEPROM_ADDR + MAX_INPUT_LENGTH, '\0'); // Null-terminate the string
} //end of writeUserInput

 
//Find the time since the Low Voltage Disconnect was turned on
 	unsigned long TimeSinceBoot()
 	{
 	unsigned long SystemTime = millis()+TimerOffset; // TimerOffset allows manipulating timers for testing purposes (you can start the timer at a much later time than the actual time since starting)
 	return(SystemTime);
 	} //end of TimeSinceBoot() function//SetTimerEnd
unsigned long SetTimerEnd()
 	{
 	 	unsigned long ShutOffTime;
 	 	if(TimeSinceBoot()>=RolloverTime-OverrideDelay)
 	 	{
 	 	 	ShutOffTime = (TimeSinceBoot()+OverrideDelay)-RolloverTime;
 	 	 	
 	 	 	
 	 	} //end of if statement
 	 	else // "normal operation", when TimeSinceBoot() is not within the Override Delay's duration of the millis() rollover
 	 	{
 	 	 	ShutOffTime = TimeSinceBoot()+OverrideDelay;
 	 	} //end of else statement
 	return(ShutOffTime);
} //end of SetTimerEnd() function
 
float MeasureVoltage()
{
 	float VoltageMeasurement= analogRead(VoltageProbe)*5/1023; //The ratio is 5 Volts (max voltage that can go into a pin)/ 1023 (AnalogRead() measures between 0 and 1023
 	float BatteryVoltage = VoltageMeasurement*(Resistor1+Resistor2)/(Resistor2); //This uses voltage divider math to caclulate the battery voltage.
 	
 	return(BatteryVoltage);
} //end of function, MeasureVoltage()
 
void TurnOffOutput()
{
 	digitalWrite(RelayOutput, LOW);  // sets the relay output off
 	OutputState = 0;
 	
} //end of function, TurnOffOutput()
void TurnOnOutput() 
{
 	digitalWrite(RelayOutput, HIGH);  // sets the relay output on
 	OutputState = 1;
} //end of function, TurnOnOutput()
void setup()
{
 	// Initialize serial communication
 	lcd.init(); // initialize the lcd
 	lcd.backlight();
 	
 	//Button Initialization
 	pinMode(InputUp, INPUT);
 	pinMode(InputDown, INPUT);
 	pinMode(InputLeft, INPUT);
 	pinMode(InputRight, INPUT);
 	pinMode(InputSelect, INPUT);
 	selectPressed = true;
 	Serial.begin(9600);
 	readUserInput();
 	TurnOnOutput(); //we want to start the microcontroller with the output on
} //End of void setup
 

 	enum State
 	{
 	 	SCROLLING,
 	 	SELECTING
 	};
 
 	State currentState = SCROLLING;
 	
 	enum Page{
 	 	STATUS_PAGE,
 	 	MENU_PAGE,
 	 	NOMINAL_VOLTAGE_PAGE,
 	 	CUT_OFF_VOLTAGE_PAGE,
 	 	RECONNECT_VOLTAGE_PAGE,
 	 	OVERRIDE_TIME_PAGE
 	 	// Add more pages as needed
 	 	};
 	 	Page currentPage = STATUS_PAGE;
 	
void loop()
{
 	int lastSwitchState;
 	int EncoderSelectState = digitalRead(EncoderSW);
 	int SELECT_State = digitalRead(InputSelect);
 	if (EncoderSelectState == LOW && lastEncoderSelectState == HIGH)
 	 	{
 	 	// Update the switch state
 	 	selectPressed = !selectPressed;
 	 	// Toggle the latched state
 	}
 	// Update the last state
 	lastEncoderSelectState = EncoderSelectState;
 	// Check if the encoder button is pressed
 	
 	if (selectPressed)
 	{
 	 	if (currentPage==STATUS_PAGE && lastEncoderSelectState == LOW)
 	 	{
 	 	 	currentPage = MENU_PAGE;
 	 	currentState = SCROLLING;
 	 	}
 	}
 	else if (currentPage == MENU_PAGE && scrollPosition == 0)
 	{
 	if (!selectPressed)
 	{
 	 	currentPage = NOMINAL_VOLTAGE_PAGE;
 	currentState = SELECTING;
 	SelectedPage = 0;
 	 	}
 	}
 	else if (currentPage == MENU_PAGE && scrollPosition == 1)
 	{
 	 	if (!selectPressed)
 	 	{
 	 	 	currentPage = CUT_OFF_VOLTAGE_PAGE;
 	currentState = SELECTING;
 	SelectedPage = 1;
 	 	 	}
 	 	}
 	 	else if (currentPage == MENU_PAGE && scrollPosition == 2)
 	 	{
 	 	if (!selectPressed)
 	 	{currentPage = RECONNECT_VOLTAGE_PAGE;
 	currentState = SELECTING;
 	SelectedPage = 2;} //end if (!selectPressed)
 	} // end else if (currentPage == MENU_PAGE && scrollPosition == 2)
 	else if (currentPage == MENU_PAGE && scrollPosition == 3)
 	{
 	if (!selectPressed)
 	{
 	currentPage = OVERRIDE_TIME_PAGE;
 	currentState = SELECTING;
 	SelectedPage = 3;} //if (!selectPressed)
 	}// else if
 	else if( currentPage == NOMINAL_VOLTAGE_PAGE || currentPage == CUT_OFF_VOLTAGE_PAGE || currentPage == RECONNECT_VOLTAGE_PAGE || currentPage == OVERRIDE_TIME_PAGE)
 	 	{
 	 	 	ReturnToStatusPage = true;
 	 	} //end else if
 	if(selectPressed && ReturnToStatusPage == true)
 	{
 	currentPage = STATUS_PAGE;
 	currentState = SCROLLING;
 	EncoderSelectState = HIGH;
 	ReturnToStatusPage = false;
 	} //end if
 	switch (currentPage)
 	{case STATUS_PAGE:
 	 	StatusPageScreen();
 	 	break;
 	 	case MENU_PAGE:
 	 	MenuPageScreens(scrollPosition);
 	 	break;
 	 	case NOMINAL_VOLTAGE_PAGE:
 	 	AdjustNominalVoltage();
 	 	break;
 	 	case CUT_OFF_VOLTAGE_PAGE:
 	 	AdjustCutOffVoltagePage();
 	 	break;
 	 	case RECONNECT_VOLTAGE_PAGE:
 	 	AdjustReconnectVoltagePage();
 	 	break;
 	 	case OVERRIDE_TIME_PAGE:
 	 	AdjustOverrideTimePage();
 	 	break;
 	 	}
 	Scroll();
 	//Low voltage disconnection: If the battery voltage is lower than the cut off voltage, turn off the load when the override period expires
 	static unsigned long StartTime = 0;
 	static unsigned long EndTime = 0;
 	static bool TimerHasStarted = false;
 	if (MeasureVoltage() < ShutOffVoltage)
 	{
 	 	if(TimerHasStarted == false)
 	 	{
 	 	 	StartTime = TimeSinceBoot();
 	 	 	EndTime = SetTimerEnd()+DisconnectBufferTime;
 	 	 	TimerHasStarted = true;
 	 	 	} // end of if TimerHasStarted == false statement
 	 	 	unsigned long currentTime = TimeSinceBoot();
 	 	 	if (currentTime < EndTime)
 	 	 	{
 	 	 	 	unsigned long remainingTime = EndTime - currentTime;
 	 	 	 	// Other tasks can run here while the timer is active
 	 	 	} // end of if(currentTime < EndTime)
 	 	 	else
 	 	 	{
 	 	 	 	
 	 	 	 	TurnOffOutput();
 	 	 	} // end of else statement
 	 	 	} // end of if MeasureVoltage()<ShutOffVoltage
 	 	 	Scroll();
 	//Reconnection: If the battery voltage has been recharged over the set reconnect voltage, turn the load back on
 	 	if (MeasureVoltage()>TurnBackOnVoltage)
 	 	{
 	 	 	TurnOnOutput();
 	 	 	TimerHasStarted = false;
 	 	} //end of if statement
 	 	Scroll();
 	EncoderSelectState = digitalRead(EncoderSW);
 	SELECT_State = digitalRead(InputSelect);
 	 switch (currentState)
 	{
 	case SCROLLING:
 	Scroll();
 	break;
 	case SELECTING:
 	// Perform actions when the select is pressed
 	Select(SelectedPage);
 	// Transition back to SCROLLING state if select is released
 	break;
 	} //end of case SELECTING
 	} //End of Void Loop
