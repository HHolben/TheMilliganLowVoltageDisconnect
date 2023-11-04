document.addEventListener('DOMContentLoaded', function() {
    /*Void Select*/    const SelectFunction =
                   `void Select()`
                   +
                   `\n \t`
                   +
                   `{`
                   +
                   `\n \t \t`
                   +
                   `int RIGHT_State = digitalRead(InputRight);`
                   +
                   `\n \t \t`
                   +
                   `int LEFT_State = digitalRead(InputLeft);`
                   +
                   `\n \t \t`
                   +
                   `\n \t \t`
                   +
                   `if (scrollPosition == 1)`
                   +
                   `\n \t \t`
                   +
                   `{`
                   +
                   `\n \t \t \t`
                   +
                   `Screens(scrollPosition);    // Keep updating the screen`
                   +
                   `\n \t \t \t`
                   +
                   `if (RIGHT_State == HIGH)`
                   +
                   `\n \t \t \t`
                   +
                   `{`
                   +
                   `\n \t \t \t \t`
                   +
                   `ShutOffVoltage = ShutOffVoltage + 0.1;`
                   +
                   `\n \t \t \t`
                   +
                   `} //end if(RIGHT_State == HIGH)`
                   +
                   `\n \t \t \t`
                   +
                   `if (LEFT_State == HIGH)`
                   +
                   `\n \t \t \t`
                   +
                   `{`
                   +
                   `\n \t \t \t \t`
                   +
                   `ShutOffVoltage = ShutOffVoltage - 0.1;`
                   +
                   `\n \t \t \t`
                   +
                   `} // end if(LEFT_State == HIGH)`
                   +
                   `\n \t \t`
                   +
                   `} //end (if ScrollPosition==1)`
                   +  
                   `\n \t \t`
                   +
                   `else if (scrollPosition == 2)`
                   +  
                   `\n \t \t`
                   +
                   `{`
                   +
                   `\n \t \t \t`
                   +
                   `Screens(scrollPosition);`
                   +
                   `\n \t \t \t`
                   +
                   `if (RIGHT_State == HIGH)`
                   +
                   `\n \t \t \t`
                   +
                   `{`
                   +
                   `\n \t \t \t \t`
                   +
                   `TurnBackOnVoltage = TurnBackOnVoltage + 0.1;`
                   +
                   `\n \t \t \t`
                   +
                   `} //if (RIGHT_State == HIGH)`
                   +
                   `\n \t \t \t`
                   +
                   `if (LEFT_State == HIGH)`
                   +  
                   `\n \t \t \t`
                   +
                   `{`
                   +
                   `\n \t \t \t \t`
                   +
                   `TurnBackOnVoltage = TurnBackOnVoltage - 0.1;`
                   +
                   `\n \t \t \t`
                   +
                   `} //end of  if(LEFT_State == HIGH)`
                   +
                   `\n \t \t`
                   +
                   `} //end of else if (scrollPosition == 2)`
                   +
                   `\n \t \t`
                   +
                   `else if (scrollPosition == 3)`
                   +
                   `\n \t \t`
                   +
                   `{`
                   +
                   `\n \t \t \t`
                   +
                   `Screens(scrollPosition);`
                   +
                   `\n \t \t \t`
                   +
                   `if (RIGHT_State == HIGH)`
                   +
                   `\n \t \t \t`
                   +
                   `{`
                   +
                   `\n \t \t \t \t`
                   +
                   `OverrideDelay = OverrideDelay + (5*60000);`
                   +
                   `\n \t \t \t`
                   +
                   `}`
                   +
                   `\n \t \t \t`
                   +
                   `if (LEFT_State == HIGH)`
                   +
                   `\n \t \t \t`
                   +
                   `{`
                   +
                   `\n \t \t \t \t`
                   +
                   `OverrideDelay = OverrideDelay - (5*60000);`
                   +
                   `\n \t \t \t`
                   +
                   `} //end of if (LEFT_State == HIGH)`
                   +
                   `\n \t \t`
                   +
                   `}   //end of else if (scrollPosition == 3)`
                   +
                   `\n \t`
                   +
                   `} //end void Select()` 
                   +
                   `\n \t`
                   ;
});