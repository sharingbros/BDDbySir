@HotelBooking

Feature: HotelBookingApplication

Background: User has already logged in to hotel application
and is navigated to Hotel Booking register page. 

Scenario: checking for the title 
Given User is already in hotel booking page
Then check the page title in booking page

Scenario: Hotel Booking Failure when first Name is empty 
Given User is already in hotel booking page
When first Name is empty
And click submit
Then display the error msg to user and close

Scenario: Hotel Booking Failure when last Name is empty
Given User is already in hotel booking page
When last Name is empty
And click submit
Then display the error msg to user and close

Scenario: Wrong Email input  
Given User is already in hotel booking page
When user enters all data
But user enters incorrect email format and clicks the button
Then display the error msg to user and close

Scenario: mobile is left empty 
Given User is already in hotel booking page
When user leaves MobileNo blank and clicks the button
Then display the error msg to user and close

Scenario: wrong mobile number format 
Given User is already in hotel booking page
When user enters incorrect mobile number format and clicks the button
# use data table in arg of step def 
|9865485770|
|1234567890|
|0000000121|
|2222222222|
|7890321|
|'uu'|
|' '|
| |
|9629776753|

Then display the error msg to user and close


Scenario: If state not selected 
Given User is already in hotel booking page
When if user is not selecting state
Then display the error msg to user and close

Scenario: If city not selected 
Given User is already in hotel booking page
When if user is not selecting city
Then display the error msg to user and close

Scenario Outline: Validate the number of rooms alloted 
Given User is already in hotel booking page
When user enters <numberOfGuests>
Then for <numberOfGuests> allocate <numberOfRooms>
Examples:
|numberOfGuests|numberOfRooms|
|1|1|
|2|2|
|1|3|
|3|3|
|1|2|
|2|1|

Scenario:  CardHolder Name is empty 
Given User is already in hotel booking page
When user allows Card holder name empty and clicks the button
Then display the error msg to user and close

Scenario: DebitCard number is empty 
Given User is already in hotel booking page
When user allows Debit card No empty and clicks the button
Then display the error msg to user and close

Scenario: expiration Month is empty
Given User is already in hotel booking page
When user allows expiry month empty and clicks the button
Then display the error msg to user and close

Scenario:  expiration year is empty 
Given User is already in hotel booking page
When user allows expiry year empty and clicks the button
Then display the error msg to user and close

Scenario: Booking Successfull by entering correct info
Given User is already in hotel booking page
When on user entering valid data 
Then on successfull navigate to home page 
