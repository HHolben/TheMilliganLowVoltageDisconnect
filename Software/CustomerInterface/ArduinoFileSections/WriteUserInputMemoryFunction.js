document.addEventListener('DOMContentLoaded', function() {
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
/*TimeSinceBoot*/ const TimeSinceBootFunction =
                  `//Find the time since the Low Voltage Disconnect was turned on`
                  +
                  `\n \t`
                  +
                  `unsigned long TimeSinceBoot()`
                  +
                  `\n \t`
                  +
                  `{`
                  +
                  `\n \t`
                  +
                  `unsigned long SystemTime = millis()+TimerOffset; // TimerOffset allows manipulating timers for testing purposes (you can start the timer at a much later time than the actual time since starting)`
                  +
                  `\n \t`
                  +
                  `Serial.print("System Time: ");`
                  +
                  `\n \t`
                  +
                  `Serial.print(SystemTime/1000);`
                  +
                  `\n \t`
                  +
                  `Serial.print(" seconds");`
                  +
                  `\n \t`
                  +
                  `Serial.print(`
                  +
                  String.raw`'\n'`
                  +
                  `);`
                  +
                  `\n \t`
                  +
                  `return(SystemTime);`
                  +
                  `\n \t`
                  +
                  `} //end of TimeSinceBoot() function`
                  ;
});