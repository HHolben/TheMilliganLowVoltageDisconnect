      
      
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
      `if(digitalRead(InputDown) == LOW && scrollPosition <${NumberOfOptions -3})     //Also The issue with the button array is that we had an else if here, so if the Input Up wasn't being pressed, then the else if was executed regardless.  Need an else or replace with if `
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
      `\n \t`
      +
        `long newPosition = myEncoder.read();`
        +
        `\n \t`
        +
        `int delta = newPosition - oldPosition;  // Calculate change in encoder value`
        +
        `\n \t`
        +
        `oldPosition = newPosition;              // Update old position for next comparison`
        +
        `\n \t`
        +
      
        `if (abs(delta) > scrollThreshold) {  // Check if change exceeds threshold`
            +
            `\n \t`
            +
          `if (delta < 0)`
          +
          `\n \t`
          +
          `{  // Clockwise rotation`
            +
            `\n \t`
            +
            `// Increase scrollPosition, but cap at 3`
            +
            `\n \t`
            +
            `scrollPosition = (scrollPosition + 1) % 4;`
            +
            `\n \t`
            +
          `} //end (delta < 0)`
          +
          `\n \t`
          + 
          `else if (delta > 0)`
          +
            `\n \t`
            +
            `{  // Counterclockwise rotation`
            +
            `\n \t`
            +
            `// Decrease scrollPosition, but wrap back to 3 if reaching 0`
            +
            `\n \t`
            +
            `scrollPosition = (scrollPosition - 1 + 4) % 4;`
            +
            `\n \t`
            +
          `}// end else if`
          +
          `\n \t`
          +
        `}// end if`
        +
        `\n \t`    
        +
        `}// void Scroll`   
        ;
  