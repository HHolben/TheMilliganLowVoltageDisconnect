            //Extract Variables From the Form
                //Nominal Battery Voltage JS Variable
       const DeviceName = document.getElementById("DeviceName").value;
            
                //Nominal Battery Voltage JS Variable
       const NominalVoltage = document.getElementById("NominalVoltage").value;

     
                //Shut off Voltage JS Variable
       const ShutOffVoltage = document.getElementById("ShutOffVoltage").value;
            
                //Shut off Voltage Timer JS Variable
       const ShutOffVoltageTimer = document.getElementById("ShutOffVoltageTimer").value *10000; //convert seconds to milliseconds    
            
            
                //Turn back on voltage JS Variables
       const TurnBackOnVoltage = document.getElementById("TurnBackOnVoltage").value; //Turn Back on Voltage JS Variable
           
                //Override JS Variables
       const OverrideDelay = document.getElementById("OverrideDelay").value; //Override Delay JS Variable
           
                //Timer Offset
       const TimerOffset = document.getElementById("TimerOffset").value; //Turn Back on Voltage JS Variable

                //Language JS Variables
       if(document.getElementById("english").checked==true)
       {
        var LanguageSetting = 0;
       }// end if
            
       if(document.getElementById("spanish").checked == true)
       {
        var LanguageSetting = 1;
       }// end if
           
                //Microcontroller JS Variables
       if(document.getElementById("ArduinoNano").checked==true)
       {
        var DeviceSelection = 1;
       }// end if
            
       if(document.getElementById("ArduinoNanoESP32").checked == true)
       {
        var DeviceSelection = 2;
       }// end if
       
       if(document.getElementById("ArduinoUno").checked==true)
       {
        var DeviceSelection = 3;
       }// end if
            
       if(document.getElementById("ArduinoMega").checked == true)
       {
        var DeviceSelection = 4;
       }// end if
            
                //Control Type JS Variables
       if(document.getElementById("ButtonArray").checked == true)
       {
        var ControlSelection = 1;
       }// end if
            
       if(document.getElementById("Encoder").checked == true)
       {
        var ControlSelection = 2;
       }// end if

       //Output Type JS Variables
       if(document.getElementById("RelayOutput").checked == true)
       {
            var OutputSelection = 1;
       }// end if
                  
       if(document.getElementById("InverterControl").checked == true)
       {
            var OutputSelection = 2;
       }// end if
     
            //User-adjustables: in this section, we will create an array to represent all items the customer has decided to allow the end user to change using the end-user interface. We wil then create a string full of arduino code related to creating the end-user interface's menu which we can later inject into the final arduino program
            
            
            const MaximumRowNumber = 4;//this is because we are using an LCD screen with 4 rows. If that changes, you will want to change this constant right here.
                        

//initialize the js arrays we need to store information related to items the customer chose to be adjustable

          var Adjustables = [["Status            ","Estado            "], ["",""]];
          var EnumAdjustables =["STATUS_PAGE", "MENU_PAGE"];
          var PageNamesAdjustables = ["StatusPageScreen()", "MenuPageScreens(scrollPosition)"];
          var AdjustablesValueLimit = [[0,0],[0,0]]; //lower and upper limit for the values which van be saved to these adjustables
          var AdjustablesTargetVariables = ["",""]; //lower and upper limit for the values which van be saved to these adjustables
          var AdjustablesTargetTempVariables = ["",""]; //temp values are values that are displayed on screens
          var AdjustablesTargetStepSize = [0,0]; //lower and upper limit for the values which van be saved to these adjustables
          var TargetMemoryLocations =[0,0];


          console.log(AdjustablesValueLimit);
