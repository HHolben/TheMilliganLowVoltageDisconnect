            //Extract Variables From the Form
                //Nominal Battery Voltage JS Variable
                    const DeviceName = document.getElementById("DeviceName").value;
            
                //Nominal Battery Voltage JS Variable
                    const NominalVoltage = document.getElementById("NominalVoltage").value;

                  
                //Shut off Voltage JS Variable
                    const ShutOffVoltage = document.getElementById("ShutOffVoltage").value;
            
                //Shut off Voltage Timer JS Variable
                    const ShutOffVoltageTimer = document.getElementById("ShutOffVoltageTimer").value;    
            
            
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
                           
                //Device JS Variables
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
                    
            
            
            //User-adjustables: in this section, we will create an array to represent all items the customer has decided to allow the end user to change using the end-user interface. We wil then create a string full of arduino code related to creating the end-user interface's menu which we can later inject into the final arduino program
            
            
            const MaximumRowNumber = 4;//this is because we are using an LCD screen with 4 rows. If that changes, you will want to change this constant right here.
            
          var Adjustables = [];
            if(document.getElementById("EnableNameChange").checked == true)
            {
                 Adjustables.push(["Device Name", "Nombre Dispositivo"]);
            }// end if
            
            if(document.getElementById("EnableNominalVoltageInterface").checked == true)
            {
                 Adjustables.push(["Batt. Voltage", "V. Bateria"]);
            }// end if
            
            if(document.getElementById("EnableShutOffVoltageInterface").checked == true)
            {
                 Adjustables.push(["CutOff Voltage", "Corte Voltaje"]);
            }// end if
            
            if(document.getElementById("EnableTurnBackOnVoltageInterface").checked == true)
            {
                 Adjustables.push(["CutOn Voltage", "Encendido Voltaje"]);
            }// end if
            
            if(document.getElementById("override").checked == true)
            {
                 Adjustables.push(["Override Time", "Anulación Tiempo"]);
            }// end if
            
            if(document.getElementById("EnableTimerOffsetBoolean").checked == true)
            {
                 Adjustables.push(["Timer Offset", "Despl. Temporizador"]);
            }// end if
            
            if(document.getElementById("EnableLanguageInterface").checked == true)
            {
                 Adjustables.push(["Language/Lengua", "Language/Lengua"]);
            }//end if

            const NumberOfOptions = Adjustables.length; //we are about to change Adjustables.length, so we need to save this value for later

            if(Adjustables.length < MaximumRowNumber)
            {
                for(i=Adjustables.length; i<MaximumRowNumber; i++)
                {
                    Adjustables.push(["                   ", "                   "]);
                }

            }
