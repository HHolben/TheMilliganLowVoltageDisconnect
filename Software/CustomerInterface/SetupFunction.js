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
                    //Button Initialization
                  +
                  `\n \t`
                  +
                  `pinMode(InputUp, INPUT_PULLUP);`
                  +
                  `\n \t`
                  +
                  `pinMode(InputDown, INPUT_PULLUP);`
                  +
                  `\n \t`
                  +
                  `pinMode(InputLeft, INPUT_PULLUP);`
                  +
                  `\n \t`
                  +
                  `pinMode(InputRight, INPUT_PULLUP);`
                  +
                  `\n \t`
                  +
                  `pinMode(InputSelect, INPUT_PULLUP);`
                  +
                  `\n \t`
                  +
                  `pinMode(OverrideDelayButton, INPUT_PULLUP);`
                  +
                  `\n \t`
                  +
                  `pinMode(OverrideLight, OUTPUT);`
                  +
                  `\n \t`
                  +
                  `selectPressed = true;`  // Initialize the select button latch
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
