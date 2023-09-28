#include <LiquidCrystal.h>

// Initialize the LCD library with the numbers of the interface pins
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

// Define the number of menu options and initialize the menu items
const int numOptions = 4;
const char* menuOptions[numOptions] = {
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4"
};

// Initialize variables for menu navigation
int selectedOption = 0;
bool optionSelected = false;

void setup() {
  // Initialize the LCD
  lcd.begin(16, 2);

  // Display the initial menu
  displayMenu();
}

void loop() {
  // Check for button presses and update the selected option
  if (digitalRead(A0) == LOW) {
    delay(200); // Debounce delay
    selectedOption = (selectedOption + 1) % numOptions;
    displayMenu();
  }

  if (digitalRead(A1) == LOW) {
    delay(200); // Debounce delay
    optionSelected = true;
  }

  // If an option is selected, perform the corresponding action
  if (optionSelected) {
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Selected: ");
    lcd.print(menuOptions[selectedOption]);
    // You can perform an action related to the selected option here
    delay(2000); // Display for 2 seconds
    optionSelected = false;
    displayMenu();
  }
}

void displayMenu() {
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Select an option:");
  lcd.setCursor(0, 1);
  lcd.print(menuOptions[selectedOption]);
}
