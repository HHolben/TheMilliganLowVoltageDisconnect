var LatchesSection =
     `//*************** Latches Section *************** this section of the code is generated by index.html using VoltageCheckRoutines.js ***************`
     +
     `\n \t \t`
     +
     `//All Latches should follow a similar structure. If some buttons are sensitive to bounce, add a latch, change temp variable names.` 		
     +
     `\n \t \t`
     +
     `int SELECT_State = digitalRead(InputSelect); //Normally High (INPUT_PULLUP)`			
     +
     `\n \t \t`
     +
     `int state = HIGH;`				
     +
     `\n \t \t`
     +
     `if (SELECT_State != state) { //IF STATE has Changed`		
     +
     `\n \t \t`
     +
     `if (SELECT_State == LOW){ //Only triggered on inital LOW STATE`		
     +
     `\n \t \t`
     +
     `SwitchPage();`		
     +
     `\n \t \t`
     +
     `//Just Do It`				
     +
     `\n \t`
     +
     `}`
     +	
     `\n \t \t`
     +
     `delay(200); //Change based on sensivity`		
     +	
     `\n \t \t`
     +
     `}`
     +	
     `\n \t \t`
     +
     `state = SELECT_State;`		
     +		
     `\n \t \t`
     +
     `int OverrideSelectState = digitalRead(OverrideDelayButton); //Normally High (INPUT_PULLUP)`		
     +		
     `\n \t \t`
     +
     `int stateTwo = HIGH;`		
     +	
     `\n \t \t`
     +
     `if (OverrideSelectState != stateTwo) { //IF STATE has Changed`		
     +
     `\n \t \t`
     +
     `if (OverrideSelectState == LOW){ //Only triggered on inital LOW STATE	`	
     +
     `\n \t \t`
     +
     `if (currentMode == LVD){`		
     +
     `\n \t \t`
     +
     `currentMode = OVERRIDE;`		
     +
     `\n \t \t`
     +
     `OverrideDelayLatch = true;`		
     +
     `\n \t \t`
     +
     `}`
     +
     `\n \t \t`
     +
     `else{`
     +	
     `\n \t \t`
     +
     `currentMode = LVD;`
     +		
     `\n \t \t`
     +
     `OverrideDelayLatch = false;`
     +		
     `\n \t \t`
     +
     `}`		
     +
     `\n \t \t`
     +
     `}`
     +		
     `\n \t \t`
     +
     `delay(200); //Change based on sensivity`
     +
     `\n \t \t`
     +
     `}`
     +
     `\n \t \t`
     +
     `stateTwo = OverrideSelectState;`
     ;

var VoidOverride =
     `void Override() //If Override Button is pressed`
	+
     `\n \t \t \t`
     +
     `{`
     +
     `\n \t \t \t`
     +
