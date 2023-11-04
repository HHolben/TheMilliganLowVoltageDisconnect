document.addEventListener('DOMContentLoaded', function() {
    /*Start Timer Function*/const StartTimerFunction =
                  `//SetTimerEnd`
                  +
                  `\n`
                  +
                  `unsigned long SetTimerEnd()`
                  +
                  `\n \t`
                  +
                   `{`
                  +
                  `\n \t \t`
                  +
                  `unsigned long ShutOffTime;`
                  +
                  `\n \t \t`
                  +
                   `if(TimeSinceBoot()>=RolloverTime-OverrideDelay)`
                  +
                  `\n \t \t`
                  +
                  `{`
                  +
                  `\n \t \t \t`
                  +
                  `ShutOffTime = (TimeSinceBoot()+OverrideDelay)-RolloverTime;`
                  +
                  `\n \t \t \t`
                  +  
                  `\n \t \t \t`
                  +
                  `\n \t \t`
                  +
                   `} //end of if statement`
                  +
                  `\n \t \t`                  
                  +
                  `else // "normal operation", when TimeSinceBoot() is not within the Override Delay's duration of the millis() rollover`
                  +
                  `\n \t \t`
                  +
                  `{`
                  +
                  `\n \t \t \t`
                  +
                  `ShutOffTime = TimeSinceBoot()+OverrideDelay;`
                  +                  
                  `\n \t \t`
                  +
                  `} //end of else statement`
                  +
                  `\n \t`
                  +
                  `return(ShutOffTime);`
                  +
                  `\n`
                  +
                   `} //end of SetTimerEnd() function`
                  +
                  `\n \n`
                  ;
});