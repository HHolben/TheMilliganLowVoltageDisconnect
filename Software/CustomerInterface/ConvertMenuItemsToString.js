                // Convert the array of adjustable menu items to a string representation
                var MenuItems = 
                `//----------This Section of the arduino software is created by index.html using ConvertMenuItemsToString.js----------`
                +
                `\n \t`
                +
                "//Menu Items: \n \t String InterfaceItems[][2] = {";
                
                for (var i = 0; i < Adjustables.length; i++) 
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
                MenuItems += "}; \n \n";
