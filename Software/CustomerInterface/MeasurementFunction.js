/*Voltage Measurement*/const VoltageMeasurementFunction =
                  `//----------This Section of the arduino software is created by index.html using MeasurementFunction.js----------`
                  +
                  `\n \t`
                  +
                  `float MeasureVoltage()`
                  +
                  `\n`
                  +
                  `{`
                  +
                  `\n \t`
                  +
                  `float VoltageMeasurement = analogRead(VoltageProbe)*24.00/1023.00; //The ratio is 12 Volts (max voltage that can go into a pin)/ 1023 (AnalogRead() measures between 0 and 1023`
                  +
                  `\n \t`
                  +
                  `float BatteryVoltage = VoltageMeasurement;`
                  +
                  `\n \t`
                  +
                  /*
                  `Serial.print(DeviceName +"Voltage measured at probe = ");`
                  +
                  `\n \t`
                  +
                   `Serial.print(VoltageMeasurement);`
                  +
                  `\n \t`
                  +
                  `\n \t`
                  +
                  `Serial.print(`
                  +
                  String.raw`'\n'`
                  +
                  `);`
                  +
                  `\n \t`
                  +
                  
                  `Serial.print(DeviceName +"Battery Voltage = ");` 
                  +
                  `\n \t`
                  +
                  `Serial.print(BatteryVoltage);`
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
                  `return(BatteryVoltage);`
                  +
                  `\n`
                  +
                  `} //end of function, MeasureVoltage()`
                  +
                  `\n \n`
                  ;
