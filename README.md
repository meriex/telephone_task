# telephone_task
This is a telephone package that can be used to add a phone number, remove a phone number or even dial a phone number. in this package we have a telephone class that has 3 main different methods which are.
AddPhoneNumber - For adding a new phone number
RemovePhoneNumber - For removing a phone number
DialPhoneNumber - For dialling a phone number (only phone numbers that have been added can be dialled)
The telephone class should also has a list of observers that notify them whenever a phone number is dialled. 

Requirements
Create a telephone class. It should expose 3 public methods - AddPhoneNumber, RemovePhoneNumber, and DialPhoneNumber.
Update the telephone class, so it uses the observer pattern (have methods to add, remove and notify observers)
Create a class for the observer, it should have a method that can be called by the telephone class to notify it. 
Have the telephone class notify the observers any time a phone number is dialed. 
Add two observers to the telephone class.
The first one should print the phone number
The second one should print `Now Dialling "phone number".


