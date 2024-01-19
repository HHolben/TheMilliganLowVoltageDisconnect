/*Turn off output*/const TurnOffOutputFunction =
                  `void TurnOffOutput()`
                  +
                  `\n`
                  +
                  `{`
                  +
                  `\n \t`
                  +
                  `digitalWrite(RelayOutput, LOW);  // sets the relay output off`
                  +                  
                  `\n \t`
                  +
                  `OutputState = 0;`
                  +
                  `\n \t`
                  //+
                  //`Serial.print(DeviceName +"Output disconnected.");`
                  +
                  `\n`
                  +
                  `} //end of function, TurnOffOutput()`
                  +
                  `\n`
                  ;
/*Turn on output*/const TurnOnOutputFunction =
                  `void TurnOnOutput() `
                  +
                  `\n`
                  +
                  `{`
                  +
                  `\n \t`
                  +
                  `digitalWrite(RelayOutput, HIGH);  // sets the relay output on`
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
