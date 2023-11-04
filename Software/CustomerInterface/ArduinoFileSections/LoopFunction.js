document.addEventListener('DOMContentLoaded', function() {
    /*Void Loop*/     const LoopFunction =
                  `void loop()`
                  +
                  `\n`
                  +
                  `{`
                  +
                  `\n`
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
                  `if (MeasureVoltage() < ShutOffVoltage)`
                  +
                  `\n \t`
                  +
                  `{`
                  +
                  `\n \t \t`
                  +
                  `if(TimerHasStarted == false)`
                  +
                  `\n \t \t`
                  +
                  `{`
                  +
                  `\n \t \t \t`
                  +
                  `StartTime = TimeSinceBoot();`
                  +
                  `\n \t \t \t`
                  +
                  `EndTime = SetTimerEnd();`
                  +
                  `\n \t \t \t`
                  +
                  `TimerHasStarted = true;`
                  +
                  `\n \t \t \t`
                  +
                  `Serial.print("Timer started at: ");`
                  +
                  `\n \t \t \t`
                  +
                  `Serial.print(StartTime / 1000); // Convert milliseconds to seconds`
                  +
                  `\n \t \t \t`
                  +
                  `Serial.println(" seconds");`
                  +
                  `\n \t \t \t`
                  +
                  `Serial.print("Timer will end at: ");`
                  +
                  `\n \t \t \t`
                  +
                  `Serial.print(EndTime / 1000); // Convert milliseconds to seconds`
                  +
                  `\n \t \t \t`
                  +
                  `Serial.println(" seconds");`
                  +
                  `\n \t \t \t`
                  +
                  `Serial.println("Countdown:");`
                  +
                  `\n \t \t`
                  +
                  `} // end of if TimerHasStarted == false statement`
                  +
                  `\n \t \t \t`
                  +
                  `unsigned long currentTime = TimeSinceBoot();`
                  +
                  `\n \t \t \t`
                  +
                  `if (currentTime < EndTime)`
                  +
                  `\n \t \t \t`
                  +
                  `{`
                  +
                  `\n \t \t \t \t`
                  +
                  `unsigned long remainingTime = EndTime - currentTime;`
                  +
                  `\n \t \t \t \t`
                  +
                  `Serial.print(remainingTime / 1000); // Convert milliseconds to seconds`
                  +
                  `\n \t \t \t \t`
                  +
                  `Serial.println(" seconds remaining");`
                  +
                  `\n \t \t \t \t`
                  +
                  `// Other tasks can run here while the timer is active`
                  +
                  `\n \t \t \t`
                  +
                  `} // end of if(currentTime < EndTime)`
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
                  `Serial.println("Timer completed. Load can be turned off.");`
                  +
                  `\n \t \t \t \t`
                  +
                  `TimerHasStarted = false;`
                  +
                  `\n \t \t \t \t`
                  +
                  `TurnOffOutput();`
                  +
                  `\n \t \t \t`
                  +
                  `} // end of else statement`
                  +
                  `\n \t \t \t`
                   +
                  `} // end of if MeasureVoltage()<ShutOffVoltage`
                  +
                  `\n \t \t \t`
                  +
                  `//Reconnection: If the battery voltage has been recharged over the set reconnect voltage, turn the load back on`
                  +
                  `\n \t \t`
                  +
                  `if (MeasureVoltage()>TurnBackOnVoltage)`
                  +
                  `\n \t \t`
                  +
                  `{`
                  +
                  `\n \t \t \t`
                  +
                  `TurnOnOutput();`
                  +
                  `\n \t \t \t`
                  +  
                  `TimerHasStarted = false;`
                  +
                  `\n \t \t`
                  +
                  `} //end of if statement`
                  +
                  `\n \n \t \t`
                  +
                  `//User Input:`
                  +
                  `\n \n \t \t`
                  +
                  `int SELECT_State = digitalRead(InputSelect);`
                  +
                  `\n \t \t`
                  +
                  `// Toggle the select latch only when the SELECT button is pressed`
                  +
                  `\n \t \t`
                  +
                  `if (SELECT_State == HIGH)`
                  +
                  `\n \t \t`
                  +
                  `{`
                  +
                  `\n \t \t \t`
                  +
                  `selectPressed = !selectPressed;`
                  +
                  `\n \t \t \t`
                  +
                  `delay(200); // NEEDED Delay so it doesn't think you are holding it down, or it will always allow scrolling`
                  +
                  `\n \t \t`
                  +
                  `} // end of if (SELECT_State == HIGH)       Make sure delay doesn't mess up the override or delay off timer!`
                  +
                  `\n \t \t`
                  +
                  `if (!selectPressed)`
                  +
                  `\n \t \t`
                  +
                  `{ // Only allow scrolling if select is not pressed`
                  +
                  `\n \t \t \t`
                  +
                  `Scroll();`
                  +
                  `\n \t \t`
                  +
                  `}`
                  +
                  `\n \t \t`
                  +
                  `//For some reason it is going back to override once select is delatched.`
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
                  `Select();`
                  +
                  `\n \t \t`
                  +
                  `} //end of else`
                  +
                  `\n \t \t`
                  +
                  `//The weird thing happening with the cursor blink is it is being done in the main loop i think, so it takes priority?`
                  +
                  `\n \t \t`
                  +
                  `\n \t \t`
                  +
                  `\n \t \t`
                  +
                  `\n \t`
                  +
                  `} //End of Void Loop`
            ;//end of arduinoCode constant
    
});