/*Voltage Measurement*/const VoltageMeasurementFunction =
                  `float MeasureVoltage()`
                  +
                  `\n`
                  +
                  `{`
                  +
                  `\n \t`
                  +
                  `float VoltageMeasurement= analogRead(VoltageProbe)*5/1023; //The ratio is 5 Volts (max voltage that can go into a pin)/ 1023 (AnalogRead() measures between 0 and 1023`
                  +
                  `\n \t`
                  +
                  `float BatteryVoltage = VoltageMeasurement*(Resistor1+Resistor2)/(Resistor2); //This uses voltage divider math to caclulate the battery voltage.`
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
