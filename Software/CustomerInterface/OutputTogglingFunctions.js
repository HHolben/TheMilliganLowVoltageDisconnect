/*Turn off output*/const TurnOffOutputFunction =
                  `//----------This Section of the arduino software is created by index.html using OutputTogglingFunctions.js----------`
                  +
                  `\n \t`
                  +
                  `void TurnOffOutput()`
                  +
                  `\n`
                  +
                  `{`
                  +
                  `\n \t`
                  +
                  `digitalWrite(RelayOutput, HIGH);  // sets the relay output off`
                  +                  
                  `\n \t`
                  +
                  `OutputState = 0;`
                  +
                  `\n`
                  +
                  `} //end of function, TurnOffOutput()`
                  +
                  `\n`
                  ;
/*Turn on output*/const TurnOnOutputFunction =
                  `//----------This Section of the arduino software is created by index.html using MemoryFunctions.js----------`
                  +
                  `\n \t`
                  +
                  `void TurnOnOutput() `
                  +
                  `\n`
                  +
                  `{`
                  +
                  `\n \t`
                  +
                  `digitalWrite(RelayOutput, LOW);  // sets the relay output on`
                  +
                  `\n \t`
                  +
                  `OutputState = 1;`
                  //+
                  //`Serial.print(DeviceName +"Output connected.");`
                  +
                  `\n`
                  +
                  `} //end of function, TurnOnOutput()`
                  +
                  `\n`
                  ;
