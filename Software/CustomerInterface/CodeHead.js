//Get the current time
    var currentDate = new Date();
    var datetimeElement = document.getElementById("datetime");

// Format the date and time
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    var formattedDateTime = currentDate.toLocaleDateString('en-US', options);

    const CodeHead =
        `\n`
        +
        `/**************** Code Head *************** this section of the code is generated by index.html using CodeHead.js ***************`
        +
        `\n \n \n \t`
        +
        `====================Milligan Engineering Low Voltage Disconnect Arduino Code====================`
        +
        `\n \n \t \t`
        + 
        `Generated by index.html on: `
        +
        formattedDateTime
        +
        `\n \t \t`
        +
        `index.html was created by Henry Holben and Weston Street, with some assistance from chatGPT: https://chat.openai.com`
        +
        `\n \n \t`
        +
        `================================================================================================*/`
        +
        `\n`
        ;
