/*TimeSinceBoot*/const TimeSinceBootFunction =
                  `//----------This Section of the arduino software is created by index.html using TimeSinceBootFunction.js----------`
                  +
                  `\n \t`
                  +
                  `//Find the time since the Low Voltage Disconnect was turned on`
                  +
                  `\n \t`
                  +
                  `//*******************************************************************TIMERS**************************************************************************************//`
+
`\n \t`
+
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
                  /*
                  `\n \t`
                  +
                  `Serial.print(DeviceName +"System Time: ");`
                  +
                  `\n \t`
                  +
                  `Serial.print(SystemTime/1000);`
                  +
                  `\n \t`
                  +
                  `Serial.print(DeviceName +" seconds");`
                  +
                  `\n \t`
                  +
                  `Serial.print(`
                  +
                  String.raw`'\n'`
                  +
                  `);`
                  +
                  */
                  `\n \t`
                  +
                  `return(SystemTime);`
                  +
                  `\n \t`
                  +
                  `} //end of TimeSinceBoot() function`
                  ;
/*Start Buffer Timer Function*/
                 const DisconnectBufferTimerEnd =
                  `//SetTimerEnd`
                  +
                  `\n \t`
                  +
                  `unsigned long DisconnectBufferTimerEnd()`
                  +
                  `\n \t`
                  +
                  `{`
                    +
                  `\n \t`
                  +`unsigned long ShutOffTime;`
                    
                    +
                  `\n \t`
                  +`if(TimeSinceBoot()>=RolloverTime-DisconnectBufferTime)`
                    
                    +
                  `\n \t`
                  +`{`
                      
                      +
                  `\n \t`
                  + ` ShutOffTime = (TimeSinceBoot()+DisconnectBufferTime)-RolloverTime;`
                
                
                    
                    +
                  `\n \t`
                  +`} //end of if statement`
                    
                    +
                  `\n \t`
                  +`else // "normal operation", when TimeSinceBoot() is not within the Disconnect Buffer Time's duration of the millis() rollover`
                    
                    +
                  `\n \t`
                  +`{`
                    
                    +
                  `\n \t`
                  +    `ShutOffTime = TimeSinceBoot()+DisconnectBufferTime;       //E.g Current Time + 30 seconds`
                    
                    +
                  `\n \t`
                  +`} //end of else statement`
                  
                  +
                  `\n \t`
                  +  
                  
                  `return(ShutOffTime);`
                
                +
                  `\n \t`
                  +




                  `} //end of 'SetTimerEnd() function'`
                  +
                  `\n \n`
                  ;


                  /*Start Buffer Timer Function*/
                 const OverrideTimerEnd =
                 `//SetTimerEnd`
                 +
                 `\n \t`
                 +
                 `unsigned long OverrideTimerEnd()`
                 +
                 `\n \t`
                 +
                 `{`
                   +
                 `\n \t`
                 +
                 `unsigned long OverrideEnd;`
                   
                   +
                 `\n \t`
                 +`if(TimeSinceBoot()>=RolloverTime-OverrideDelay)`
                   
                   +
                 `\n \t`
                 +`{`
                     
                     +
                 `\n \t`
                 + 
                 ` OverrideEnd = TimeSinceBoot()+OverrideDelay-RolloverTime;`
               
               
                   
                   +
                 `\n \t`
                 +`} //end of if statement`
                   
                   +
                 `\n \t`
                 +`else // "normal operation", when TimeSinceBoot() is not within the Disconnect Buffer Time's duration of the millis() rollover`
                   
                   +
                 `\n \t`
                 +`{`
                   
                   +
                 `\n \t`
                 +    `OverrideEnd = TimeSinceBoot()+DisconnectBufferTime;       //E.g Current Time + 30 seconds`
                   
                   +
                 `\n \t`
                 +`} //end of else statement`
                 
                 +
                 `\n \t`
                 +  
                 
                 `return(OverrideEnd);`
               
               +
                 `\n \t`
                 +




                 `} //end of 'SetTimerEnd() function'`
                 +
                 `\n \n`
                 ;
