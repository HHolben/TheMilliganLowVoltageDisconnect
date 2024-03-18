       
/*Low Voltage Check*/var LowVoltageCheck =     
     `\n`
     +
     `//*************** Void Loop Low Voltage Check Section *************** this section of the code is generated by index.html using VoltageCheckRoutines.js ***************`
     +
     `\n \n \t \t`
     +
     `//Low Voltage Disconnection`
     +
     `\n \t \t`
     +
     `switch (currentMode)`
     +
     `\n \t \t`
     +
     `{`
     +
     `\n \t \t \t`
     +
     `case LVD:`
     +
     `\n \t \t \t`
     +
     `LVDMode();`
     +
     `\n \t \t \t`
     +
     `break;`
     +
     `\n \t \t \t`
     +
     `case OVERRIDE:`
     +
     `\n \t \t \t`
     +
     `Override();`
     +
     `\n \t \t \t`
     +
     `break;`
     +
     `\n \t \t`
     +
     `} //end of case LVD`
     +
     `\n \t \t`
     +
      `switch (currentPage)`
      +
      `{`
      +
      `\n \t \t`
     ;


     for(i=0; i<Adjustables.length; i++)
     {
        LowVoltageCheck = LowVoltageCheck
        +
        `\n \t \t`
        +
        `case `
        +
        `${EnumAdjustables[i]}`
        +
        `: `
        +
        `\n \t \t \t`
        +
        `${PageNamesAdjustables[i]}`      
        ;

        if(i<=1)
        {
          LowVoltageCheck = LowVoltageCheck 
          +
          ';' 
          +
          `\n \t \t`
          +
          `Scroll();`
          +
          `\n \t \t`
          ;
        }
        else
        {
          LowVoltageCheck = LowVoltageCheck
          +
          `();`
          +
          `\n \t \t`
          +
          `Select(scrollPosition);`
          +
          `\n \t \t`
          ;
        }
        LowVoltageCheck = LowVoltageCheck
        +
        `break;`
        ;
     }//end for

     LowVoltageCheck = LowVoltageCheck
     +
          `\n \t \t`
          +
     `}`
     ;

     /*Low Voltage Check*/const ReconnectVoltageCheck =
     `\n`
     +
     `//*************** Void Loop Reconnect Voltage Check Section *************** this section of the code is generated by index.html using VoltageCheckRoutines.js ***************`
     +
     `\n \n \t`
     +
     `//Reconnection: If the battery voltage has been recharged over the set reconnect voltage, turn the load back on  (NEED A DELAY TO MAKE SURE IT SHOULD BE ON)`
     +
     `\n \t`
       +
     `if (MeasureVoltage()>TurnBackOnVoltage && OutputState == 0)`
     +
     `\n \t`
       +
     `{`
     +
     `\n \t \t`
     +
     `if (ReconnectTimerHasStarted == false)`
     +
     `\n \t \t`
     +
     `{`
     +
     `\n \t \t \t \t`
     +
     `StartTime = TimeSinceBoot();`
     +
     `\n \t \t \t \t`
     +
     `EndTime = ReconnectTimerEnd(); //e.g. 22seconds runtime + 30seconds = static 55seconds`
     +
     `\n \t \t \t \t`
     +
     `ReconnectTimerHasStarted=true;`
     +
     `\n \t \t \t`
     +
     `} //end if (ReconnectTimerHasStarted == false)` 
     +
     `\n \t \t \t`
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
     `unsigned long remainingTime = EndTime - currentTime; //55seconds - 25seconds = 20seconds remain`	
     +
     `\n \t \t \t \t \t`
     +
     `// Other tasks can run here while the timer is active`
     +
     `\n \t \t \t \t`
     +
     `} // end of if(currentTime < EndTime)`		
      +
      `\n \t \t`
      +
      `else` 
      +
      `\n \t \t`
      +
      `{`	
      +
      `\n \t \t`
      +
      `TurnOnOutput();`		
      +
      `\n \t \t`
      +
      `} // end of else statement`	
      +
      `\n \t \t`
      +
      `} // end of if MeasureVoltage()<ShutOffVoltage`		
      +
      `\n \t \t`
      +
      `else` 
      +
      `\n \t \t`
      +
      `{`		
      +
      `\n \t \t \t`
      +
      `ReconnectTimerHasStarted = false; //This resets the timer if the voltage goes back to stable state.`	
      +
      `\n \t \t`
      +
      `} //end else`
      ;
