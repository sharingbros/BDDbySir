Feature: RegistrationDemo1

Scenario: Check the title of page
Given User is on Registration Page
Then Check the title of page


Scenario: User enters empty firstName
Given User is on Registration Page
When user enters empty firstName
Then Display appropriate error message

Scenario: User enters empty mail
Given User is on Registration Page
When user enters empty email
Then Display appropriate error message


Scenario: User enters invalid email
Given User is on Registration Page
When User enters invalid email
|.gmail|
|213546|
|%@#$%^^|
Then Display appropriate error message

Scenario: User enters all details valid
Given User is on Registration Page
When usere enters every field valid
Then navigate to success page

Scenario Outline: User enters invalid mobileno and email
Given User is on Registration Page
When user enters <mobile> and <email> wrong
Then display error message regarding one entry which entered first
Examples:
|mobile|email|
|054656|21323846|
|879546213546|21364587|


Scenario: User didnot checked the gender
Given User is on Registration Page
When user enters all valid details except gender
Then Display appropriate error message

Scenario: Checking for dropdowns
Given User is on Registration page
When user enters all valid except city
Then Display appropriate error message

