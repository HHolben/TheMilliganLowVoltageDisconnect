/*Void Select*/const ButtonSelectFunction =
`//----------This Section of the arduino software is created by index.html using SelectFunctions.js----------`
+
`\n \t`
+
`void Select(int SelectedPage)`
+
`\n \t`
+
`{`
+
`\n \t \t`
+
`if (SelectedPage == 0)`
+
`\n \t \t`
+
`{`
+
`\n \t \t \t`
+
`AdjustNominalVoltage();    // Keep updating the screen`
+
`\n \t \t \t`
+
`if (digitalRead(InputRight) == LOW && NominalVoltage <48.0)`
+
`\n \t \t \t`
+
`{`
+
`\n \t \t \t \t`
+
`NominalVoltage = NominalVoltage + 12;`
+
`\n \t \t \t`
+
`} //end if (digitalRead(InputRight) == LOW && NominalVoltage <48.0)`
+
`\n \t \t \t`
+
`if (digitalRead(InputLeft) == LOW && NominalVoltage > 12)`
+
`\n \t \t \t`
+
`{`
+
`\n \t \t \t \t`
+
`NominalVoltage = NominalVoltage - 12;`
+
`\n \t \t \t`
+
`} //end if (digitalRead(InputLeft) == LOW && NominalVoltage > 12)`
+
`\n \t \t`
+
`} //end if (SelectedPage == 0)`
+
`\n \t \t`
+
`if (SelectedPage == 1)`
+
`\n \t \t`
+
`{`
+
`\n \t \t`
+
`AdjustCutOffVoltagePage();`
+
`\n \t \t`
+
`if (digitalRead(InputRight) == LOW) `
+
`\n \t \t`
+
`{`
+
`\n \t \t`
+
`ShutOffVoltage = ShutOffVoltage + 0.1;`
+
`\n \t`
+
`} //end if`
+
`\n \t`
+
`if (digitalRead(InputLeft) == LOW)`
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
`} //end (if SelectedPage==1)`
+
`\n \t`
+
`if (SelectedPage == 2)`
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
`if (digitalRead(InputRight) == LOW)`
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
`if (digitalRead(InputLeft) == LOW)`
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
`if (SelectedPage == 3)`
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
`if (digitalRead(InputRight) == LOW && OverrideDelay < MaxOverrideDelay)`
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
`if (digitalRead(InputLeft) == LOW && (OverrideDelay > 0))`
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
`\n \t`
+
`\n \t`
+
`}`
+
`\n \t`
+
`}`
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
                   `if (SelectedPage == 1)`
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
                   `if (SelectedPage == 2)`
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
                   `} //end of if(LEFT_State == HIGH)`
                   +
                   `\n \t`
                   +
                   `} //end of if (SelectedPage == 2)`
                   +
                   `\n \t`
                   +
                   `if (SelectedPage == 3)`
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
