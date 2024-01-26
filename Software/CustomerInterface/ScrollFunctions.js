      
      
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
                      `} //if (digitalRead(InputUp) == LOW && scrollPosition >0)`
                      +
                      `\n \t`
                      +
                      `if (digitalRead(InputDown) == LOW && scrollPosition <3)`
                      +
                      `\n \t`
                      +
                      `{`
                      +
                      `\n \t \t`
                      +
                      `scrollPosition++;`
                      +
                      `\n \t`
                      +
                      `}`
                      +
                      `\n \t`
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
