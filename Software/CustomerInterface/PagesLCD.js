/*Void Default Screen State*/const DefaultMenuPageScreenstate =
                  `\n \t`
                  +
                  `enum State`
                  +
                  `\n \t`
                  +
                  `{`
                  +
                  `\n \t \t`
                  +
                  `SCROLLING,`
                  +
                  `\n \t \t`
                  +
                  `SELECTING`
                  +
                  `\n \t`
                  +
                  `};`
                  +
                  `\n \n \t`
                  +
                  `State currentState = SCROLLING;`
                  +
                  `\n \t`
                  +
                  `\n \t`
                  +
                  `enum Page`
                  + 
                  `{`
                  +
                  `\n \t \t`
                  +
                  `STATUS_PAGE,`
                  +
                  `\n \t \t`
                  +
                  `MENU_PAGE,`
                  +
                  `\n \t \t`
                  +
                  `NOMINAL_VOLTAGE_PAGE,`
                  +
                  `\n \t \t`
                  +
                  `CUT_OFF_VOLTAGE_PAGE,`
                  +
                  `\n \t \t`
                  +
                  `RECONNECT_VOLTAGE_PAGE,`
                  +
                  `\n \t \t`
                  +
                  `OVERRIDE_TIME_PAGE`
                  +
                  `\n \t \t`
                  +
                  `// Add more pages as needed`
                  +
                  `\n \t \t`
                  +
                  `};`
                  +
                  `\n \t \t`
                  +
                  `Page currentPage = STATUS_PAGE;`
                  +
                  `\n \t`
                  ;


/*Status Pages*/       var StatusPage = `\n`
                       +
                       `//Status Page`
                       +
                       `\n \t`
                       +
                       `void StatusPageScreen()`
                       +
                       `\n \t`
                       +
                       `{`
                       +
                       `\n \t \t`
                       +
                       `String PageHeader[2] = {"       Status:      ", "       Estado:      "};`
                       +
                       `\n \t \t`
                       +
                       `String ConnectionStatus[][2] = {{"Load Disonnected    ", "Carga Desconectada  "}, {"Load Connected      ", "Carga Conectada     "}};`
                       +
                       `\n \t \t`
                       +
                       `String BatteryVoltageStatus[2] = {"Measurement(v):", "Medición(v):"};`
                       +
                       `\n \t \t`
                       +
                       `String OverrideStatus[][2] = {{"Override: On             ", "Anulación Activada  "}, {"Override: Off       ", "Anulación Desact.   "}};`
                       +
                       `\n \t \t`
                       +
                       `lcd.setCursor(0,0);`
                       +
                       `\n \t \t`
                       +
                       `lcd.print(PageHeader[LanguageSetting]);`//print the menu title "Status:"
                       +
                       `\n \t \t`
                       +
                       `lcd.setCursor(0,1);`
                       +
                       `\n \t \t`
                       +
                       `lcd.print(ConnectionStatus[OutputState][LanguageSetting]);`//print the connection status for on or off
                       +
                       `\n \t \t`
                       +
                       `lcd.setCursor(0,2);`
                       +
                       `\n \t \t`
                       +
                       `lcd.print(BatteryVoltageStatus[LanguageSetting]);`//print the measured boltage. The comma after MeasureVoltage indicates to print to only 2 decimal places on the LCD display
                       +
                       `\n \t \t`
                       +
                       `lcd.setCursor(16,2);`
                       +
                       `\n \t \t`
                       +
                       `lcd.print(MeasureVoltage());`
                       +
                       `\n \t \t`
                       +
                       `lcd.setCursor(0,3);`
                       +
                       `\n \t \t`
                       +
                       `lcd.print(OverrideStatus[OutputState][LanguageSetting]);`//print the menu title "Status:"
                       +
                       `\n \t \t`
                       +
                       `} // end of StatusPageScreen()`
                       +
                       `;`
                       ;
/*Adjust Nominal Voltage Page*/var AdjustNominalVoltagePage = `\n \t`
                         +
                         `void AdjustNominalVoltage() =`
                         +
                         `\n \t`
                         +
                         `{`
                         +
                         `String NominalVoltagePageItems[][2] = {{"Battery Voltage     ", "Voltaje Batería     "},{" volts        ", " voltios     "},{"Cancel ", "Cancelar  "},{"Confirm", "  Confirmar"}};`
 	 	                 +
                         `lcd.setCursor(0,0);`
 	 	                 +
                         `lcd.print(NominalVoltagePageItems[0][LanguageSetting]+":");`
 	 	                 +
                         `lcd.setCursor(0,1);`
 	 	                 +
                         `lcd.print(NominalVoltage + NominalVoltagePageItems[1][LanguageSetting]);`
 	 	                 +
                         `lcd.setCursor(0,2);`
 	 	                 +
                         `lcd.print("                    ");`
 	 	                 +
                         `lcd.setCursor(0,3);`
 	 	                 +
                         `lcd.print("                    ");`
 	 	                 +
                         `} //end Adjust Nominal Voltage`
                         +
                         `\n \n`
                         ;


