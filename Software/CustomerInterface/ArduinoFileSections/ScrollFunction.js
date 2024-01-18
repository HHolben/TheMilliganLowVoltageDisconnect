document.addEventListener('DOMContentLoaded', function() {
    /*Void Scroll*/    const ScrollFunction =
                   `void Scroll()`
                   +
                   `\n \t`
                   +
                   `{`
                   +
                   `\n \t \t`
                   +
                   `int UP_State = digitalRead(InputUp);`
                   +
                   `\n \t \t`
                   +
                   `int Down_State = digitalRead(InputDown);`
                   +
                   `\n \t \t`
                   +
                   `if (UP_State == HIGH && SelectedPage>0)`
                   +
                   `\n \t \t`
                   +
                   `{`
                   +
                   `\n \t \t \t`
                   +
                   `SelectedPage--;`
                   +
                   `\n \t \t`
                   +
                   `} //End of Scroll()`
                   +
                   `\n \t \t`
                   +
                   `if (Down_State == HIGH && SelectedPage<3)`
                   +
                   `\n \t \t`
                   +
                   `{`
                   +
                   `\n \t \t \t`
                   +
                   `SelectedPage++;`
                   +
                   `\n \t \t`
                   +
                   `} // end of if(Down_State == HIGH && SelectedPage<3) `
                   +
                   `\n \t \t`
                   +
                   `//Might need to add to where it doesn't change multiple lines on holding buttons.`
                   +
                   `\n \t \t`
                   +
                   `Screens(SelectedPage);`
                   +
                   `\n \t`
                   +
                   `} // end void Scroll()`
                   + 
                   `\n \t`
                   ;
});