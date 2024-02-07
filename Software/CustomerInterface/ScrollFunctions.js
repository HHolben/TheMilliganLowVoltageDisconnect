      
      
    /*Void Scroll*/   const ButtonScrollFunction =
                      `//----------This Section of the arduino software is created by index.html using ScrollFunctions.js----------`
                      +
                      `\n \t`
                      +
                      `\t`
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
                    `\n \t`
                    +
                    `{`
                      +
                      `\n \t`
                      +
                      `  scrollPosition--;`
                      +
                      `\n \t`
                      +
                      `}`
                      +
                      `\n \t`
                      +
                      `if(digitalRead(InputDown) == LOW && scrollPosition <3)     //Also The issue with the button array is that we had an else if here, so if the Input Up wasn't being pressed, then the else if was executed regardless.  Need an else or replace with if `
                      +
                      `\n \t`
                      +
                      `{`
                      +
                      `\n \t`
                      +
                      `  scrollPosition++;`
                      +
                      `\n \t`
                      +
                      `}`
                       +
                       `} // end void Scroll()`
                       + 
                       `\n \t`
                       ;
                                    
/*Void EncoderScroll*/ const EncoderScrollFunction =
                       `// Scroll function for a devicew with a rotary encoder control input:`
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
                       `}`
                       +
                       `\n \t`
                       + 
                       `} //end Scroll() function`
                       +
                       `\n \t`
                       ;        
