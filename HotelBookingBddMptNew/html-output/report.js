$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("hotelbookingregistration/HotelBooking.feature");
formatter.feature({
  "line": 3,
  "name": "HotelBookingApplication",
  "description": "",
  "id": "hotelbookingapplication",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@HotelBooking"
    }
  ]
});
formatter.background({
  "line": 5,
  "name": "User has already logged in to hotel application",
  "description": "and is navigated to Hotel Booking register page.",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 8,
  "name": "checking for the title",
  "description": "",
  "id": "hotelbookingapplication;checking-for-the-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "User is already in hotel booking page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "check the page title in booking page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsHotelBooking.user_is_already_in_hotel_booking_page()"
});
formatter.result({
  "duration": 6051698059,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHotelBooking.check_the_page_title_in_booking_page()"
});
formatter.result({
  "duration": 286977673,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User has already logged in to hotel application",
  "description": "and is navigated to Hotel Booking register page.",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 12,
  "name": "Hotel Booking Failure when first Name is empty",
  "description": "",
  "id": "hotelbookingapplication;hotel-booking-failure-when-first-name-is-empty",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "User is already in hotel booking page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "first Name is empty",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "click submit",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "display the error msg to user and close",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsHotelBooking.user_is_already_in_hotel_booking_page()"
});
formatter.result({
  "duration": 4880552145,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHotelBooking.first_Name_is_empty()"
});
formatter.result({
  "duration": 1130010316,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHotelBooking.click_submit()"
});
formatter.result({
  "duration": 167700107,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHotelBooking.display_alert_msg_to_user()"
});
formatter.result({
  "duration": 4231438479,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User has already logged in to hotel application",
  "description": "and is navigated to Hotel Booking register page.",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 18,
  "name": "Hotel Booking Failure when last Name is empty",
  "description": "",
  "id": "hotelbookingapplication;hotel-booking-failure-when-last-name-is-empty",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "User is already in hotel booking page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "last Name is empty",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "click submit",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "display the error msg to user and close",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsHotelBooking.user_is_already_in_hotel_booking_page()"
});
formatter.result({
  "duration": 4932476375,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHotelBooking.last_Name_is_empty()"
});
formatter.result({
  "duration": 2399894126,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHotelBooking.click_submit()"
});
formatter.result({
  "duration": 33718769,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : Please fill the Last Name}\n  (Session info: chrome\u003d70.0.3538.77)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds: null\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027LIN77000347\u0027, ip: \u002710.219.34.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\kathirn\\AppData\\Lo...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:49332}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.77, webStorageEnabled: true}\nSession ID: 3f3a536739f280d3b886980233502dfb\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:172)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat hotelbookingregistration.HotelBookingPageFactory.setButton(HotelBookingPageFactory.java:86)\r\n\tat hotelbookingregistration.StepDefsHotelBooking.click_submit(StepDefsHotelBooking.java:65)\r\n\tat ✽.And click submit(hotelbookingregistration/HotelBooking.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefsHotelBooking.display_alert_msg_to_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 5,
  "name": "User has already logged in to hotel application",
  "description": "and is navigated to Hotel Booking register page.",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 24,
  "name": "Wrong Email input",
  "description": "",
  "id": "hotelbookingapplication;wrong-email-input",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "User is already in hotel booking page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "user enters all data",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user enters incorrect email format and clicks the button",
  "keyword": "But "
});
formatter.step({
  "line": 28,
  "name": "display the error msg to user and close",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsHotelBooking.user_is_already_in_hotel_booking_page()"
});
formatter.result({
  "duration": 5209366207,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHotelBooking.user_enters_all_data()"
});
formatter.result({
  "duration": 12244138805,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHotelBooking.user_enters_incorrect_email_format_and_clicks_the_button()"
});
formatter.result({
  "duration": 1185572165,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHotelBooking.display_alert_msg_to_user()"
});
formatter.result({
  "duration": 4224606522,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User has already logged in to hotel application",
  "description": "and is navigated to Hotel Booking register page.",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 30,
  "name": "mobile is left empty",
  "description": "",
  "id": "hotelbookingapplication;mobile-is-left-empty",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "User is already in hotel booking page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "user leaves MobileNo blank and clicks the button",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "display the error msg to user and close",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsHotelBooking.user_is_already_in_hotel_booking_page()"
});
formatter.result({
  "duration": 5037610499,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHotelBooking.user_leaves_MobileNo_blank_and_clicks_the_button()"
});
formatter.result({
  "duration": 4788207832,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHotelBooking.display_alert_msg_to_user()"
});
formatter.result({
  "duration": 4186224625,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User has already logged in to hotel application",
  "description": "and is navigated to Hotel Booking register page.",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 35,
  "name": "wrong mobile number format",
  "description": "",
  "id": "hotelbookingapplication;wrong-mobile-number-format",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "User is already in hotel booking page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "user enters incorrect mobile number format and clicks the button",
  "rows": [
    {
      "comments": [
        {
          "line": 38,
          "value": "# use data table in arg of step def"
        }
      ],
      "cells": [
        "9865485770"
      ],
      "line": 39
    },
    {
      "cells": [
        "1234567890"
      ],
      "line": 40
    },
    {
      "cells": [
        "0000000121"
      ],
      "line": 41
    },
    {
      "cells": [
        "9629776753"
      ],
      "line": 42
    },
    {
      "cells": [
        "2222222222"
      ],
      "line": 43
    },
    {
      "cells": [
        "7890321"
      ],
      "line": 44
    },
    {
      "cells": [
        "\u0027uu\u0027"
      ],
      "line": 45
    },
    {
      "cells": [
        "\u0027 \u0027"
      ],
      "line": 46
    },
    {
      "cells": [
        ""
      ],
      "line": 47
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "display the error msg to user and close",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsHotelBooking.user_is_already_in_hotel_booking_page()"
});
formatter.result({
  "duration": 5249350182,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHotelBooking.user_enters_incorrect_mobileNo_format_and_clicks_the_button(DataTable)"
});
formatter.result({
  "duration": 4788650358,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : Please select city}\n  (Session info: chrome\u003d70.0.3538.77)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds: null\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027LIN77000347\u0027, ip: \u002710.219.34.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\kathirn\\AppData\\Lo...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:49380}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.77, webStorageEnabled: true}\nSession ID: b9da1c2fe5e5337b16b2009b9534725e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:172)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.clear(RemoteWebElement.java:118)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy16.clear(Unknown Source)\r\n\tat hotelbookingregistration.StepDefsHotelBooking.user_enters_incorrect_mobileNo_format_and_clicks_the_button(StepDefsHotelBooking.java:149)\r\n\tat ✽.When user enters incorrect mobile number format and clicks the button(hotelbookingregistration/HotelBooking.feature:37)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefsHotelBooking.display_alert_msg_to_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 5,
  "name": "User has already logged in to hotel application",
  "description": "and is navigated to Hotel Booking register page.",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 52,
  "name": "If state not selected",
  "description": "",
  "id": "hotelbookingapplication;if-state-not-selected",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 53,
  "name": "User is already in hotel booking page",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "if user is not selecting state",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "display the error msg to user and close",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsHotelBooking.user_is_already_in_hotel_booking_page()"
});
formatter.result({
  "duration": 5406743452,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHotelBooking.if_user_is_not_selecting_state()"
});
formatter.result({
  "duration": 5746098074,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHotelBooking.display_alert_msg_to_user()"
});
formatter.result({
  "duration": 4200311807,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User has already logged in to hotel application",
  "description": "and is navigated to Hotel Booking register page.",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 57,
  "name": "If city not selected",
  "description": "",
  "id": "hotelbookingapplication;if-city-not-selected",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 58,
  "name": "User is already in hotel booking page",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "if user is not selecting city",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "display the error msg to user and close",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsHotelBooking.user_is_already_in_hotel_booking_page()"
});
formatter.result({
  "duration": 4998277096,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHotelBooking.user_doesnot_select_city()"
});
formatter.result({
  "duration": 5753022538,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHotelBooking.display_alert_msg_to_user()"
});
formatter.result({
  "duration": 4184413367,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 62,
  "name": "Validate the number of rooms alloted",
  "description": "",
  "id": "hotelbookingapplication;validate-the-number-of-rooms-alloted",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 63,
  "name": "User is already in hotel booking page",
  "keyword": "Given "
});
formatter.step({
  "line": 64,
  "name": "user enters \u003cnumberOfGuests\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "for \u003cnumberOfGuests\u003e allocate \u003cnumberOfRooms\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 66,
  "name": "",
  "description": "",
  "id": "hotelbookingapplication;validate-the-number-of-rooms-alloted;",
  "rows": [
    {
      "cells": [
        "numberOfGuests",
        "numberOfRooms"
      ],
      "line": 67,
      "id": "hotelbookingapplication;validate-the-number-of-rooms-alloted;;1"
    },
    {
      "cells": [
        "1",
        "1"
      ],
      "line": 68,
      "id": "hotelbookingapplication;validate-the-number-of-rooms-alloted;;2"
    },
    {
      "cells": [
        "2",
        "2"
      ],
      "line": 69,
      "id": "hotelbookingapplication;validate-the-number-of-rooms-alloted;;3"
    },
    {
      "cells": [
        "1",
        "3"
      ],
      "line": 70,
      "id": "hotelbookingapplication;validate-the-number-of-rooms-alloted;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 5,
  "name": "User has already logged in to hotel application",
  "description": "and is navigated to Hotel Booking register page.",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 68,
  "name": "Validate the number of rooms alloted",
  "description": "",
  "id": "hotelbookingapplication;validate-the-number-of-rooms-alloted;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@HotelBooking"
    }
  ]
});
formatter.step({
  "line": 63,
  "name": "User is already in hotel booking page",
  "keyword": "Given "
});
formatter.step({
  "line": 64,
  "name": "user enters 1",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "for 1 allocate 1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsHotelBooking.user_is_already_in_hotel_booking_page()"
});
formatter.result({
  "duration": 5114384112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "StepDefsHotelBooking.user_enters(int)"
});
formatter.result({
  "duration": 7740909729,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 4
    },
    {
      "val": "1",
      "offset": 15
    }
  ],
  "location": "StepDefsHotelBooking.for_allocate(int,int)"
});
formatter.result({
  "duration": 22385665,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User has already logged in to hotel application",
  "description": "and is navigated to Hotel Booking register page.",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 69,
  "name": "Validate the number of rooms alloted",
  "description": "",
  "id": "hotelbookingapplication;validate-the-number-of-rooms-alloted;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@HotelBooking"
    }
  ]
});
formatter.step({
  "line": 63,
  "name": "User is already in hotel booking page",
  "keyword": "Given "
});
formatter.step({
  "line": 64,
  "name": "user enters 2",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "for 2 allocate 2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsHotelBooking.user_is_already_in_hotel_booking_page()"
});
formatter.result({
  "duration": 5275664204,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "StepDefsHotelBooking.user_enters(int)"
});
formatter.result({
  "duration": 7666207150,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 4
    },
    {
      "val": "2",
      "offset": 15
    }
  ],
  "location": "StepDefsHotelBooking.for_allocate(int,int)"
});
formatter.result({
  "duration": 2788060,
  "error_message": "java.lang.AssertionError: expected [2] but found [1]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:652)\r\n\tat org.testng.Assert.assertEquals(Assert.java:662)\r\n\tat hotelbookingregistration.StepDefsHotelBooking.for_allocate(StepDefsHotelBooking.java:218)\r\n\tat ✽.Then for 2 allocate 2(hotelbookingregistration/HotelBooking.feature:65)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 5,
  "name": "User has already logged in to hotel application",
  "description": "and is navigated to Hotel Booking register page.",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 70,
  "name": "Validate the number of rooms alloted",
  "description": "",
  "id": "hotelbookingapplication;validate-the-number-of-rooms-alloted;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@HotelBooking"
    }
  ]
});
formatter.step({
  "line": 63,
  "name": "User is already in hotel booking page",
  "keyword": "Given "
});
formatter.step({
  "line": 64,
  "name": "user enters 1",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "for 1 allocate 3",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsHotelBooking.user_is_already_in_hotel_booking_page()"
});
formatter.result({
  "duration": 5395376365,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "StepDefsHotelBooking.user_enters(int)"
});
formatter.result({
  "duration": 7656190673,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 4
    },
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "StepDefsHotelBooking.for_allocate(int,int)"
});
formatter.result({
  "duration": 1397806,
  "error_message": "java.lang.AssertionError: expected [3] but found [1]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:652)\r\n\tat org.testng.Assert.assertEquals(Assert.java:662)\r\n\tat hotelbookingregistration.StepDefsHotelBooking.for_allocate(StepDefsHotelBooking.java:218)\r\n\tat ✽.Then for 1 allocate 3(hotelbookingregistration/HotelBooking.feature:65)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 5,
  "name": "User has already logged in to hotel application",
  "description": "and is navigated to Hotel Booking register page.",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 73,
  "name": "CardHolder Name is empty",
  "description": "",
  "id": "hotelbookingapplication;cardholder-name-is-empty",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 74,
  "name": "User is already in hotel booking page",
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "user allows Card holder name empty and clicks the button",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "display the error msg to user and close",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsHotelBooking.user_is_already_in_hotel_booking_page()"
});
formatter.result({
  "duration": 5414933946,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHotelBooking.user_leaves_Card_holder_name_empty_and_clicks_the_button()"
});
formatter.result({
  "duration": 9117609412,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHotelBooking.display_alert_msg_to_user()"
});
formatter.result({
  "duration": 4389256528,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User has already logged in to hotel application",
  "description": "and is navigated to Hotel Booking register page.",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 78,
  "name": "DebitCard number is empty",
  "description": "",
  "id": "hotelbookingapplication;debitcard-number-is-empty",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 79,
  "name": "User is already in hotel booking page",
  "keyword": "Given "
});
formatter.step({
  "line": 80,
  "name": "user allows Debit card No empty and clicks the button",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "display the error msg to user and close",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsHotelBooking.user_is_already_in_hotel_booking_page()"
});
formatter.result({
  "duration": 6928063204,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHotelBooking.user_leaves_DebitCardNo_blank_and_clicks_the_button()"
});
formatter.result({
  "duration": 10225140800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHotelBooking.display_alert_msg_to_user()"
});
formatter.result({
  "duration": 4231043529,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User has already logged in to hotel application",
  "description": "and is navigated to Hotel Booking register page.",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 83,
  "name": "expiration Month is empty",
  "description": "",
  "id": "hotelbookingapplication;expiration-month-is-empty",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 84,
  "name": "User is already in hotel booking page",
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "user allows expiry month empty and clicks the button",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "display the error msg to user and close",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsHotelBooking.user_is_already_in_hotel_booking_page()"
});
formatter.result({
  "duration": 4997707326,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHotelBooking.user_makes_expiry_month_empty_and_clicks_the_button()"
});
formatter.result({
  "duration": 12545396226,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHotelBooking.display_alert_msg_to_user()"
});
formatter.result({
  "duration": 4241095121,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User has already logged in to hotel application",
  "description": "and is navigated to Hotel Booking register page.",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 88,
  "name": "expiration year is empty",
  "description": "",
  "id": "hotelbookingapplication;expiration-year-is-empty",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 89,
  "name": "User is already in hotel booking page",
  "keyword": "Given "
});
formatter.step({
  "line": 90,
  "name": "user allows expiry year empty and clicks the button",
  "keyword": "When "
});
formatter.step({
  "line": 91,
  "name": "display the error msg to user and close",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsHotelBooking.user_is_already_in_hotel_booking_page()"
});
formatter.result({
  "duration": 5002328544,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHotelBooking.user_allows_expiration_year_empty_and_clicks_the_button()"
});
formatter.result({
  "duration": 12512368054,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHotelBooking.display_alert_msg_to_user()"
});
formatter.result({
  "duration": 4249527646,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User has already logged in to hotel application",
  "description": "and is navigated to Hotel Booking register page.",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 93,
  "name": "Booking Successfull by entering correct info",
  "description": "",
  "id": "hotelbookingapplication;booking-successfull-by-entering-correct-info",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 94,
  "name": "User is already in hotel booking page",
  "keyword": "Given "
});
formatter.step({
  "line": 95,
  "name": "on user entering valid data",
  "keyword": "When "
});
formatter.step({
  "line": 96,
  "name": "on successfull navigate to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsHotelBooking.user_is_already_in_hotel_booking_page()"
});
formatter.result({
  "duration": 4979200555,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHotelBooking.on_user_entering_valid_data()"
});
formatter.result({
  "duration": 12864023899,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHotelBooking.on_successfull_navigate_to_home_page()"
});
formatter.result({
  "duration": 909700291,
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027LIN77000347\u0027, ip: \u002710.219.34.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\kathirn\\AppData\\Lo...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:49531}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.77, webStorageEnabled: true}\nSession ID: a5486e6808123761a78ff152318ae3a7\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:853)\r\n\tat hotelbookingregistration.StepDefsHotelBooking.on_successfull_navigate_to_home_page(StepDefsHotelBooking.java:358)\r\n\tat ✽.Then on successfull navigate to home page(hotelbookingregistration/HotelBooking.feature:96)\r\n",
  "status": "failed"
});
});