                                    
/*Low Voltage Check*/const LowVoltageCheck =                  
                  `//----------This Section of the arduino software is created by index.html using VoltageCheckRoutine.js----------`
                  +
                  `\n \t`
                  +
                  `static unsigned long StartTime = 0;`
                  +
                  `\n \t`
                  +
                  `static unsigned long EndTime = 0;`
                  +
                  `\n \t`
                  +
                  `static bool TimerHasStarted = false;`
                  +
                  `\n \t`
                  +
                  `unsigned long OverrideCurrentTime = 0; `
                  +
                  `\n \t`
                  +
                  `unsigned long OverrideEndTime = 0;`
                  +
                  `\n \t`
                  +
                  `static bool OverrideTimerHasStarted = false;`
                  +
                  `\n \t`
                  +
                  `if (OverrideDelayLatch)   //If Override Button is pressed`
                  +
                  `\n \t`
                  +
                  `Serial.print("Override");`
                  +
                  `\n \t`
                  +
                  `Serial.print("\n");`
                  +
                  `\n \t`
                  +
                  `digitalWrite(OverrideLight, HIGH);`
                  +
                  `\n \t`
                  +
                  `if (OutputState = 0 && OverrideWhileOffAllowed){             //If system is off (AND has been off) and Override allowed`
                    +
                    `\n \t`
                    +
                    `TurnOnOutput();`
                    +
                    `\n \t`
                    +
                    `}`
                   +
                   `\n \t`
                   +
                   `// end of if`
                
                  +
                  `\n \t`
                  +
                  `if (OutputState = 0 && (OverrideWhileOffAllowed == false)){    //If system is off (AND has been off) and Override NOT allowed`
                   +
                   `\n \t`
                   +
                   `   //Don't do anything or flash a message saying "Not Permitted"`
                  +
                  `\n \t`
                  +
                  `}`
              
                  +
                  `\n \t`
                  +
                  `if(OutputState = 1){`
                      +
                      `\n \t`
                      +
                      `if (MeasureVoltage() < ShutOffVoltage)   //Probably need to combine OutputState = 1 && Voltage < Cutoff, then have an else if OutputState = 1 && Voltage > Cutoff(Do Nothing)  ` 
                    +
                    `\n \t`
                    +
                    `{`
                      +
                      `\n \t`
                      +
                      `if (OverrideTimerHasStarted ==false){`
                      
                      +
                      `\n \t`
                      +
                      `StartTime = TimeSinceBoot();`
                      +
                      `\n \t`
                      +
                      `EndTime = OverrideTimerEnd();   //e.g. 22seconds runtime + 30seconds = static 55seconds`
                      +
                      `\n \t`
                      +
                      `OverrideTimerHasStarted = true;`
                      
                      +
                      `\n \t`
                      +
                      `}`
                      +
                      `\n \t`
                      +
                      `TurnOnOutput();   //Keep the output on, might not be what we want here.`
                      +
                      `\n \t`
                      +
                      `unsigned long currentTime = TimeSinceBoot();`
                      +
                      `\n \t`
                      +
                      `if(currentTime < EndTime)`
                      +
                      `\n \t`                      
                      +
                      `{`
                      +
                      `\n \t`
                      +
                      `unsigned long remainingTime = EndTime - currentTime;  //55seconds - 25seconds = 20seconds remain`
                      +
                      `\n \t`
                      +
                      `  Serial.print(remainingTime);`
                      +
                      `\n \t`
                      +
                      `  Serial.print("\n");`
              +
              `\n \t`
                       +
                       ` // Other tasks can run here while the timer is active`
                      +
                      `\n \t`
                      +
                      `}   // end of if(currentTime < EndTime)`
                      +
                      `\n \t`
                      +
                      `else`
                      +
                      `\n \t`
                      +
                      `{`
                      
                        +
                        `\n \t`
                        +
                        `TurnOffOutput();`
                        +
                        `\n \t`
                        +
                        `OverrideDelayLatch = false;`
                        +
                        `\n \t`
                        +
                        `OverrideTimerHasStarted = false;`
                        
                      +
                      `\n \t`
                      +
                      `} // end of else statement`
                    +
                    `\n \t`
                    +
                    `} // end of if MeasureVoltage()<ShutOffVoltage`
                    +
                    `\n \t`
                    +
                    `else`
                    +
                    `\n \t`
                    +
                    `{`
                    +
                    `\n \t`
                    +
                    `  OverrideTimerHasStarted = false;      //This resets the timer if the voltage goes back to stable state.`
            
                    +
                    `\n \t`
                    +
                    `}`
                  
                  +
                  `\n \t`
                  +
                  `}`
              
              
              
               +
               `\n \t`
               +
               ` }`
               +
               `\n \t`
               +
               ` else      //Normal Operation when Override is NOT Active`
                  +
                  `\n \t`
                  +
                  `{`
              
                   +
                   `\n \t`
                   +
                   ` digitalWrite(OverrideLight,LOW);   //OverrideLightOff`
                   +
                   `\n \t`
                   +
                   ` if (MeasureVoltage() < ShutOffVoltage)  `    
                   +
                   `\n \t`
                   +
                   ` {`
                      +
                      `\n \t`
                      +
                      `if (TimerHasStarted ==false){`
                      
                      +
                      `\n \t`
                      +
                      `StartTime = TimeSinceBoot();`
                      +
                      `\n \t`
                      +
                      `EndTime = DisconnectBufferTimerEnd();   //e.g. 22seconds runtime + 30seconds = static 55seconds`
                      +
                      `\n \t`
                      +
                      `TimerHasStarted = true;`
                      
                      +
                      `\n \t`
                      +
                      `}`
               
                      +
                      `\n \t`
                      +
                      `unsigned long currentTime = TimeSinceBoot();`
                      
                      +
                      `\n \t`
                      +
                      `if (currentTime < EndTime)`
                      +
                      `\n \t`
                      +
                      `{`
                        +
                        `\n \t`
                        +
                        `unsigned long remainingTime = EndTime - currentTime;  //55seconds - 25seconds = 20seconds remain`
              
                        +
                        `\n \t`
                        +
                        `// Other tasks can run here while the timer is active`
                      +
                      `\n \t`
                      +
                      `}   // end of if(currentTime < EndTime)`
                      +
                      `\n \t`
                      +
                      `else`
                      +
                      `\n \t`
                      +
                      `{`
                      
                        +
                        `\n \t`
                        +
                        `TurnOffOutput();`
                        
                        
                      +
                      `\n \t`
                      +
                      `} // end of else statement`
                    +
                    `\n \t`
                    +
                    `} // end of if MeasureVoltage()<ShutOffVoltage`
                    +
                    `\n \t`
                    +
                    `else`
                    +
                    `\n \t`
                    +
                    `{`
                      +
                      `\n \t`
                      +
                      `TimerHasStarted = false;      //This resets the timer if the voltage goes back to stable state.`
                    +
                    `\n \t`
                    +
                    `}`
                  
                  +
                  `\n \t`
                  +
                  `}`
                          ;

                  /*Low Voltage Check*/const ReconnectVoltageCheck =
  
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
                   `\n \t`
                    +
                   ` TurnOnOutput();`
                
                  +
                  `\n \t`
                    +
                `} //end of if statement`
                
                
                  +
                  `\n \t`
                    +
                  `if (digitalRead(OverrideDelayButton) == LOW)`
                    +
                    `\n \t`
                    +
                    `{`
                
                    +
                    `\n \t`
                    +
                    `OverrideDelayLatch = !OverrideDelayLatch;`
                
                  +
                  `\n \t`
                    +
                `} // end of if statement`
                +
                `\n \t`
                    +
                    `LastOverrideButtonState = OverrideSelectState;`
                    +
                  `\n \t \t`
                  ;                
                             
