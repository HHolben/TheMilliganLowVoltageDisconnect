var DetectFlashingMode =`//*************** Flashing Mode Section *************** this section of the code is generated by index.html using MemoryFunctions.js ***************`
     +
     `\n \t \t`
     +
     `//We need to determine whether or not the user is holding down the 'select' button on boot. If they are, then we need to set the EEPROM according to the user's set values` 		
     +
     `\n \t \t`

     
     ;

    if(ControlSelection == 1)//this condition is met if the user selected buttons as the input device
    {
      DetectFlashingMode = DetectFlashingMode
      +
      `while(digitalRead(InputSelect) == LOW)`	//this condition is met if the user is holding down Select
      +
      `\n \t \t`
      +
      `{`
      
    }//end if
    else if(ControlSelection == 2)//this condition is met if the user selected an encoder
    {
      DetectFlashingMode = DetectFlashingMode
      +
      `while(digitalRead(EncoderSW) == LOW)`	//this condition is met if the user is holding down Select
      +
      `\n \t \t`
      +
      `{`
    }//end else
      DetectFlashingMode = DetectFlashingMode
      +
      `\n \t \t \t`
      +
      `lcd.setCursor(0,0);`
      +
      `\n \t \t \t`
      +
      `lcd.print("FLASHING MODE");`
      +
      `\n \t \t \t`
      +
      `lcd.setCursor(0,2);`
      +
      `\n \t \t \t`
      +
      `lcd.print("MODO RESTAURACION");`     
      ;
   


    //Here we want to set EEPROM values to whatever was set in the customer web form
    for(i=2; i<Adjustables.length; i++)
    {
      DetectFlashingMode = DetectFlashingMode
      +
      `\n \t \t \t`
      +
      `EEPROM.put(${TargetMemoryLocations[i]}, ${AdjustablesTargetVariables[i]});`
      +
      `\n \t \t \t`
      ;



    }//end for

    
    DetectFlashingMode = DetectFlashingMode
    +
    `\n \t \t \t`
    +
    `} //end while `
    +
    `//Now we are out of flashing mode and we can read the values we have from EEPROM and store them as variables`
    ;
    

    for(i=2; i<Adjustables.length; i++)
    {
      DetectFlashingMode = DetectFlashingMode
      +
      `\n \t \t`
      +
      `EEPROM.get(${TargetMemoryLocations[i]}, ${AdjustablesTargetVariables[i]});`
      +
      `\n \t \t`
      +
      `EEPROM.get(${TargetMemoryLocations[i]}, ${AdjustablesTargetTempVariables[i]});`     
      +
      `\n \t \t`
      ;
    }//end for


