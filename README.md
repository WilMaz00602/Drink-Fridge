# Drink-Fridge

## Design Contraints / Requirements
The device should be able to dispense the ingredients of standard volume cocktails with 4 distinct ingredients in less than one minute.
The project cost must not exceed 400 CAD




## Design Decision Rationales

### DDR1
Hosting two web servers is necessary due to the limitations of the ESP32. 

### DDR2
Fetching drink_maps.json but storing the drink images
needed because ESP32 does not have enough storage for the images, but wanted only one copy of drinks_map to reduce errors and/or miscommunications



