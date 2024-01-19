/*Void Read User Input*/const ReadUserInputMemoryFunction =
                   `void readUserInput()`
                   +
                   `\n`
                   +
                   `{`
                   +
                   `\n \t`
                   +
                   `// Read user input from EEPROM and load it into the userInput buffer`
                   +
                   `\n \t`
                   +
                   `for (int i = 0; i < MAX_INPUT_LENGTH; i++)`
                   +
                   `{`
                   +
                   `\n \t \t`
                   +
                   `char c = EEPROM.read(EEPROM_ADDR + i);`
                   +
                   `\n \t \t`
                   +
                   `if (c ==`
                   +
                   String.raw`'\0'`
                   +
                   `)`
                   +
                   `\n \t \t`
                   +
                  `{`
                  +
                  `\n \t \t \t`
                  +
                  `break; // End of stored data`
                  +
                  `\n \t \t`
                  +
                  `} //End of if statement`
                  +
                  `\n \t \t`
                  +
                  `userInput[i] = c;`
                  +
                  `\n \t`
                  +
                  `}//end of for loop`
                  +
                  `\n`
                  +
                  `} //end of Read User Input`
                  +
                  `\n \n`
                  ;
/*Void Write User Input*/const WriteUserInputMemoryFunction =
                  `void writeUserInput()`
                  +
                  `\n`
                  +
                  `{`
                  +
                  `\n \t`
                  +
                  `// Write user input from the userInput buffer to EEPROM`
                  +
                  `\n \t`
                  +
                  `for (int i = 0; i < MAX_INPUT_LENGTH; i++)`
                  +
                  `\n \t`
                  +
                  `{`
                  +
                  `\n \t \t`
                  +
                  `if (userInput[i] == `
                  +
                  String.raw`'\0'`
                  +
                  `)`
                  +
                  `\n \t \t`
                  +
                  `{`
                  +
                  `\n \t \t \t`
                  +
                  `break; // End of input`
                  +
                  `\n \t \t`
                  +
                  `} //end of if statment`
                  +
                  `\n \t`
                  +
                  `EEPROM.write(EEPROM_ADDR + i, userInput[i]);`
                  +
                  `\n \t`
                  +
                  `} //end of for loop`
                  +
                  `\n \t`
                  +
                  `EEPROM.write(EEPROM_ADDR + MAX_INPUT_LENGTH, `
                  +
                  String.raw`'\0'`
                  +
                  `); // Null-terminate the string`
                  +
                  `\n`
                  +
                  `} //end of writeUserInput`
                  +
                  `\n`
                  +
                  `\n \n`
                  ;
