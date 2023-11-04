document.addEventListener('DOMContentLoaded', function() {
    /*Void Setup*/    const SetupFunction =
                  `void setup()`
                  +
                  `\n`
                  +
                  `{`
                  +
                  `\n \t`
                  +
                  `// Initialize serial communication`
                  +
                  `\n \t`
                  +
                  `lcd.init(); // initialize the lcd` 
                  +
                  `\n \t`
                  +
                  `lcd.backlight();`
                  +
                  `\n \t`
                  + 
                  `\n \t`
                  +
                  `//Button Initialization`
                  +
                  `\n \t`
                  +
                  `pinMode(InputUp, INPUT);`
                  + 
                  `\n \t`
                  +
                  `pinMode(InputDown, INPUT);`    
                  + 
                  `\n \t`
                  +
                  `pinMode(InputLeft, INPUT);`
                  + 
                  `\n \t`
                  +
                  `pinMode(InputRight, INPUT);` 
                  + 
                  `\n \t`
                  +
                  `pinMode(InputSelect, INPUT);`  
                  + 
                  `\n \t`
                  +
                  `selectPressed = false;`  // Initialize the select button latch
                  + 
                  `\n \t`
                  +
                  `Serial.begin(9600);`
                  +
                  `\n \t`
                  +
                  `readUserInput();`
                  +
                  `\n \t`
                  +
                  `TurnOnOutput(); //we want to start the microcontroller with the output on`
                  +
                  `\n`
                  +
                  `} //End of void setup`
                  +
                  `\n \n`
                  ;
});