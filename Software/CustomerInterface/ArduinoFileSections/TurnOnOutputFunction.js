document.addEventListener('DOMContentLoaded', function() {
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
                  `Serial.print("Output connected.");`
                  +
                  `\n`
                  +
                  `} //end of function, TurnOnOutput()`
                  +
                  `\n \n`
                  ;
});