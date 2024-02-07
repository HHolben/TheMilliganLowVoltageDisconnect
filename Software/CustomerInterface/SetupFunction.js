/*Void Setup Buttons*/    const SetupFunctionButtons =
                  `//----------This Section of the arduino software is created by index.html using SetupFunction.js----------`
                  +
                  `\n \t`
                  +
                  `void setup()`
                  +
                  `\n`
                  +
                  `{`
                  +
                  `\n \t`
                  +
                  `lcd.init(); // initialize the lcd`
                  +
                  `\n \t`
                  +
                  `lcd.backlight();`
                  +
                  `\n`
                  +
 /*Button Initialization*/`//Button Initialization`
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
                  `pinMode(RelayOutput, OUTPUT);`
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
                  `\n`
                  +
                  `} //End of void setup`
                  +
                  `\n \n`
                  ;
                  

/*Void Setup*/    const SetupFunctionEncoder =
                  `//----------This Section of the arduino software is created by index.html using SetupFunction.js----------`
                  +
                  `\n \t`
                  +
                  `void setup()`
                  +
                  `\n`
                  +
                  `{`
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
                  `pinMode(OverrideDelayButton, INPUT_PULLUP);`
                  +
                  `\n \t`
                  +
                  `pinMode(OverrideLight, OUTPUT);`
                  +
                  `\n \t`
                  +
                  `pinMode(RelayOutput, OUTPUT);`
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
                  `\n`
                  +
                  `} //End of void setup`
                  +
                  `\n \n`
                  ;
