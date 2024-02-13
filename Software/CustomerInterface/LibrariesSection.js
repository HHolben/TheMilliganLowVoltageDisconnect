/*Libraries*/const LibrariesSectionEncoder =
      `\n`
      +
      `//***************Libraries Section Encoder Version *************** This Section of the arduino software is created by index.html using LibrariesSection.js ***************`
      +
      `\n \n \t`
      +
      `//Specify Libraries for a device with an encoder`
      +
      `\n \t`
      +
      `#include <EEPROM.h> //This library is necesary for memory management`
      +
      `\n \t`
      +
      `#include <LiquidCrystal_I2C.h> //This library is necesary for LCD display management`
      +
      `\n \t`
      +
      `#include <Encoder.h> //This library is necesary for using rotary encoders as inputs`
      +
      `\n \t`
      +
      `LiquidCrystal_I2C lcd(0x27,20,4);  // set the LCD address to 0x27 for a 20 chars and 4 line display`
      +
      `\n \t`
      +
      `const int EEPROM_ADDR = 0; // EEPROM address to store the user input`
      +
      `\n \t`
      +
      `const int MAX_INPUT_LENGTH = 32; // Maximum length of user input`
      +
      `\n \t`
      +
      `char userInput[MAX_INPUT_LENGTH] = {0}; // Buffer to store user input`
      +
      `\n`
      ;
       
/*Libraries for device with button array*/const LibrariesSectionButtonArray =
      `\n`
      +
      `//***************Libraries Section Buttons Version *************** This section of the code is generated by index.html using LibrariesSection.js.js ***************`
      +
      `\n \n \t`
      +
      `#include <EEPROM.h> //This library is necesary for memory management`
      +
      `\n \t`
      +
      `#include <LiquidCrystal_I2C.h> //This library is necesary for LCD display management`
      +
      `\n \t`
      +
      `\n \t`
      +
      `LiquidCrystal_I2C lcd(0x27,20,4);  // set the LCD address to 0x27 for a 20 chars and 4 line display`
      +
      `\n \t`
      +
      `const int EEPROM_ADDR = 0; // EEPROM address to store the user input`
      +
      `\n \t`
      +
      `const int MAX_INPUT_LENGTH = 32; // Maximum length of user input`
      +
      `\n \t`
      +
      `char userInput[MAX_INPUT_LENGTH] = {0}; // Buffer to store user input`
      +
      `\n`
      ;
            
