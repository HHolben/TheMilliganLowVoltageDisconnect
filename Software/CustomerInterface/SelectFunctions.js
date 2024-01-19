/*Void Select*/const ButtonSelectFunction =
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
                   `MenuPageScreens(scrollPosition);    // Keep updating the screen`
                   +
                   `\n \t \t \t`
                   +
                   `if ((RIGHT_State == HIGH)&&(EnableShutOffVoltageBoolean == true))`
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
                   `} //end if((RIGHT_State == HIGH)&&(EnableShutOffVoltageBoolean == true))`
                   +
                   `\n \t \t \t`
                   +
                   `if ((LEFT_State == HIGH)&&(EnableShutOffVoltageBoolean == true))`
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
                   `} // end if((LEFT_State == HIGH)&&(EnableShutOffVoltageBoolean == true))`
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
                   `MenuPageScreens(scrollPosition);`
                   +
                   `\n \t \t \t`
                   +
                   `if ((RIGHT_State == HIGH)&&(EnableTurnBackOnVoltageInterface == true))`
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
                   `} //if ((RIGHT_State == HIGH)&&(EnableTurnBackOnVoltageInterface == true))`
                   +
                   `\n \t \t \t`
                   +
                   `if ((LEFT_State == HIGH)&&(EnableTurnBackOnVoltageInterface == true))`
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
                   `} //end of  if((LEFT_State == HIGH)&&(EnableTurnBackOnVoltageInterface == true))`
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
                   `MenuPageScreens(scrollPosition);`
                   +
                   `\n \t \t \t`
                   +
                   `if ((RIGHT_State == HIGH)&&(EnableOverrideChange == true))`
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
                   `} //end if ((RIGHT_State == HIGH)&&(EnableOverrideChange == true))`
                   +
                   `\n \t \t \t`
                   +
                   `if ((LEFT_State == HIGH)&&(EnableOverrideChange == true))`
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
                   `} //end of if ((LEFT_State == HIGH)&&(EnableOverrideChange == true))`
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
                                    
