package features;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDef {
	WebDriver wd=null;
	RegisterPageFact rft;
	
	@Given("^in registration form$")
	public void in_registration_form() throws Throwable {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\kathirn\\Desktop\\chromedriver.exe");
		wd=new ChromeDriver();
		wd.get("C:\\Users\\kathirn\\Desktop\\mylogin.html");
		rft=new RegisterPageFact(wd);
	}

	@When("^user enters name empty$")
	public void user_enters_name_empty() throws Throwable {
		rft.setName("arun");
		Thread.sleep(1000);
		rft.setButton();
	}

	@Then("^display the error mesage from alert box$")
	public void display_the_error_mesage_from_alert_box() throws Throwable {
		String alertMsg=wd.switchTo().alert().getText();
		Thread.sleep(1000);
		System.out.println("alert :: "+alertMsg);
		Thread.sleep(2000);
		wd.switchTo().alert().accept();
		wd.close();
	}

	
}
