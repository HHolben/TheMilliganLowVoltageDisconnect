      
      
/*Void Scroll*/const ButtonScrollFunction =
      `\n`
      +
      `//*************** Button Scroll Function: *************** This Section of the arduino software is created by index.html using ScrollFunctions.js ***************`
      +
      `\n \n \t`
      +
      `// Scroll function for a control scheme that uses an array of 5 buttons: up, down, left, right, and select (center):`
       +
       `\n \t`
       +
       `void Scroll()`
       +
       `\n \t`
      +
      `{`
      +
      `\n \t \t`
      +
      `if (digitalRead(InputUp) == LOW && scrollPosition >0)`
      +
      `\n \t \t`
      +
      `{`
      +
      `\n \t \t \t`
      +
      `scrollPosition--;`
      +
      `\n \t \t`
      +
      `}`
      +
      `\n \t \t`
      +
      `if(digitalRead(InputDown) == LOW && scrollPosition <3)     //Also The issue with the button array is that we had an else if here, so if the Input Up wasn't being pressed, then the else if was executed regardless.  Need an else or replace with if `
      +
      `\n \t \t`
      +
      `{`
      +
      `\n \t \t \t`
      +
      `scrollPosition++;`
      +
      `\n \t \t`
      +
      `} //end if(digitalRead(InputDown) == LOW && scrollPosition <3)`
      +
      `\n \t`
      +
      `} // end void Scroll()`
      + 
      `\n`
      ;
       
/*Void EncoderScroll*/ const EncoderScrollFunction =
      `\n`
      +
      `//*************** Encoder Scroll Function: *************** This Section of the arduino software is created by index.html using ScrollFunctions.js ***************`
      +
      `\n \n \t`
      +
      `void Scroll()`
      +
      `\n \t`
      +
      `{`
      +
      `\n \t \t`
      + 
      `scrollPosition = 3-abs((myEncoder.read()/4)%4);`
      +
      '\n \t \t'
      +
      `if (scrollPosition > MaximumEncoderPosition)`
      +
      `\n \t \t`
      +
      `{`
      +
      `\n \t \t \t`
      +
      `scrollPosition = scrollPosition-MaximumEncoderPosition-1;`
      +
      `\n \t \t`
      +
      `} // end if (scrollPosition > MaximumEncoderPosition)`
      +
      `\n \t`
      + 
      `} //end Scroll() function`
      +
      `\n`
      ;