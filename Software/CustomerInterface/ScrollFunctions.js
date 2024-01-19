      
      
    /*Void Scroll*/   const ButtonScrollFunction =
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
                      `if ( digitalRead(InputUp) == LOW && scrollPositon >0)`
                      +
                      `\n \t`
                      +
                      `{`
                      +
                      `\n \t \t`
                      +
                      `scrollPosition--;`
                      +
                      `\n \t`
                      +
                      `}`
                      +
                      `\n \t`
                      +
                      `if ( digitalRead(InputDown) == LOW && scrollPositon <3)`
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
                      `int UP_State = digitalRead(InputUp);`
                       +
                       `\n \t \t`
                       +
                       `int Down_State = digitalRead(InputDown);`
                       +
                       `\n \t \t`
                       +
                       `if (UP_State == HIGH && scrollPosition>0)`
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
                       `} //End of ButtonScroll()`
                       +
                       `\n \t \t`
                       +
                       `if (Down_State == HIGH && scrollPosition<3)`
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
                       `} // end of if(Down_State == HIGH && scrollPosition<3) `
                       +
                       `\n \t \t`
                       +
                       `//Might need to add to where it doesn't change multiple lines on holding buttons.`
                       +
                       `\n \t \t`
                       +
                       `MenuPageScreens(scrollPosition);`
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
