@HotelBookingLogin

Feature: Login

Scenario:  checking for the title
Given User is on login page
Then check the heading of the page

Scenario: Prompt user to enter the username empty
Given User is on login page
When user not entered username
And clicks the Login Button
Then display error messaage

Scenario: Prompt user to enter the password empty
Given User is on login page
When user not entered password
And clicks the Login Button
Then display error messaage

Scenario: Invalid login
Given User is on login page
When user enters incorrect username or password
Then display login failed message


Scenario: Successful login
Given User is on login page
When user enters valid username, valid password
Then navigate to hotelBooking