/*Void Encoder Select*/const EncoderSelectFunction =
                   `void Select(int SelectedPage)`
                   +
                   `\n \t`
                   +
                   `{`
                   +
                   `\n \t`
                   +
                   `long newPosition = myEncoder.read();`
                   +
                   `\n \t`
                   +
                   `if (newPosition != oldPosition)`
                   +
                   `{`
                   +
                   `\n \t`
                   +
                   `//ChangeInPosition = ChangeInPosition % scrollThreshold;  //Not needed if ChangeInPosition reset`
                   +
                   `\n \t`
                   +
                   `ChangeInPosition++;`
                   +
                   `\n \t`
                   +
                   `if (newPosition > oldPosition)`
                   +
                   `\n \t`
                   +
                   `{`
                   +
                   `\n \t`
                   +
                   `EncoderDirection = 1;`
                   +
                   `\n \t`
                   +
                   `}`
                   +
                   `\n \t`
                   +
                   `else if (newPosition < oldPosition)`
                   +
                   `{`
                   +
                   `\n \t`
                   +
                   `EncoderDirection = 2;`
                   +
                   `\n \t`
                   +
                   `}`
                   +
                   `\n \t`
                   +
                   `else`
                   +
                   `\n \t`
                   +
                   `{`
                   +
                   `\n \t`
                   +
                   `EncoderDirection = 0;  //Idle`
                   +
                   `\n \t`
                   +
                   `}`
                   +
                   `\n \t`
                   +
                   `if (SelectedPage == 0)`
                   +
                   `\n \t`
                   +
                   `{`
                   +
                   `\n \t`
                   +
                   `AdjustNominalVoltage();    // Keep updating the screen`
                   +
                   `\n \t`
                   +
                   `if (EncoderDirection == 2 && abs(ChangeInPosition >= scrollThreshold))`
                   +
                   `\n \t`
                   +
                   `{`
                   +
                   `\n \t`
                   +
                   `if (NominalVoltage < 48.0)`
                   +
                   `\n \t`
                   +
                   `{`
                   +
                   `\n \t`
                   +
                   `NominalVoltage = NominalVoltage + 12;`
                   +
                   `\n \t`
                   +
                   `}`
                   +
                   `\n \t`
                   +
                   `} //end if(RIGHT_State == HIGH)`
                   +
                   `\n \t`
                   +
                   `if (EncoderDirection == 1 && abs(ChangeInPosition >= scrollThreshold))`
                   +
                   `\n \t`
                   +
                   `{`
                   +
                   `\n \t`
                   +
                   `if (NominalVoltage > 12)`
                   +
                   `{`
                   +
                   `\n \t`
                   +
                   `NominalVoltage = NominalVoltage - 12;`
                   +
                   `\n \t`
                   +
                   `}`
                   +
                   `\n \t`
                   +
                   `}`
                   +
                   `\n \t`
                   +
                   `}`
                   +
                   `\n \t`
                   +
                   `else if (SelectedPage == 1)`
                   +
                   `\n \t`
                   +
                   `{`
                   +
                   `\n \t`
                   +
                   `AdjustCutOffVoltagePage();`
                   +
                   `\n \t`
                   +
                   `if (EncoderDirection == 2 && abs(ChangeInPosition >= scrollThreshold)) //clockwise`
                   +
                   `\n \t`
                   +
                   `{`
                   +
                   `\n \t`
                   +
                   `ShutOffVoltage = ShutOffVoltage + 0.1;`
                   +
                   `\n \t`
                   +
                   `} //end if(RIGHT_State == HIGH)`
                   +
                   `\n \t`
                   +
                   `if (EncoderDirection == 1 && abs(ChangeInPosition >= scrollThreshold))`
                   +
                   `\n \t`
                   +
                   `{`
                   +
                   `\n \t`
                   +
                   `ShutOffVoltage = ShutOffVoltage - 0.1;`
                   +
                   `\n \t`
                   +
                   `} // end if(LEFT_State == HIGH)`
                   +
                   `\n \t`
                   +
                   `} //end (if SelectedPage==1)`
                   +
                   `\n \t`
                   +
                   `else if (SelectedPage == 2)`
                   +
                   `\n \t`
                   +
                   `{`
                   +
                   `\n \t`
                   +
                   `AdjustReconnectVoltagePage();`
                   +
                   `\n \t`
                   +
                   `if (EncoderDirection == 2 && abs(ChangeInPosition >= scrollThreshold))`
                   +
                   `\n \t`
                   +
                   `{`
                   +
                   `\n \t`
                   +
                   `TurnBackOnVoltage = TurnBackOnVoltage + 0.1;`
                   +
                   `\n \t`
                   +
                   `} //if (RIGHT_State == HIGH)`
                   +
                   `\n \t`
                   +
                   `if (EncoderDirection == 1 && abs(ChangeInPosition >= scrollThreshold))`
                   +
                   `\n \t`
                   +
                   `{`
                   +
                   `\n \t`
                   +
                   `TurnBackOnVoltage = TurnBackOnVoltage - 0.1;`
                   +
                   `\n \t`
                   +
                   `} //end of  if(LEFT_State == HIGH)`
                   +
                   `\n \t`
                   +
                   `} //end of else if (SelectedPage == 2)`
                   +
                   `\n \t`
                   +
                   `else if (SelectedPage == 3)`
                   +
                   `\n \t`
                   +
                   `{`
                   +
                   `\n \t`
                   +
                   `AdjustOverrideTimePage();`
                   +
                   `\n \t`
                   +
                   `if (EncoderDirection == 2 && abs(ChangeInPosition >= scrollThreshold))`
                   +
                   `\n \t`
                   +
                   `{`
                   +
                   `\n \t`
                   +
                   `OverrideDelay = OverrideDelay + (5*60000);`
                   +
                   `\n \t`
                   +
                   `}`
                   +
                   `\n \t`
                   +
                   `if (EncoderDirection == 1 && abs(ChangeInPosition >= scrollThreshold) && (OverrideDelay > 0))`
                   +
                   `\n \t`
                   +
                   `{`
                   +
                   `\n \t`
                   +
                   `OverrideDelay = OverrideDelay - (5*60000);`
                   +
                   `\n \t`
                   +
                   `} //end of if (LEFT_State == HIGH)`
                   +
                   `\n \t`
                   +
                   `}`
                   +
                   `\n \t`
                   +
                   `oldPosition = newPosition;    //Update oldPosition for next iteration`
                   +
                   `\n \t`
                   +
                   `}`
                   +
                   `\n \t`
                   +
                   `}`
                   ;
