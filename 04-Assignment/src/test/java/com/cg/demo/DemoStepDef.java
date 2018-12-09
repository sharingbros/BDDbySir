package com.cg.demo;

import java.util.List;
import java.util.regex.Pattern;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DemoStepDef {

	static WebDriver driver = null;
	static DemoPageFact pagefact = null;

	/*
	 * @Before public static void invokeBrowser() {
	 * System.setProperty("webdriver.chrome.driver", "D:\\chromedriver.exe"); driver
	 * = new ChromeDriver(); driver.navigate().to(
	 * "file:///D:/BDD%20STS%20PROJECTS/04-Assignment/Form1.html"); pagefact = new
	 * DemoPageFact(driver); }
	 */

	@Given("^User is on Registration Page$")
	public void user_is_on_Registration_Page() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "D:\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.navigate().to("file:///D:/BDD%20STS%20PROJECTS/04-Assignment/Form1.html");
		pagefact = new DemoPageFact(driver);
	}

	@Then("^Check the title of page$")
	public void check_the_title_of_page() throws Throwable {

		String title = driver.getTitle();
		if (title.equals("Registration")) {
			System.out.println("matched");
		} else {
			System.err.println("not mached");
		}

	}

	@When("^user enters empty firstName$")
	public void user_enters_empty_firstName() throws Throwable {

		pagefact.setFname("");
		Thread.sleep(1000);
		pagefact.setButton();

	}

	@Then("^Display appropriate error message$")
	public void display_appropriate_error_message() throws Throwable {

		String alert = driver.switchTo().alert().getText();
		Thread.sleep(1000);
		driver.switchTo().alert().accept();
		System.out.println("Empty:" + alert);

	}

	@When("^user enters empty email$")
	public void user_enters_empty_email() throws Throwable {
		pagefact.setFname("Pavan");
		Thread.sleep(2000);
		pagefact.setEmail("");
		pagefact.setButton();

	}

	@When("^User enters invalid email$")
	public void user_enters_invalid_email(DataTable no3) throws Throwable {

		pagefact.setFname("Pavansai");
		Thread.sleep(1000);
		pagefact.setGender2();
		Thread.sleep(1000);
		pagefact.setAddress("GreenLands");
		Thread.sleep(1000);
		pagefact.setMobile("9581395471");
		Thread.sleep(2000);

		List<String> objList = no3.asList(String.class);
		String data = null;
		for (String dataTemp : objList) {
			data = dataTemp;
			pagefact.getEmail().clear();
			pagefact.setEmail(dataTemp);
			Thread.sleep(1000);
			pagefact.setButton();

			if (Pattern.matches("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$", data)) {
				System.out.println("Matching ");
			} else {
				String alertMessage = driver.switchTo().alert().getText();
				Thread.sleep(1000);
				driver.switchTo().alert().accept();
				System.out.println("not matched " + alertMessage);
			}
		}
		pagefact.setButton();
	}

	

	@When("^usere enters every field valid$")
	public void usere_enters_every_field_valid() throws Throwable {

		pagefact.setFname("Pavansai");
		Thread.sleep(1000);
		pagefact.setGender1();
		Thread.sleep(1000);
		pagefact.setAddress("GreenLands");
		Thread.sleep(1000);
		pagefact.setMobile("9581395471");
		Thread.sleep(2000);
		pagefact.setEmail("pavansai408@gmail.com");
		Thread.sleep(2000);
		pagefact.setButton();
		Thread.sleep(1000);
	}

	@Then("^navigate to success page$")
	public void navigate_to_success_page() throws Throwable {

		System.out.println("Successfully logged");

	}

	@When("^user enters (\\d+) and (\\d+) wrong$")
	public void user_enters_and_wrong(Integer arg1, Integer arg2) throws Throwable {
		pagefact.setFname("Pavansai");
		Thread.sleep(1000);
		pagefact.setGender1();
		Thread.sleep(1000);
		pagefact.setAddress("GreenLands");
		Thread.sleep(1000);
		pagefact.getMobile().clear();
		pagefact.setMobile(arg1.toString());
		Thread.sleep(2000);
		pagefact.getEmail().clear();
		pagefact.setEmail(arg2.toString());
		Thread.sleep(2000);
		pagefact.setButton();
		
	}

	@Then("^display error message regarding one entry which entered first$")
	public void display_error_message_regarding_one_entry_which_entered_first() throws Throwable {
		
		String alert = driver.switchTo().alert().getText();
		Thread.sleep(1000);
		driver.switchTo().alert().accept();
		System.out.println("Empty:" + alert);
		System.out.println("This is alert regarding mobile");
	}
	
	@When("^user enters all valid details except gender$")
	public void user_enters_all_valid_details_except_gender() throws Throwable {
	    
		pagefact.setFname("Pavansai");
		Thread.sleep(1000);
		pagefact.setAddress("Ireland");
		Thread.sleep(1000);
		pagefact.setEmail("pavan333@gmail.com");
		Thread.sleep(2000);
		pagefact.setMobile("8795462131");
		Thread.sleep(2000);
		pagefact.setButton();
		
	}
	
	@Given("^User is on Registration page$")
	public void user_is_on_Registration_page() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "D:\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.navigate().to("file:///D:/BDD%20STS%20PROJECTS/04-Assignment/Form1.html");
		pagefact = new DemoPageFact(driver);
	}

	@When("^user enters all valid except city$")
	public void user_enters_all_valid_except_city() throws Throwable {

		pagefact.setFname("Pavansai");
		Thread.sleep(1000);
		pagefact.setGender1();
		Thread.sleep(1000);
		pagefact.setAddress("GreenLands");
		Thread.sleep(1000);
		pagefact.setMobile("9581395471");
		Thread.sleep(2000);
		pagefact.setCity(2);
		Thread.sleep(1000);
		pagefact.setButton();
		
		Thread.sleep(1000);
		
	}


	@After
	public void closeDriver() {

		driver.close();
	}
}
