
/*LCD Related*/
                      const LiquidCrystalDisplayVariablesSection =
                      `//Liquid crystal display related variables`
                      +
                      `\n \n`
                      +
                      `int scrollPosition = 0;     //First Line`
                      +
                      `\n \t`
                      +
                      `bool selectPressed = false; // Select button latch`
                      +
                      `\n \t`
                      +
                      `int ReturnToStatusPage = false;`
                      +
                      `\n`
                      ;       
                      
/*Voltage Probe Related*/
                const VoltageProbeSpecifications =
					  `//Voltage Probe related variables`
                      +
                      `\n \t`
                      +
                      `const float Resistor1 = 8200; //ohms`
                      +
                      `\n \t`
                      +
                      `const float Resistor2 = 2200; //ohms`
                      +
                      `\n \n`
                      ;
                      
/*Customer-set Variables*/const GlobalVariables =
                      `//Global Variables:`
                      +
                      `\n \t`
                      +
                      `String DeviceName = "${DeviceName}";`
                      +
                      `\n \t`
                      +
                      `float NominalVoltage = ${NominalVoltage};`
                      +
                      `\n \t`
                      +
                      `float ShutOffVoltage = ${ShutOffVoltage};`
                      +
                      `\n \t`
                      +
                      `float TurnBackOnVoltage = ${TurnBackOnVoltage};`
                      +
                      `\n \t`
                      +
                      `unsigned long OverrideDelay = ${OverrideDelay}*60000; //milliseconds`
                      +                      
                      `\n \t`
                      +
                      `unsigned long TimerOffset = ${TimerOffset}*1000; //milliseconds`
                      +
                      `\n \t`
                      +
                      `const int DisconnectBufferTime = ${ShutOffVoltageTimer};  // Number of seconds to add to Disconnect timer (minimum value)`
                      +
                      `\n \t`
                      +
                      `int LanguageSetting = ${LanguageSetting};`
                      +
                      `\n \t`
                      +
                      `int DeviceSetting = ${DeviceSelection};`
                      +
                      `\n \t`
                      +
                      `int SelectedPage = 0;`
                      +
                      `\n \t`
                      +
                      `bool OutputState = 1;`                      
                      +
                      `\n \t`
                      +
                      `const int MaximumEncoderPosition = 4;`
                      +
                      `\n \t `
                      +
                      `bool OverrideDelayLatch = false;`
                      +
                      `\n \t `
                      +
                      `int LastOverrideButtonState = HIGH;`
                      +
                      `\n \t `
                      +
                      `bool OverridePressed = false;`
                      +
                      `\n \t`
                      +
                      `bool OverrideWhileOffAllowed = true;`
                      +
                      `\n \t`
                      +
                      `unsigned long MaxOverrideDelay = 90*60000; //puts limit of 90 minutes`
                      +
                      `\n`
                      ;
          
/*Timer Related*/ const TimerRelatedVariables =
                      `//Timer-related variables`
                      +
                      `\n \t`
                      +
                      `unsigned long previousMillis = 0;`
                      +
                      `\n \t`
                      +
                      `unsigned long RolloverTime = (pow(2,32)-1);// Set an interval in milliseconds to ensure that millis() rollover (happens once approximately every 50 days when millis() resets to zero) is never an issue for more than 10 minutes`
                      +
                      `\n`
                      ;
/*Pin Assignments*/const GetPinAssignments =
                      `//Get Pin Assignments:`
                      +
                      `\n \t`
                      +
                     `int VoltageProbe= ${PinData[DeviceSelection-1].VoltageProbe};`
                      +
                      `\n \t`
                      +
                      `int lcdSDA= ${PinData[DeviceSelection-1].lcdSDA};`
                      +
                      `\n \t`
                      +
                      `int lcdSCL= ${PinData[DeviceSelection-1].lcdSCL};`
                      +
                      `\n \t`
                      +
                      `int EncoderCLK = ${PinData[DeviceSelection-1].EncoderCLK};`
                      +
                      `\n \t`
                      +
                      `int EncoderDT = ${PinData[DeviceSelection-1].EncoderDT};`
                      +
                      `\n \t`
                      +
                      `int EncoderSW = ${PinData[DeviceSelection-1].EncoderSW};`
                      +
                      `\n \t`
                      +
                      `int OverrideDelayButton = ${PinData[DeviceSelection-1].OverrideDelayButton};`
                      +
                      `\n \t`
                      +
                      `int OverrideLight = ${PinData[DeviceSelection-1].OverrideLight};`
                      +
                      `\n \t`
                      +
                      `int RelayOutput = ${PinData[DeviceSelection-1].RelayOutput};`
                      +
                      `\n \t`
                      +
                      `int InputUp = ${PinData[DeviceSelection-1].InputUp};`
                      +
                      `\n \t`
                      +
                      `int InputDown = ${PinData[DeviceSelection-1].InputDown};`
                      +
                      `\n \t`
                      +
                      `int InputRight = ${PinData[DeviceSelection-1].InputRight};`
                      +
                      `\n \t`
                      +
                      `int InputLeft = ${PinData[DeviceSelection-1].InputLeft};`
                      +
                      `\n \t`
                      +             
                      `int InputSelect = ${PinData[DeviceSelection-1].InputSelect};`
                      +
                      `\n `
                      ;                        

/*Encoder Related Global Variables*/const EncoderRelatedGlobalVariables =
                      `\n \t`
                      +
                      `Encoder myEncoder(2, 3);`
                      +
                      `\n \t`
                      +
                      `long oldPosition = -999;`
                      +
                      `\n \t`
                      +
                      `int EncoderDirection = 0;`
                      +
                      `\n \t`
                      +
                      `const int scrollThreshold = 5;`
                      +
                      `\n \t`
                      +
                      `int ChangeInPosition = 0;`
                      +
                      `\n \t`
                      +
                      `int EncoderSelectState = HIGH;`
                      +
                      `\n \t`
                      +
                      `static int lastEncoderSelectState = HIGH;`
                      ;


/*Button Related Global Variables*/const ButtonRelatedGlobalVariables =
                      `\n \t`                      
                      +
                      `long oldPosition = -999;`
                      +
                      `\n \t`
                      +
                      `static int lastEncoderSelectState = HIGH;`
                      +
                      `\n \t`
                      ;
