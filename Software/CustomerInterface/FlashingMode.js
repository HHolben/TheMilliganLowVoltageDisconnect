`//*************** Flashing Mode Section *************** this section of the code is generated by index.html using FlashingMode.js ***************`
     +
     `\n \t \t`
     +
     `//We need to determine whether or not the user is holding down the 'select' button on boot. If they are, then we need to set the EEPROM according to the user's set values` 		
     +
     `\n \t \t`
     +
     `if(digitalRead(InputSelect) == LOW)`		
     +
     `\n \t \t`
     +
     `{`
     +
     `\n \t \t \t`
     +
     `lcd.setCursor(0,0);`
     +
     `\n \t \t`
     +
     `lcd.print("FLASHING MODE");`
     +
     `\n \t \t`
     +
     `lcd.setCursor(0,2);`
     +
     `\n \t \t`
     +
     `lcd.print("MODO RESTAURACION");`
     +
     `\n \t \t`
     +
     `EEPROM.put(`
     
     2, NominalVoltage);`




     +
     `\n \t \t`
     +
     `} //end while //Now we are out of flashing mode and we can read the values we have from EEPROM and store them as variables`
     +
     `\n \t \t`
     +
EEPRO`M.get(2, NominalVoltage);`
+
`\n \t \t`
+
EEPRO`M.get(2, TempNominalVoltage);`
+
`\n \t \t`
+



  `Serial.print(NominalVoltage);

     +
     `\n \t \t \t`
     +
     `\n \t \t`
     +
     `\n \t \t \t`
     +
     `\n \t \t`    
     +
     `\n \t \t \t`
     +
     `\n \t \t`
     +
     `\n \t \t \t`
     +
     `\n \t \t`
     +
     `\n \t \t \t`
     +
     `} //end if`


