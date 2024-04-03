// Convert the array of adjustable menu items to a string representation
    var MenuItems = 
        `\n`
        +
        `//*************** Convert Menu Items To String *************** this section of the code is generated by index.html using ConvertMenuItemsToString.js ***************`
        +
        `\n \n \t`
        +
        "//Menu Items: \n \t String InterfaceItems[][2] = {"
        ;
                
    for (var i = 2; i < Adjustables.length; i++) 
    {
    
        MenuItems += "{\"" + Adjustables[i][0];
        MenuItems += "\", \"";
        MenuItems += Adjustables[i][1];
        MenuItems += "\"}";
              
        if (i < Adjustables.length - 1) 
        {
            MenuItems += ", ";
        }//end if
        
    }//end for

    MenuItems += "}; \n";

    var PageHeaderString =`"${DeviceName}` + ` Status:", ` + `"${DeviceName}` + ` Estado:"`;

    var StatusMenuItems =
    `String PageHeader[2] = {${PageHeaderString}};`
    +
    `\n \t \t`
    +
    `String ConnectionStatus[][2] = {{"Load Disconnected   ", "Carga Desconectada  "}, {"Load Connected      ", "Carga Conectada     "}};`
    +
    `\n \t \t`
    +
    `String BatteryVoltageStatus[2] = {"Measurement(v):", "Voltaje Medido:"};`
    +
    `\n \t \t`
    +
    `String OverrideStatus[2][2] = {{"Override: Off", "Sin Anular"}, {"Override: On   ", "Con Anular"}};`
    +
    `\n`
    ;