/*Menu Page*/    
            var MenuPage = `\n`
                       +
                       `//LCD Screen Menu Page Case Statements: `
                       +
                       `\n \t`
                       +
                       `void MenuPageScreens(int scrollPosition)`
                       +
                       `\n \t`
                       +
                       `{`
                       +
                       `\n \t \t`
                       +
                       `switch(scrollPosition)`
                       +
                       `\n \t \t \t`
                       +
                       `{`
                       +
                       `\n \t \t \t`
                       ;
                      
             for (var i = 0; i < Adjustables.length; i++) 
             {
                if(i<MaximumRowNumber)
                {
                               
                         var MenuPage = MenuPage+
                        `case ` + i +`:`
                         +
                         `\n \t \t \t`
                         ;
                     for (var j = 0; j < MaximumRowNumber; j++) 
                     {


                         var MenuPage = MenuPage+
                         `lcd.setCursor(0,`+j+`);`
                         +
                         `\n \t \t \t`
                         ;

                         if (j==i)
                         {
                             var MenuPage = MenuPage+
                            `lcd.print(">"+`
                             ;
                         }//end if j=i
                         else
                         {
                             var MenuPage = MenuPage+
                            `lcd.print(" "+`
                             ;                     
                         }//end else

                         var MenuPage = MenuPage+
                         `InterfaceItems[`+j+`][LanguageSetting]);`
                         +
                         `\n \t \t \t`
                         ;

                     }//end for j = 0
                         var MenuPage = MenuPage
                         +
                         `break;`
                         +
                         `\n \n \t \t \t`
                         ;
                 }//end if i<4
                 else
                 {
                      var MenuPage = MenuPage
                      +
                      `case ` + i +`:`
                      +
                      `\n \t \t \t`
                      ;
                        
                         for (var j = i-MaximumRowNumber+1; j <= i; j++) 
                         {


                             var MenuPage = MenuPage+
                             `lcd.setCursor(0,`+j+`);`
                             +
                             `\n \t \t \t`
                             ;

                             if (j==i)
                             {
                                 var MenuPage = MenuPage+
                                 `NextPage = InterfaceItems[j][LanguageSetting]);`
                                 +
                                 `\n \t \t \t`
                                 +
                                 `lcd.print(">"+`
                                 ;
                             }//end if j=3
                             else
                             {
                                 var MenuPage = MenuPage+
                                `lcd.print(" "+`
                                 ;                     
                             }//end else

                             var MenuPage = MenuPage+
                             `InterfaceItems[`+j+`][LanguageSetting]);`
                             +
                             `\n \t \t \t`
                             ;

                         }//end for j = 0
                         var MenuPage = MenuPage
                         +
                         `break;`
                         +
                         `\n \n \t \t \t`
                         ;
                      
                 }//end else
            
             }//end for i = 0
            
                         var MenuPage = MenuPage
                         +
                         `\n \t \t`
                         +
                         `}// end switch(scrollPosition)`
                         +
                         `\n \t`
                         +
                         `}// end MenuPageScreens`
                         +
                         `\n \n`
                         ;
      
