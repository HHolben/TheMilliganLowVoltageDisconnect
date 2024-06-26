    
    var ButtonSelectFunction =       
    `//*************** Button Select Function: *************** this section of the code is generated by index.html using SelectFunctions.js ***************
    \n void Select(int SelectedPage) \n {`;

/*
    ButtonSelectFunction = ButtonSelectFunction 
    +
    `\n \t`
    +
    `if (SelectedPage == 0) // this happens if the user wants to go back to the select page` 
    +
    `\n \t`
    +
    `{`
    +
    `\n \t \t`
    +
    `StatusPageScreen();`
    +
    `\n \t`
    +
    `}`
    ;
    */

      for (let i = 2; i <= NumberOfOptions-1; i++) //i starts on _ so we can skip the 0 and 1 vertices of the arrays
      {

      
            
            ButtonSelectFunction = ButtonSelectFunction 
            +
            `\n \t`
            +
            `if (SelectedPage == ${i-2})` //SelectedPage should start on 1, 0 is for the Status page option
            +
            `\n \t`
            +
            `{`
            +
            `\n \t \t`
            +
            `${PageNamesAdjustables[i]}`
            +
            `();    // Keep updating the screen`
            +
            `\n \t \t`
            +
            
            `if (digitalRead(InputRight) == LOW && ${AdjustablesTargetTempVariables[i]} < ${AdjustablesValueLimit[i][1]})`//check if the variable is less than or equal to its upper limit
            +
            `\n \t \t`
            +
            `{`
            +
            `\n \t \t \t`
            +
            `${AdjustablesTargetTempVariables[i]} = ${AdjustablesTargetTempVariables[i]} + ${AdjustablesTargetStepSize[i]};` //increase the page's temporary variable by step size
            +
            `\n \t \t`
            +
            `} //end if (digitalRead(InputRight) == LOW && Variable < Upper limit)`
            +
            `\n \t \t`
            +
            `if (digitalRead(InputLeft) == LOW && ${AdjustablesTargetTempVariables[i]} > ${AdjustablesValueLimit[i][0]})`//check if the variable is greater than its lower limit
            +
            `\n \t \t`
            +
            `{`
            +
            `\n \t \t \t`
            +
            `${AdjustablesTargetTempVariables[i]} = ${AdjustablesTargetTempVariables[i]} - ${AdjustablesTargetStepSize[i]};`// decrease the page's temporary variable by step size
            +
            `\n \t \t`
            +
            `} // end of if (digitalRead(InputLeft) == LOW && variable > lower limit)`
            +
            `\n \t`
            +
            `}// end of if (SelectedPage == ITERATION)`
            ;

            
      }//end for
      ButtonSelectFunction = ButtonSelectFunction + `\n} //end of void Select()`;
    
       
       
/*Void Encoder Select*/var EncoderSelectFunction =
      `\n`
      +
      `//*************** Encoder Select Function: *************** this section of the code is generated by index.html using SelectFunctions.js ***************`
      +
      `\n \n \t`
      +
      `void Select(int SelectedPage)`
      +
      `\n \t`
      +
      `{`
      +
      `\n \t \t`


+


  `\n \t`
  +
  `long newPosition2 = myEncoder.read();`
  +
  `\n \t`

  +
  `int delta2 = newPosition2 - oldPosition2;  // Calculate change in encoder value`
  +
  `\n \t`
  +
  `oldPosition2 = newPosition2;              // Update old position for next comparison`
 



+
  
  `\n \t`
  +
  `if (abs(delta2) > scrollThreshold) {  // Check if change exceeds threshold`
      +
    `\n \t`
    +
    `if (delta2 > 0) {  // CounterClockwise rotation`
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
    `else if (delta2 < 0) {  // Clockwise rotation`
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
     ` EncoderDirection = 0; //Idle`
     +
    `\n \t`
+
`}`
+
  `\n \t`
+
`}`
;

      for (let i = 2; i <= NumberOfOptions -1; i++) 
      {
            
            EncoderSelectFunction = EncoderSelectFunction 
            +
            `\n \t`
            +
            `if (SelectedPage == ${i})` //start on 1 so we can skip the 0 vertex of the arrays
            +
            `\n \t`
            +
            `{`
            +
            `\n \t \t`
            +
            `EncoderDirection = 0;`
            +
            `\n \t \t`
            +
            `${PageNamesAdjustables[i]}`
            +
            `();    // Keep updating the screen`
            +
            `\n \t \t`
            +
            `if (EncoderDirection == ${i} && ${AdjustablesTargetTempVariables[i]} < ${AdjustablesValueLimit[i][1]})`//check if the variable is less than or equal to its upper limit`
            +
            `\n \t \t`
            +
            `{`
            +
            `\n \t \t \t`
            +
            `${AdjustablesTargetTempVariables[i]} = ${AdjustablesTargetTempVariables[i]} + ${AdjustablesTargetStepSize[i]};` //increase the page's temporary variable by step size
            +
            `\n \t \t`
            +
            `} //end if (digitalRead(InputRight) == LOW && Variable < Upper limit)`
            +
            `\n \t \t`
            +
            `if (EncoderDirection == ${i} && ${AdjustablesTargetTempVariables[i]} > ${AdjustablesValueLimit[i][1]})`//check if the variable is less than or equal to its upper limit`
            +
            `\n \t \t`
            +
            `{`
            +
            `\n \t \t \t`
            +
            `${AdjustablesTargetTempVariables[i]} = ${AdjustablesTargetTempVariables[i]} - ${AdjustablesTargetStepSize[i]};`// decrease the page's temporary variable by step size
            +
            `\n \t \t`
            +
            `} // end of if (digitalRead(InputLeft) == LOW && variable > lower limit)`
            +
            `\n \t`
            +
            `}// end of if (SelectedPage == ITERATION)`
            ;
      }//end for

      EncoderSelectFunction = EncoderSelectFunction + `\n \t` + '}';