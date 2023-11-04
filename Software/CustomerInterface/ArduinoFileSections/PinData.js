  document.addEventListener('DOMContentLoaded', function() {

      //Set up pin assignments
            const PinData = [
    {
        "Name": "ArduinoNano",
        "VoltageProbe": "19", //"Pin A0"
        "lcdSDA": "23",//"Pin A4"
        "lcdSCL": "24",//"Pin A5"
        "EncoderCLK": "9",//"Pin D6"
        "EncoderDT": "10",//"Pin D7"
        "EncoderSW": "11",//"Pin D8"
        "PushButton": "12",//"Pin D9"
        "RelayOutput": "13",//"Pin10"
        "InputUp": "2",//Pin 2
        "InputDown": "3",//Pin 3   
        "InputRight": "4",//Pin 4
        "InputLeft": "5",//Pin 5     
        "InputSelect": "6"//Pin 6
            },   
    {
        "Name": "ArduinoNanoESP32",
        "VoltageProbe": "19", //"Pin A0"
        "lcdSDA": "23",//"Pin A4"
        "lcdSCL": "24",//"Pin A5"
        "EncoderCLK": "9",//"Pin D6"
        "EncoderDT": "10",//"Pin D7"
        "EncoderSW": "11",//"Pin D8"
        "PushButton": "12",//"Pin D9"
        "RelayOutput": "13",//"Pin10"
        "InputUp": "2",//Pin 2
        "InputDown": "3",//Pin 3   
        "InputRight": "4",//Pin 4
        "InputLeft": "5",//Pin 5     
        "InputSelect": "6"//Pin 6
    }, 
    {
        "Name": "ArduinoUno",
        "VoltageProbe": "7", //"Pin A0"
        "lcdSDA": "27",//"Pin A4"
        "lcdSCL": "19",//"Pin A5"
        "EncoderCLK": "12",//"Pin D6"
        "EncoderDT": "13",//"Pin D7"
        "EncoderSW": "8",//"Pin D8"
        "PushButton": "13",//"Pin D9"
        "RelayOutput": "4",//"Pin 10"
        "InputUp": "2",//Pin 2
        "InputDown": "3",//Pin 3   
        "InputRight": "10",//Pin 4
        "InputLeft": "5",//Pin 5     
        "InputSelect": "6"//Pin 6
        
    },
    {
        "Name": "ArduinoMega",
        "VoltageProbe": "A0", //"Pin A0"
        "lcdSDA": "27",//"Pin A4"
        "lcdSCL": "19",//"Pin A5"
        "EncoderCLK": "6",//"Pin D6"
        "EncoderDT": "7",//"Pin D7"
        "EncoderSW": "8",//"Pin D8"
        "PushButton": "10",//"Pin D10"
        "RelayOutput": "2",//"Pin D2 (digital pin 2)"
        "InputUp": "6",//Pin D2
        "InputDown": "7",//Pin D3   
        "InputRight": "8",//Pin D4
        "InputLeft": "5",//Pin D5     
        "InputSelect": "10"//Pin D6
            }
];

  });