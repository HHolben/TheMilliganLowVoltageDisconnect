#include <WiFi.h>
#include <ESPAsyncWebSrv.h>

// Replace with your network credentials
const char* ssid = "ESP32-AP";
const char* password = "password";

// Define the GPIO pin connected to the LED
const int ledPin = 2;

// Define the analog pin connected to the potentiometer
const int potentiometerPin = 34; // Use an available analog input pin

// Create an instance of the web server
AsyncWebServer server(80);

// Store the current potentiometer value
int potValue = 0;

void setup() {
  // Initialize the LED pin as an output
  pinMode(ledPin, OUTPUT);

  // Create an open network (no password) or change the password as needed
  WiFi.softAP(ssid, password);

  // Hardcoded IP address for the ESP32
  IPAddress apIP(192, 168, 4, 1);
  WiFi.softAPConfig(apIP, apIP, IPAddress(255, 255, 255, 0));

  // Route to turn the LED on
  server.on("/on", HTTP_GET, [](AsyncWebServerRequest *request){
    digitalWrite(ledPin, HIGH);
    request->send(200, "text/plain", "LED turned on");
  });

  // Route to turn the LED off
  server.on("/off", HTTP_GET, [](AsyncWebServerRequest *request){
    digitalWrite(ledPin, LOW);
    request->send(200, "text/plain", "LED turned off");
  });

  // Route to display potentiometer value
  server.on("/potentiometer", HTTP_GET, [](AsyncWebServerRequest *request){
    String response = "Potentiometer Value: " + String(potValue);
    request->send(200, "text/plain", response);
  });

  // Serve the HTML page for controlling the LED and displaying potentiometer value
  server.on("/", HTTP_GET, [](AsyncWebServerRequest *request){
    String html = "<html><head>";
    html += "<h1>ESP32 Real-Time Potentiometer Value</h1>";
    html += "<a href='/on'><button>Turn On</button></a>&nbsp;";
    html += "<a href='/off'><button>Turn Off</button></a>";
    html += "</head><body>";
    html += "<div id='potValue'>Potentiometer Value: " + String(potValue) + "</div>";
    html += "<script>setInterval(function() {";
    html += "fetch('/potentiometer').then(response => response.text()).then(data => {";
    html += "document.getElementById('potValue').innerHTML = 'Potentiometer Value: ' + data;";
    html += "});";
    html += "}, 1000);</script>";
    html += "<script src = "http://localhost/HenryDavidHolbenJournalAndNotebook/.UniversalFooterContent.js"></script>

  </body></html>";
    request->send(200, "text/html", html);
  });

  // Start the server
  server.begin();
}

void loop() {
  // Read the potentiometer value
  potValue = analogRead(potentiometerPin);

  // Your loop code here (if any)
}