`digitalWrite(OverrideLight, HIGH);`
     +
     `\n \t \t \t`
     +
     `if (OutputState == 0 && OverrideWhileOffAllowed)`
     +
     `\n \t \t \t`
     +
     `{             //If system is off (AND has been off) and Override allowed`
     +
     `\n \t \t \t \t`
     +
     `TurnOnOutput();`
     +
     `\n \t \t \t`
     +
     `} // end if (OutputState == 0 && OverrideWhileOffAllowed)`
     +
     `\n \t \t \t`
     +
     `// end of if`
     +
     `\n \t \t \t`
     +
     `if (OutputState == 0 && (OverrideWhileOffAllowed == false))`
     +
     `\n \t \t \t`
     +
     `{    //If system is off (AND has been off) and Override NOT allowed`
     +
     `\n \t \t \t \t`
     +
     `   //Don't do anything or flash a message saying "Not Permitted"`
     +
     `\n \t \t \t`
     +
     `} // end if (OutputState == 0 && (OverrideWhileOffAllowed == false))`
     +
     `\n \t \t \t`
     +
     `if(OutputState == 1)`
     +
     `\n \t \t \t`
     +
     `{`
     +
     `\n \t \t \t \t`
     +
     `if (MeasureVoltage() < ShutOffVoltage)   //Probably need to combine OutputState = 1 && Voltage < Cutoff, then have an else if OutputState = 1 && Voltage > Cutoff(Do Nothing)  ` 
     +
     `\n \t \t \t \t`
     +
     `{`
     +
     `\n \t \t \t \t \t`
     +
     `if (OverrideTimerHasStarted ==false)`
     +
     `\n \t \t \t \t \t`
     +
     `{`
     +
     `\n \t \t \t \t \t \t`
     +
     `StartTime = TimeSinceBoot();`
     +
     `\n \t \t \t \t \t \t`
     +
     `EndTime = OverrideTimerEnd();   //e.g. 22seconds runtime + 30seconds = static 55seconds`
     +
     `\n \t \t \t \t \t \t`
     +
     `OverrideTimerHasStarted == true;`
     +
     `\n \t \t \t \t \t`
     +
     `}`
     +
     `\n \t \t \t \t \t`
     +
     `//TurnOnOutput();   //Keep the output on, might not be what we want here.`
     +
     `\n \t \t \t \t \t`
     +
     `unsigned long currentTime = TimeSinceBoot();`
     +
     `\n \t \t \t \t \t`
     +
     `if(currentTime < EndTime)`
     +
     `\n \t \t \t \t \t`      
     +
     `{`
     +
     `\n \t \t \t \t \t \t`
     +
     `unsigned long remainingTime = EndTime - currentTime; //55seconds - 25seconds = 20seconds remain`
     +
     `\n \t \t \t \t \t \t`
     +
     ` // Other tasks can run here while the timer is active`
     +
     `\n \t \t \t \t \t`  
     +
     `}   // end of if(currentTime < EndTime)`
     +
     `\n \t \t \t \t \t`
     +
     `else`
     +
     `\n \t \t \t \t \t`
     +
     `{`
     +
     `\n \t \t \t \t \t \t`
     +
     `TurnOffOutput();`
     +
     `\n \t \t \t \t \t \t`
     +
     `currentMode = LVD; //Switch back to Normal LVD Operation`
     +
     `\n \t \t \t \t \t \t`
     +
     `OverrideDelayLatch = false; //update LCD screen`
     +
     `\n \t \t \t \t \t \t`
     +
     `OverrideTimerHasStarted = false;`
     +
     `\n \t \t \t \t \t`
     +
     `} // end of else statement`
     +
     `\n \t \t \t \t`
     +
     `} // end of if MeasureVoltage()<ShutOffVoltage`
     +
     `\n \t \t \t \t`
     +
     `else`
     +
     `\n \t \t \t \t`
     +
     `{`
     +
     `\n \t \t \t \t \t`
     +
     `OverrideTimerHasStarted = false;      //This resets the timer if the voltage goes back to stable state.`
     +
     `\n \t \t \t \t`
     +
     `} //end else`
     +
     `\n \t \t \t `
     +
     `} // end if(OutputState == 1)`
     +
     `\n \t \t`
     +
     `}//end of void Override`
     ;
     
     var VoidLVDMode =
     `\n \t`
     +
     `void LVDMode(){`
     +    
     `\n \t \t \t`
     +      
     `digitalWrite(OverrideLight,LOW);   //OverrideLightOff`
     +
     `\n \t \t \t`
     +   
     `if (MeasureVoltage() < ShutOffVoltage)  `    
     +
     `\n \t \t \t`
     +
     `{`
     +
     `\n \t \t \t \t`
     +
     `if (TimerHasStarted ==false)`
     +
     `\n \t \t \t \t`
     +
     `{`       
     +
     `\n \t \t \t \t \t`
     +
     `StartTime = TimeSinceBoot();`
     +
     `\n \t \t \t \t \t`
     +
     `EndTime = DisconnectBufferTimerEnd();   //e.g. 22seconds runtime + 30seconds = static 55seconds`
     +
     `\n \t \t \t \t \t`
     +
     `TimerHasStarted = true;`
     +
     `\n \t \t \t \t`
     +
     `} //end if (TimerHasStarted ==false)`
     +
     `\n \t \t \t \t`
     +
     `unsigned long currentTime = TimeSinceBoot();`
     +
     `\n \t \t \t \t`
     +
     `if (currentTime < EndTime)`
     +
     `\n \t \t \t \t`
     +
     `{`
     +
     `\n \t \t \t \t \t`
     +
     `unsigned long remainingTime = EndTime - currentTime;  //55seconds - 25seconds = 20seconds remain`
     +
     `\n \t \t \t \t \t`
     +
     `// Other tasks can run here while the timer is active`
     +
     `\n \t \t \t \t`
     +
     `}   // end of if(currentTime < EndTime)`
     +
     `\n \t \t \t \t`
     +
     `else`
     +
     `\n \t \t \t \t`
     +
     `{`
     +
     `\n \t \t \t \t \t`
     +
     `TurnOffOutput();`
     +
     `\n \t \t \t \t`
     +
     `} // end of else statement`
     +
     `\n \t \t \t \t`
     +
     `} // end of if MeasureVoltage()<ShutOffVoltage`
     +
     `\n \t \t \t`
     +
     `else`
     +
     `\n \t \t \t`
     +
     `{`
     +
     `\n \t \t \t \t`
     +
     `TimerHasStarted = false;      //This resets the timer if the voltage goes back to stable state.`
     +
     `\n \t \t \t `
     +
     `} // end else`
     +
     `\n \t \t`
     +
     `} // end else`
     ;

     var SwitchPage =
     `\n \t`
     +
     `// Handle cases based on variable definitions and requirements`
     +
     `\n \t`
     +
     `void SwitchPage()`
     +
     `\n \t`
     +
     `{`
     +
     `\n \t \t`
     +
	`if (currentPage == Page::MENU_PAGE) {`
     +
     `\n \t`
     +
	`switch (scrollPosition) {`
     ;
     
     for (var i = 2; i < Adjustables.length; i++) 
     {
          SwitchPage =SwitchPage 
          +
          `\n \t`
          +
	     `case ` + `${i-2}` +`:`
          +
          `\n \t`
          +
	     `currentPage = ` + `${EnumAdjustables[i]}`+';'
          +
          `\n \t`
          +
	     `break;`
          +
          `\n \t`
          ;
     }//end for

     SwitchPage = SwitchPage 
     +
     `\n \t`
     +
     `default:`
     +
     `\n \t`
     +
     `currentPage = currentPage; //Run if Invalid Page`
     +
     `\n \t`
     +
     `break;`
     +
     `\n \t`
     +
     `}`
     +
     `\n \t`
     +
     `//Add more cases as necessary, above the default case`
     +
     `\n \t`
     +
     `}`
     +
     `\n \t`
     ;
     
     for (var i = 2; i < Adjustables.length-1; i++) 
     {
          SwitchPage =SwitchPage 
          +
          `else if(`
          +
          `\n \t`
          +
         `currentPage == Page:: ${EnumAdjustables[i]})`
          +
          `\n \t`
          +
          `{`
          +
          `\n \t \t`
          +
          `if(${AdjustablesTargetVariables[i]} != ${AdjustablesTargetTempVariables[i]})`
          +
          `\n \t \t`
          +
          `{`
          +
          `\n \t \t \t`
          +
          `${AdjustablesTargetVariables[i]} = ${AdjustablesTargetTempVariables[i]};`
          +
          `\n \t \t \t`
          +
          `EEPROM.put(${TargetMemoryLocations[i]}, ${AdjustablesTargetVariables[i]});`
          + 
          `\n \t \t`
          +
          `}`
          + 
          `\n \t \t`
          +
          `currentPage = STATUS_PAGE;`
          +
          `\n \t`
          +
          `}//end if currentPage == ${EnumAdjustables[i]})`
          +
          `\n \t`
          ;
     }//end for
     SwitchPage = SwitchPage 
          +
          `else if (currentPage == Page::STATUS_PAGE)`
          +
          `\n \t`
          +
          `{`
               +
               `\n \t \t`
               +
               `currentPage = MENU_PAGE; //Switch to MenuPage from the Status Page`
               +
          `\n \t`
          +
          `}//end else if`
          +
          `}`
          +
          `\n \t`
          +
          `} //end switch Page`
          ;