//create a javascript array of the variable names and types associated with each address

     //Name Change Arrays 
       // This is commented out for now as changing the name of the device using the LCD screen is a feature that will be very hard to implement and seems unlikely to be useful
            /*if(document.getElementById("EnableNameChange").checked == true)
            {
                 Adjustables.push(["Device Name", "Nombre Dispositivo"]);
                 EnumAdjustables.push("DEVICE_NAME_PAGE");
                 PageNamesAdjustables.push("");//we need a page function for this to go here
                 AdjustablesValueLimit.push(["0", "37"]);
                 AdjustablesTargetVariables.push("DeviceName");
                 AdjustablesTargetTempVariables.push("TempDeviceName");
                 AdjustablesTargetStepSize.push(1);
                 TargetMemoryLocations.push(LVDnameAddress.value);

            }// end if
            */
            
     //Nominal Voltage Adjustable Arrays
            if(document.getElementById("EnableNominalVoltageInterface").checked == true)
            {
                 Adjustables.push(["Batt. Bank Voltage ", "Voltaje Bateria    "]);
                 EnumAdjustables.push("NOMINAL_VOLTAGE_PAGE");
                 PageNamesAdjustables.push("AdjustNominalVoltage");
                 AdjustablesValueLimit.push(["12.0", "48.0"]);
                 AdjustablesTargetVariables.push("NominalVoltage");
                 AdjustablesTargetTempVariables.push("TempNominalVoltage");
                 AdjustablesTargetStepSize.push(12);
                 TargetMemoryLocations.push(NominalVoltageAddress.value);

            }// end if


            //TargetMemoryLocations.push(DisconnectTimeAddress.value);
           // AdjustablesTargetVariables.push("DisconnectBufferTime");


            if(document.getElementById("EnableShutOffVoltageInterface").checked == true)
            {
                 Adjustables.push(["CutOff Voltage", "Voltaje de Cortar  "]);
                 EnumAdjustables.push("CUT_OFF_VOLTAGE_PAGE");
                 PageNamesAdjustables.push("AdjustCutOffVoltagePage");
                 AdjustablesValueLimit.push(["0","48.0"]);
                 AdjustablesTargetVariables.push("ShutOffVoltage");
                 AdjustablesTargetTempVariables.push("TempShutOffVoltage");
                 AdjustablesTargetStepSize.push(1.0);
                 TargetMemoryLocations.push(ShutOffVoltageAddress.value);
   
            }// end if
            
            if(document.getElementById("EnableTurnBackOnVoltageInterface").checked == true)
            {
                 Adjustables.push(["CutOn Voltage      ", "V. de Reconectar   "]);
                 EnumAdjustables.push("RECONNECT_VOLTAGE_PAGE");
                 PageNamesAdjustables.push("AdjustReconnectVoltagePage");
                 AdjustablesValueLimit.push(["0", "48.0"]);
                 AdjustablesTargetVariables.push("TurnBackOnVoltage");
                 AdjustablesTargetTempVariables.push("TempTurnBackOnVoltage");
                 AdjustablesTargetStepSize.push(1.0);
                 TargetMemoryLocations.push(TurnOnVoltageAddress.value);

            }// end if
            
            if(document.getElementById("override").checked == true)
            {
                 Adjustables.push(["Override Time", "Tiempo de anulacion "]);
                 EnumAdjustables.push("OVERRIDE_TIME_PAGE");
                 PageNamesAdjustables.push("AdjustOverrideTimePage")
                 AdjustablesValueLimit.push(["0", "1000"]);
                 AdjustablesTargetVariables.push("OverrideDelay");
                 AdjustablesTargetTempVariables.push("TempOverrideDelay");
                 AdjustablesTargetStepSize.push(1.0);
                 TargetMemoryLocations.push(OverrideTimeAddress.value);


                 
            }// end if
            
            if(document.getElementById("EnableTimerOffsetBoolean").checked == true)
            {
                 Adjustables.push(["Timer Offset", "Despl. Temporizador"]);
                 EnumAdjustables.push("TIMER_OFFSET_PAGE");
                 PageNamesAdjustables.push("TimerOffset")
                 AdjustablesValueLimit.push(["0","1000"]);
                 AdjustablesTargetStepSize.push(1.0);
                 TargetMemoryLocations.push(TimerOffsetAddress.value);
                 AdjustablesTargetVariables.push("TimerOffset");
                 AdjustablesTargetTempVariables.push("TempTimerOffset");

            }// end if
            
            if(document.getElementById("EnableLanguageInterface").checked == true)
            {
                 Adjustables.push(["Language/Lengua", "Language/Lengua"]);                 
                 EnumAdjustables.push("SWITCH_LANGUAGE_PAGE");
                 PageNamesAdjustables.push("ChangeLanguage")
                 AdjustablesValueLimit.push(["0", "1"]);
                 AdjustablesTargetStepSize.push(1);
                 TargetMemoryLocations.push(LanguageAddress.value);
                 AdjustablesTargetVariables.push("LanguageSetting");
                 AdjustablesTargetTempVariables.push("TempLanguageSetting");



                 

            }//end if

            const NumberOfOptions = Adjustables.length; //we are about to change Adjustables.length, so we need to save this value for later


            if(NumberOfOptions < MaximumRowNumber)
            {
               
                for(i=NumberOfOptions; i<MaximumRowNumber+1; i++) //The +1 is because Menu Items start on the second index of the Adjustables array
                {
                    Adjustables.push(["                   ", "                   "]);
                }

            }
            

            var DefaultMenuPageScreenStateEnumItems = //initialize this variable to later add pages to an enum in the arduino code
            `\n \t \t`
            +
            `STATUS_PAGE,`
            +
            `\n \t \t`
            +
            `MENU_PAGE,`
            ;
           

            for (var i = 2; i < NumberOfOptions; i++) 
            {
            
               DefaultMenuPageScreenStateEnumItems = 
               DefaultMenuPageScreenStateEnumItems
               +
               `\n \t \t`
               +
               `${EnumAdjustables[i]}`;
               ;
               

                      
                if (i < NumberOfOptions - 1) 
                {
                    DefaultMenuPageScreenStateEnumItems += ", ";
                }//end if
                
            }//end for

            console.log(EnumAdjustables);
        
