                  /*Void Loop*/     const LoopFunction =
                  `//----------This Section of the arduino software is created by index.html using VoidLoop.js----------`
                  +
                  `\n \t`
                  +
                  `void loop()`
                  +
                  `\n \t`
                  +
                  `{`
                  +
                  `\n \t \t`
                  +
                  `int lastSwitchState;`
 	              +
                  `\n \t \t`
                  +
                  `int EncoderSelectState = digitalRead(EncoderSW);`
                  +
                  `\n \t \t`
 	              +
                  `int SELECT_State = digitalRead(InputSelect);`
                  +
                  `\n \t \t`
                  +
                  `if (EncoderSelectState == LOW && lastEncoderSelectState == HIGH )`
                  +
                  `\n \t \t`
                  +
                  `{`  
                  +
                  `\n \t \t \t`
                  +
                  `// Update the switch state`
                  +
                  `\n \t \t \t`
                  +
                  `selectPressed = !selectPressed;` 
                  +
                  `\n \t \t \t`
                  +
                  `// Toggle the latched state`
                  +
                  `\n \t \t`
                  +
                  `} //end if (EncoderSelectState == LOW && lastEncoderSelectState == HIGH)`
                  +
                  `\n \t \t`
                  +
                  `// Update the last state`
                  +
                  `\n \t \t`
                  +
                  `lastEncoderSelectState = EncoderSelectState;`
                  +
                  `\n \t \t`
                  + 
              	  `// Check if the encoder button is pressed`
                  +
                  `\n \t \t`
                  +
                  `if (selectPressed)`
                  +
                  `\n \t \t`
                  +
                  `{`
                  +
                  `\n \t \t \t`
                  +
                  `if (currentPage==STATUS_PAGE && lastEncoderSelectState == LOW)`
                  +
                  `\n \t \t \t`
                  +
                  `{`
                  +
                  `\n \t \t \t \t`
                  +
                  `currentPage = MENU_PAGE;`
                  +
                  `\n \t \t \t \t`
                  +
                  `currentState = SCROLLING;`
                  +
                  `\n \t \t \t`
                  +
                  `}`
                  +
                  `\n \t \t \t`
                  +
                  `}`
                  +
                  `\n \t \t`
                  +
                  `else if (currentPage == MENU_PAGE && scrollPosition == 0)`    
                  +
                  `\n \t \t`
                  +
                  `{`
                  +
                  `\n \t`
                  +
                  `if (!selectPressed)`
                  +
                  `\n \t`
                  +
                  `{`
                  +
                  `\n \t \t`
                  +
                  `currentPage = NOMINAL_VOLTAGE_PAGE;` 
                  +
                  `\n \t`
                  +
                  `currentState = SELECTING;`
                  +
                  `\n \t`
                  +
                  `SelectedPage = 0;`
                  +
                  `\n \t \t`
                  +
                  `}`
                  +
                  `\n \t`
                  +
                  `}`
                  +
                  `\n \t`
                  +
                  `else if (currentPage == MENU_PAGE && scrollPosition == 1)`
                  +
                  `\n \t`    
                  +
                  `{`
                  +
                  `\n \t \t`
                  +
                  `if (!selectPressed)`
                  +
                  `\n \t \t`
                  +
                  `{`
                  +
                  `\n \t \t \t`
                  +
                  `currentPage = CUT_OFF_VOLTAGE_PAGE;` 
                  +
                  `\n \t`
                  +
                  `currentState = SELECTING;`
                  +
                  `\n \t`
                  +
                  `SelectedPage = 1;`
                  +
                  `\n \t \t \t`
                  +
                  `}`
                  +
                  `\n \t \t`
                  +
                  `}`
                  +
                  `\n \t \t`
                  +
                  `else if (currentPage == MENU_PAGE && scrollPosition == 2)`
                  +
                  `\n \t \t`
                  +
                  `{`                 
                  +
                  `\n \t \t`
                  +
                  `if (!selectPressed)`
                  +
                  `\n \t \t`
                  +
                  `{`
                  +
                  `currentPage = RECONNECT_VOLTAGE_PAGE;` 
                  +
                  `\n \t`
                  +
                  `currentState = SELECTING;`
                  +
                  `\n \t`
                  +                  
                  `SelectedPage = 2;`
                  +
                  `} //end if (!selectPressed)`
                  +
                  `\n \t`
                  +
                  `} // end else if (currentPage == MENU_PAGE && scrollPosition == 2)`
                  +
                  `\n \t`
                  +
                  `else if (currentPage == MENU_PAGE && scrollPosition == 3)`
                  +
                  `\n \t`
                  +
                  `{`
                  +
                  `\n \t`
                  +
                  `if (!selectPressed)`
                  +
                  `\n \t`
                  +
                  `{`
                  +
                  `\n \t`
                  +
                  `currentPage = OVERRIDE_TIME_PAGE;`
                  +
                  `\n \t`
                  +
                  `currentState = SELECTING;`
                  +
                  `\n \t`
                  +
                  `SelectedPage = 3;`
                  +
                  `} //if (!selectPressed)`
                  +
                  `\n \t`
                  +
                  `}// else if`
                  +
                `\n \t`
                +
                `else if( currentPage == NOMINAL_VOLTAGE_PAGE || currentPage == CUT_OFF_VOLTAGE_PAGE || currentPage == RECONNECT_VOLTAGE_PAGE || currentPage == OVERRIDE_TIME_PAGE)`
                +
                `\n \t \t`
                +
                `{`
                 +
                `\n \t \t \t`
                +
                `ReturnToStatusPage = true;`
                +
                `\n \t \t`
                +
                `} //end else if`
                +
                `\n \t`
                +
                `if(selectPressed && ReturnToStatusPage == true)`
                +
                `\n \t`
                +
                `{`
                +
                `\n \t`
                +
                `currentPage = STATUS_PAGE;`
                +
                `\n \t`
                +
                `currentState = SCROLLING;`
                +
                `\n \t`
                +
                `EncoderSelectState = HIGH;`
                +  
                `\n \t`
                +
                `ReturnToStatusPage = false;`
                + 
                `\n \t`
                +
                `} //end if`
                +
                `\n \t`
                +
                `switch (currentPage)`
                +
                `\n \t`
                +
                `{` 
                +
                `case STATUS_PAGE:`
                +
                `\n \t \t`
                +
                `StatusPageScreen();`
                +
                `\n \t \t`
                +
                `break;`
                +
                `\n \t \t`
                +
                `case MENU_PAGE:`
                +
                `\n \t \t`
                +
                `MenuPageScreens(scrollPosition);`
                +
                `\n \t \t`
                +
                `break;`
                +
                `\n \t \t`
                +
                `case NOMINAL_VOLTAGE_PAGE:`
                +
                `\n \t \t`
                +
                `AdjustNominalVoltage();`
                +
                `\n \t \t`
                +
                `break;`
                +
                `\n \t \t`
                +
                `case CUT_OFF_VOLTAGE_PAGE:`
                +
                `\n \t \t`
                +
                `AdjustCutOffVoltagePage();`
                +
                `\n \t \t`
                +
                `break;`
                +
                `\n \t \t`
                +
                `case RECONNECT_VOLTAGE_PAGE:`
                +
                `\n \t \t`
                +
                `AdjustReconnectVoltagePage();`
                +
                `\n \t \t`
                +
                `break;`
                +
                `\n \t \t`
                +
                `case OVERRIDE_TIME_PAGE:`
                +
                `\n \t \t`
                +
                `AdjustOverrideTimePage();`
                +
                `\n \t \t`
                +
                `break;`
                +
                `\n \t \t`
                +
                `}`
                +
                  `\n \t`
                  +
                  LowVoltageCheck
                  +
                  `\n \t`
                  +
                  ReconnectVoltageCheck
                  +
                  `\n \t `
                  +
                  `switch (currentState)`
                  +
                  `\n \t` 
                  +
                  `{`
                  +
                  `\n \t` 
                  +
                  `case SCROLLING:`
                  +
                  `\n \t` 
                  +
                  `Scroll();`
                  +
                  `\n \t`
                  +
                  `break;`
                  +
                  `\n \t` 
                  +
                  `case SELECTING:`
                  +
                  `\n \t` 
                  +
                  `// Perform actions when the select is pressed`
                  +
                  `\n \t` 
                  +
                  `Select(SelectedPage);`
                  +
                  `\n \t` 
                  +
                  `// Transition back to SCROLLING state if select is released`
                  +
                  `\n \t` 
                  +
                  `break;`
                  +
                  `\n \t` 
                  +
                  `} //end of case SELECTING`
                  +
                  `\n \t` 
                  +
                  `} //End of Void Loop`
                  ;//end of arduinoCode constant
