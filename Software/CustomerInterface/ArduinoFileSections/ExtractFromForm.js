 document.addEventListener('DOMContentLoaded', function() {
//Extract Variables From the Form
            
            
            //Nominal Battery Voltage JS Variable
            const NominalVoltage = document.getElementById("NominalVoltage").value;
           // const EnableNominalVoltageBoolean=(document.getElementById("EnableNominalVoltageInterface").checked);

     //Shut off Voltage JS Variable
            const ShutOffVoltage = document.getElementById("ShutOffVoltage").value;
            const EnableShutOffVoltageBoolean=(document.getElementById("EnableShutOffVoltageInterface").checked);
            
            
            //Turn back on voltage JS Variables
            const TurnBackOnVoltage = document.getElementById("TurnBackOnVoltage").value; //Turn Back on Voltage JS Variable
            const EnableTurnBackOnVoltageBoolean=(document.getElementById("EnableTurnBackOnVoltageInterface").checked);
           
            //Current Range
            
            
            const LowCurrent = document.getElementById("LowCurrent").value; //Low Current JS Variable

  
            //Override JS Variables
            const OverrideDelay = document.getElementById("OverrideDelay").value; //Override Delay JS Variable
            const Override=(document.getElementById("override").checked);
           
            //Timer Offset
            const TimerOffset = document.getElementById("TimerOffset").value; //Turn Back on Voltage JS Variable
            const EnableTimerOffsetBoolean=(document.getElementById("EnableTimerOffsetBoolean").checked);

            
            //Language JS Variables
            if(document.getElementById("english").checked==true)
            {

                var LanguageSetting = 1;


            }
            if(document.getElementById("spanish").checked == true)
            {
                var LanguageSetting = 2;


            }

                
            const EnableLanguageOption=(document.getElementById("EnableLanguageInterface").checked);
           
            //Device JS Variables
            if(document.getElementById("ArduinoNano").checked==true)
            {

                var DeviceSelection = 1;


            }
            if(document.getElementById("ArduinoNanoESP32").checked == true)
            {
                var DeviceSelection = 2;


            }
            if(document.getElementById("ArduinoUno").checked==true)
            {

                var DeviceSelection = 3;


            }
            if(document.getElementById("ArduinoMega").checked == true)
            {
                var DeviceSelection = 4;


            }
 });