/*Nominal Voltage End-user interface menu*/    
            var NominalVoltagePage = `\n`
                         +
                         `//Adjust Nominal Voltage: `
                         +
                         `\n \t`
                         +
                         `\n \t`
                         +
                         `void AdjustNominalVoltage()`
                         +
                         `\n \t`
                         +
                         `{`
                         +
                         `\n \t \t \t`
                         +
                         `String NominalVoltagePageItems[][2] = {{"Battery Voltage     ", "Voltaje Batería     "},{" volts        ", " voltios     "},{"Cancel ", "Cancelar  "},{"Confirm", "  Confirmar"}};`
                         +
                         `\n \t \t`
                         +
                         `lcd.setCursor(0,0);`
                         +
                         `\n \t \t`
                         +
                         `lcd.print(NominalVoltagePageItems[0][LanguageSetting]+":");`//print the menu title "Battery Voltage"
                         +
                         `\n \t \t`
                         +
                         `lcd.setCursor(0,1);`
                         +
                         `\n \t \t`
                         +
                         `lcd.print(NominalVoltage + NominalVoltagePageItems[1][LanguageSetting]);`//print the current nominal voltage setting
                         +
                         `\n \t \t`
                         +
                         `lcd.setCursor(0,2);`
                         +
                         `\n \t \t`
                         +
                         `lcd.print("                    ");`
                         +
                         `\n \t \t`
                         +
                         `lcd.setCursor(0,3);`
                         +
                         `\n \t \t`
                         +
                         `lcd.print("                    ");`
                         +
                         `\n \t \t`
                         +
                         `} //end Adjust Nominal Voltage`
                         +
                         `\n \t`
                         +
                         `void AdjustCutOffVoltagePage()`
                         +
                         `\n \t`
                         +
                         `{`
 	                     +
                         `\n`
                         +
                         `String ShutOffVoltagePageItems[][2] = {{"Cut-Off Voltage     ", "Voltaje corte       "},{" volts          ", " voltios            "},{"Cancel ", "Cancelar  "},{" Confirm", "  Confirmar"}};`
 	                     +
                         `\n `
                         +
                         `lcd.setCursor(0,0);`
                         +
                         `\n \t`
                         +
                         `lcd.print(ShutOffVoltagePageItems[0][LanguageSetting]+":");`
 	                     +
                         `\n`
                        +
                        `lcd.setCursor(0,1);`
 	                    +
                        `lcd.print(ShutOffVoltage+ShutOffVoltagePageItems[1][LanguageSetting]);`
 	                    +
                        `\n \t `
                        +
                        `lcd.setCursor(0,2);`
 	                    +
                        `\n \t `
                        +                       
                        `lcd.print("                    ");`
                        +
                        `\n \t `
                        +
                        `lcd.setCursor(0,3);`
 	                    +
                        `\n \t `
                        +
                        `lcd.print("                    ");`
 	                    +
                        `\n \t `
                        +
                        `}`
                        +
                        `\n \t`
                        +
                        `void AdjustReconnectVoltagePage()`
                        +
                         `\n \t`
                        +
                        `{`
 	                    +
                        `\n \t `
                        +
                        `String ReconnectVoltagePageItems[][2] = {{"Reconnect Voltage   ", "Voltaje Reconexion  "},{" volts        ", " voltios    "}};`
 	                    +
                        `\n \t `
                        +
                        `lcd.setCursor(0,0);`
 	                    +
                        `\n \t `
                        +
                        `lcd.print(ReconnectVoltagePageItems[0][LanguageSetting]+":");`
 	                    +
                        `\n \t `
                        +
                        `lcd.setCursor(0,1);`
 	                    +
                        `\n \t `
                        +
                        `lcd.print(TurnBackOnVoltage + ReconnectVoltagePageItems[1][LanguageSetting]);`
 	                    +
                        `\n \t `
                        +
                        `lcd.setCursor(0,2);`
 	                    +
                        `\n \t `
                        +
                        `lcd.print("                    ");`
 	                    +
                        `\n \t `
                        +
                        `lcd.setCursor(0,3);`
 	                    +
                        `\n \t `
                        +
                        `lcd.print("                    ");`
 	                    +
                        `\n \t `
                        +
                        `}`
                        +
                        `\n \t`
                        +
                        `void AdjustOverrideTimePage()`
                        +             
                        `\n \t`
                        +
                        `{` 
 	                    +
                        `\n \t `
                        +
                        `String OverrideTimePageItems[][2] = {{"Override Time       ", "Tiempo Anulación    "},{" minutes           ", "     minutos          "}};`
 	                    +
                        `\n \t `
                        +
                        `lcd.setCursor(0,0);`
 	                    +
                        `\n \t `
                        +
                        `lcd.print(OverrideTimePageItems[0][LanguageSetting]+":");`
 	                    +
                        `\n \t `
                        +
                        `lcd.setCursor(0,1);`
 	                    +
                        `\n \t `
                        +
                        `lcd.print(OverrideDelay/60000+ OverrideTimePageItems[1][LanguageSetting]); //the divide by 60000 converts to minutes` 
 	                    +
                        `\n \t `
                        +
                        `lcd.setCursor(0,2);`
 	                    +
                        `\n \t `
                        +
                        `lcd.print("                    ");`
 	                    +
                        `\n \t `
                        +
                        `lcd.setCursor(0,3);`
 	                    +
                        `\n \t `
                        +
                        `lcd.print("                    ");`
 	                    +
                        `\n \t `
                        +
                        `}`
                         +
                         `\n \n`
                         ;
      
      