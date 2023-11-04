document.addEventListener('DOMContentLoaded', function() {
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
                  `Serial.print("Output disconnected.");`
                  +
                  `\n`
                  +
                  `} //end of function, TurnOffOutput()`
                  +
                  `\n \n`
                  ;
});