document.addEventListener('DOMContentLoaded', function() 
                          {
    /*Screen Case Statements*/const LCDScreenCaseStatements =
                  `//All Possible Screens`
                  +
                  `\n \t`
                  +
                  `void Screens(int SelectedPage)`
                  +
                  `\n \t`
                  +
                  `{`
                  +
                  `\n \t \t`
                  +
                  `switch(SelectedPage)`
                  +
                  `\n \t \t`
                  +
                  `{`
                  +
                  `\n \t \t \t`
                  +
                  `case 0:`/* Case 0 Starts Here*/
                  +
                  `\n \t \t \t`
                  +
                  `{`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.setCursor(0,0);`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print(">Batt. V        ");`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print(NominalVoltage,1);`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.setCursor(0,1);`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print(" CutOff V       ");`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print(ShutOffVoltage,1);`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.setCursor(0,2);`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print(" CutOn V        ");`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print(TurnBackOnVoltage,1);`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.setCursor(0,3);`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print(" Override T:   ");`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print(OverrideDelay/60000);`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print("min");`
                  +
                  `\n \t \t \t \t`
                  +
                  `break;`
                  +
                  `\n \t \t \t`
                  +
                  `}`                   
                  +
                  `\n \t \t \t`
                  +
                  `case 1:`
                  +
                  `\n \t \t \t`
                  +
                  `{`/* Case 1 Starts Here*/
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.setCursor(0,0);`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print(" Batt. V        ");`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print(NominalVoltage,1);`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.setCursor(0,1);`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print(">CutOff V       ");`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print(ShutOffVoltage,1);`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.setCursor(0,2);`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print(" CutOn V        ");`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print(TurnBackOnVoltage,1);`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.setCursor(0,3);`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print(" Override T:   ");`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print(OverrideDelay/60000);`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print("min");`
                  +
                  `\n \t \t \t \t`
                  +
                  `break;`
                  +
                  `\n \t \t \t`
                  +
                  `}`
                  +
                  `\n \t \t \t`
                  +
                  `case 2:`
                  +
                  `\n \t \t \t`
                  +
                  `{`/* Case 2 Starts Here*/
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.setCursor(0,0);`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print(" Batt. V        ");`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print(NominalVoltage,1);`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.setCursor(0,1);`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print(" CutOff V       ");`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print(ShutOffVoltage,1);`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.setCursor(0,2);`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print(">CutOn V        ");`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print(TurnBackOnVoltage,1);`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.setCursor(0,3);`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print(" Override T:   ");`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print(OverrideDelay/60000);`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print("min");`
                  +
                  `\n \t \t \t \t`
                  +
                  `break;`
                  +
                  `\n \t \t \t`
                  +
                  `}`
                  +
                  `\n \t \t \t`
                  +
                  `case 3:`
                  +
                  `\n \t \t \t`
                  +
                  `{`/* Case 3 Starts Here*/
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.setCursor(0,0);`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print(" Batt. V        ");`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print(NominalVoltage,1);`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.setCursor(0,1);`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print(" CutOff V       ");`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print(ShutOffVoltage,1);`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.setCursor(0,2);`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print(" CutOn V        ");`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print(TurnBackOnVoltage,1);`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.setCursor(0,3);`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print(">Override T:   ");`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print(OverrideDelay/60000);`
                  +
                  `\n \t \t \t \t`
                  +
                  `lcd.print("min");`
                  +
                  `\n \t \t \t \t`
                  +
                  `break;`
                  +
                  `\n \t \t \t`
                  +
                  `} //end of case 3`
                  +
                  `\n \t \t`
                  +
                  `} // end of switch`
                  +
                  `\n \t`
                  +
                  `}//End of Screens()`
                  +
                  `\n \t`
                  +      
                  `//lcd.print(" ") then next line print the arrow`
                  +
                  `\n \t`
                  +
                  `//Allows ">" character to change lines`
                  +
                  `\n \t`
                  ;
});