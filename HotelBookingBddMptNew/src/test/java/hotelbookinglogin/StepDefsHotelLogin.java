package hotelbookinglogin;



import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class StepDefsHotelLogin {

	private WebDriver driver;
	private HotelLoginPageFactory logPageFact;

@Given("^User is on login page$")
public void user_is_on_login_page() throws Throwable {
	
	//System.setProperty("webdriver.gecko.driver", "C:\\Users\\kathirn\\Desktop\\geckodriver.exe");
	//driver = new FirefoxDriver();
	System.setProperty("webdriver.chrome.driver", "C:\\Users\\kathirn\\Desktop\\geckodriver.exe");
	driver = new ChromeDriver();

	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	logPageFact = new HotelLoginPageFactory(driver);

	driver.get("C:\\Users\\kathirn\\Desktop\\hotelBooking\\login.html");
}

@Then("^check the heading of the page$")
public void check_the_heading_of_the_page() throws Throwable {
	String strheading = driver.findElement(By.xpath("//*[@id='mainCnt']/div[1]/div[1]/h1")).getText();
	if(strheading.contentEquals("Hotel Booking Application")) {
		System.out.println("Heading Matched");
	}
	else	{	System.out.println("Heading Not Matched"); 	}
	driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	driver.close();
}


@When("^user not entered username$")
public void user_not_entered_username() throws Exception {
	logPageFact.setuName("");
	Thread.sleep(1000);
	}

@When("^user not entered password$")
public void user_not_entered_password() throws Exception {
	logPageFact.setPwd("");
	Thread.sleep(1000);
	
	}
@When("^clicks the Login Button$")
public void clicks_the_Login_Button() throws Exception {
	driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	logPageFact.setLogin();
	Thread.sleep(1000);
	
}

@Then("^display error messaage$")
public void display_error_messaage() throws Throwable {
	
	String strheading = driver.findElement(By.xpath("//*[@id='userErrMsg']")).getText();
	assertEquals(strheading, "* Please enter correct Credentials.");
	driver.close();
}

@When("^user enters incorrect username or password$")
public void user_enters_incorrect_username_or_password() throws Throwable {
	logPageFact.setuName("cg");
	logPageFact.setPwd("capg1234");
	driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
	logPageFact.setLogin();
	Thread.sleep(2000);
	driver.close();
}

@Then("^display login failed message$")
public void display_login_failed_message() throws Throwable {
	String alertMessage = driver.switchTo().alert().getText();
	driver.switchTo().alert().accept();
    System.out.println("alert ::" + alertMessage);
    Thread.sleep(2000);
    driver.close();
    }
@When("^user enters valid username, valid password$")
public void user_enters_valid_username_valid_password() throws Throwable {
	logPageFact.setuName("capgemini");
	logPageFact.setPwd("capg1234");
	driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	logPageFact.setLogin();
	Thread.sleep(3000);
	driver.close();
}

@Then("^navigate to hotelBooking$")
public void navigate_to_hotelBooking() throws Throwable {
		driver.navigate().to("C:/Users/kathirn/Desktop/hotelBooking/hotelbooking.html");
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.close();
}

}
