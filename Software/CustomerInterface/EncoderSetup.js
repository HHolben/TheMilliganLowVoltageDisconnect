/*Screen Case Statements*/const EncoderSetup =
`//Encoder`
+
`\n \t`
+
`Encoder myEncoder(2, 3); // Connect encoder pins (Clk,DT)`
+
`\n \t`
+
`long oldPosition  = -999;`
+
`\n \t`
+
`int EncoderDirection = 0;                 //Idle by default`
+
`\n \t`
+
`const int scrollThreshold = 10;    //Update this value based on the desired sensitivty of your encoder`
+
`\n \t`
+
`int ChangeInPosition = 0;`
+
`\n \t`
+
`int EncoderSelectState = HIGH;`
+
`\n \t`
+
`static int lastEncoderSelectState = HIGH;`
+
`\n`
;