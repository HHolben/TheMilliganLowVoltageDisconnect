                                    
/*Low Voltage Check*/const LowVoltageCheck =                  
                  `//----------This Section of the arduino software is created by index.html using VoltageCheckRoutine.js----------`
                  +
                  `\n \t`
                  +
                  `//Low voltage disconnection: If the battery voltage is lower than the cut off voltage, turn off the load when the override period expires`
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
                  `if (OverrideDelayLatch == true)   //If Override Button is pressed`
                  +
                  `\n \t`
                  +
                  `{`
                    +
                    `\n \t`
                    +
                    `digitalWrite(12, HIGH);`
                    +
                    `\n \t`
                    +
                    `if (OutputState = 0 && OverrideWhileOffAllowed){       //If system is off (AND has been off) and Override allowed`
                      +
                      `\n \t`
                      +
                      `TurnOnOutput();`
                    +
                    `\n \t`
                    +
                    `} // end of if`
                
                    +
                    `\n \t`
                    +
                    `else if (OutputState = 0 && (OverrideWhileOffAllowed == false)){    //If system is off (AND has been off) and Override NOT allowed`
                        +
                        `\n \t`
                        +
                        `//Don't do anything or flash a message saying "Not Permitted"`
                    +
                    `\n \t`
                    +
                    `}`
                
                    +
                    `\n \t`
                    +
                    `else if(OutputState = 1){`
                    +
                    `\n \t`
                    +
                    `if (MeasureVoltage() < ShutOffVoltage)  `    
                    +
                    `\n \t`
                    +
                    `{`
                      +
                      `\n \t`
                      +
                      `if(TimerHasStarted == false)`
                      +
                  `\n \t`
                  +
                  `{`
                  +
                  `\n \t`
                  +
                      `StartTime = TimeSinceBoot();  //millis();`
                      +
                      `\n \t`
                      +
                      `EndTime = DisconnectBufferTimerEnd();     //We DONT want to interrupt the 30 second buffer time to make sure load is truly about to shutoff due to low voltage.`
                      +
                      `\n \t`
                      +
                `TimerHasStarted = true;`
                +
                  `\n \t`
                  +
                  `}// end if(TimerHasStarted == false)`
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
                        `// Other tasks can run here while the timer is active`
                      +
                      `\n \t`
                      +
                      `} // end of if(currentTime < EndTime)`
                
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
                        `if(OverrideTimerHasStarted == false)`
                        +
                  `\n \t`
                  +
                  `{`
                  +
                  `\n \t`
                  +
                  `unsigned long OverrideCurrentTime = TimeSinceBoot();    //New Report of Millis()      //I am not sure if the count will be kept correctly`
                        +
                        `\n \t`
                        +
                        `unsigned long OverrideEndTime = OverrideTimerEnd();`
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
                  `unsigned long remainingTime = OverrideEndTime - OverrideCurrentTime;`
                  +
                  `\n \t`
                  +
                        +
                        `if (OverrideCurrentTime < OverrideTimerEnd())`       //if 14,15
                        +
                        `\n \t`
                        +
                        `{`
                          +
                          `\n \t`
                          +
                          `//do nothing;`
                        +
                        `\n \t`
                        +
                        `}`
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
                  `OverrideDelayLatch = !OverrideDelaylatch;`
                  +
                  `\n \t`
                  +
                  `} // end else`
                  +

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
                    `OverrideTimerHasStarted = false;`

                    +
                    `\n \t`

                    +
                    `TimerHasStarted = false;`
                    +
                    `\n \t`

                    +
                    `}//end else`

                   
                    +
                    `\n \t`

                    +
                   
                    +
                    `}`
                
                
                  +
                  `\n \t`
                  +
                  `}`
                  +
                  `\n \t`
                  +
                  `else      //Normal Operation when Override is NOT Active`
                    +
                    `\n \t`
                    +
                    `{`
                      +
                      `\n \t`
                      +
                      `digitalWrite(12,LOW);`
                      +
                      `\n \t`
                      +
                      `if (MeasureVoltage() < ShutOffVoltage)`     
                      +
                      
                      `\n \t`
                      +
                      `{`
                
                        +
                        `\n \t`
                        +
                        `if(TimerHasStarted == false)`
                        +
                        `\n \t`

                        +
                        `{`
                        +
                        `\n \t`
                    +
                        `StartTime = TimeSinceBoot();`
                        +
                        `\n \t`
                        +
                        `EndTime = DisconnectBufferTimerEnd();`    
                        +
                        `\n \t`

                    + 
                     `TimerHasStarted = true;`
                    +
                    `\n \t`

                    +`} // end if(TimerHasStarted == false)`

                    +          
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
                          `unsigned long remainingTime = EndTime - currentTime;`
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

                    +`{`

                    +
                    `TimerHasStarted = false;`
                  
                    +
                    `\n \t`
                    +
                    `}//end else`
                    +
                    `\n \t`
                    +
                    `}`
                
                
                +
                `\n`
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
                `}`
                +
                  `\n \t \t`
                  ;                
                             
