document.addEventListener('DOMContentLoaded', function() {
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
                  `\n \t`
                  +
                  `\n \t`
                  +
                  `\n \t`
                  +
                  `\n \n`
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
                  `int PushButton = ${PinData[DeviceSelection-1].PushButton};`
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
});