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
                   `if (SelectedPage == 1)`
                   +
                   `\n \t \t`
                   +
                   `{`
                   +
                   `\n \t \t \t`
                   +
                   `Screens(SelectedPage);    // Keep updating the screen`
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
                   `} //end (if SelectedPage==1)`
                   +  
                   `\n \t \t`
                   +
                   `else if (SelectedPage == 2)`
                   +  
                   `\n \t \t`
                   +
                   `{`
                   +
                   `\n \t \t \t`
                   +
                   `Screens(SelectedPage);`
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
                   `} //end of else if (SelectedPage == 2)`
                   +
                   `\n \t \t`
                   +
                   `else if (SelectedPage == 3)`
                   +
                   `\n \t \t`
                   +
                   `{`
                   +
                   `\n \t \t \t`
                   +
                   `Screens(SelectedPage);`
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
                   `}   //end of else if (SelectedPage == 3)`
                   +
                   `\n \t`
                   +
                   `} //end void Select()` 
                   +
                   `\n \t`
                   ;
});