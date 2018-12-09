package hotelbookingregistration;

import static org.testng.Assert.assertEquals;

import java.util.List;
import java.util.concurrent.TimeUnit;
import java.util.regex.Pattern;

import org.junit.BeforeClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.DataTable;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefsHotelBooking {
	private WebDriver driver;
	private HotelBookingPageFactory hotelPageFact;
	// can use @before for init the driver and pagefactory
	/*
	 * @Before public void init() { System.setProperty("webdriver.chrome.driver",
	 * "C:\\Users\\kathirn\\Desktop\\chromedriver.exe"); driver = new
	 * ChromeDriver();
	 * 
	 * }
	 */

	@Given("^User is already in hotel booking page$")
	public void user_is_already_in_hotel_booking_page() throws Throwable { // driver = new FirefoxDriver();
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\kathirn\\Desktop\\chromedriver.exe");
		driver = new ChromeDriver();

		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		hotelPageFact = new HotelBookingPageFactory(driver);
		driver.get("C:\\Users\\kathirn\\Desktop\\hotelBooking\\hotelbooking.html");

	}

	@Then("^check the page title in booking page$")
	public void check_the_page_title_in_booking_page() throws Throwable {

		String title = driver.getTitle();
		if (title.equals("Hotel Booking"))
			System.out.println("title is same");
		else
			System.out.println(" Title doesnt match");
		driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
		driver.close();
	}


	@When("^first Name is empty$")
	public void first_Name_is_empty() throws Exception {
		hotelPageFact.setFname("");
		Thread.sleep(1000);

	}

	@When("^click submit$")
	public void click_submit() throws Throwable {
		hotelPageFact.setButton();
	}

	@Then("^display the error msg to user and close$")
	public void display_alert_msg_to_user() throws Exception {
		String alertMessage = driver.switchTo().alert().getText();
		Thread.sleep(2000);
		driver.switchTo().alert().accept();
		System.out.println("alert :: "+alertMessage);
		Thread.sleep(2000);
		driver.close();
	}

	@When("^last Name is empty$")
	public void last_Name_is_empty() throws Exception {
		hotelPageFact.setFname("Aravind");
		Thread.sleep(1000);
		hotelPageFact.setLname("");
		Thread.sleep(1000);
		hotelPageFact.setButton();
	}

	@When("^user enters all data$")
	public void user_enters_all_data() throws Exception {
		hotelPageFact.setFname("Ajitha");
		Thread.sleep(1000);
		hotelPageFact.setLname("Gopal");
		Thread.sleep(1000);
		hotelPageFact.setMobile("9879876543");
		Thread.sleep(1000);
		hotelPageFact.setCity("Chennai");
		Thread.sleep(1000);
		hotelPageFact.setState("Tamilnadu");
		Thread.sleep(1000);
		hotelPageFact.setPersons(3);
		Thread.sleep(1000);
		hotelPageFact.setCardholder("Ajitha gopal");
		Thread.sleep(1000);
		hotelPageFact.setDebit("6769805674542234");
		Thread.sleep(1000);
		hotelPageFact.setCvv("827");
		Thread.sleep(1000);
		hotelPageFact.setMonth("8");
		Thread.sleep(1000);
		hotelPageFact.setYear("2030");
		Thread.sleep(1000);
	}

	@When("^user enters incorrect email format and clicks the button$")
	public void user_enters_incorrect_email_format_and_clicks_the_button() throws Exception {
		hotelPageFact.setEmail("abc.com");
		Thread.sleep(1000);
		hotelPageFact.setButton();
	}

	@When("^user leaves MobileNo blank and clicks the button$")
	public void user_leaves_MobileNo_blank_and_clicks_the_button() throws Exception {
		hotelPageFact.setFname("Aravind");
		Thread.sleep(1000);
		hotelPageFact.setLname("Rajesekaran");
		Thread.sleep(1000);
		hotelPageFact.setEmail("ashok.raj@gmail.com");
		Thread.sleep(1000);
		hotelPageFact.setMobile("");
		Thread.sleep(1000);
		hotelPageFact.setButton();
	}
	//@When("^user enters incorrect mobile number format and clicks the button$")
	//public void user_enters_incorrect_mobileNo_format_and_clicks_the_button(List<String>  nos) throws Exception {
	@When("^user enters incorrect mobile number format and clicks the button$")
	public void user_enters_incorrect_mobileNo_format_and_clicks_the_button(DataTable nos) throws Exception {
		hotelPageFact.setFname("Aravind");
		Thread.sleep(1000);
		hotelPageFact.setLname("Rajesekaran");
		Thread.sleep(1000);
		hotelPageFact.setEmail("ashok.raj@gmail.com");
		Thread.sleep(1000);
//https://stackoverflow.com/questions/44306336/is-it-possible-to-get-an-array-as-a-cell-in-cucumber-parameters-table
//https://stackoverflow.com/questions/46130455/how-to-convert-a-datatable-in-cucumber-to-a-list-of-objects

		List<String> objList = nos.asList(String.class);
		String data=null;
		for (String dataTemp:objList) {
			data=dataTemp;
			hotelPageFact.getMobile().clear();
			hotelPageFact.setMobile(dataTemp);
			Thread.sleep(1000);
			hotelPageFact.setButton();
			
			if (Pattern.matches("^[7-9]{1}[0-9]{9}$",data)) {
				System.out.println("Matching ");
			} else {
				String alertMessage = driver.switchTo().alert().getText();
				Thread.sleep(1000);
				driver.switchTo().alert().accept();
				System.out.println("not matched "+alertMessage);
				
			}
		}
		hotelPageFact.setButton();
	}

	@When("^if user is not selecting city$")
	public void user_doesnot_select_city() throws Exception {
		hotelPageFact.setFname("Aravind");
		Thread.sleep(1000);
		hotelPageFact.setLname("Rajesekaran");
		Thread.sleep(1000);
		hotelPageFact.setEmail("ashok.raj@gmail.com");
		Thread.sleep(1000);
		hotelPageFact.setMobile("9894465122");
		Thread.sleep(1000);
		hotelPageFact.setCity("Select City");
		Thread.sleep(1000);
		hotelPageFact.setButton();
	}

	@When("^if user is not selecting state$")
	public void if_user_is_not_selecting_state() throws Exception {
		hotelPageFact.setFname("Aravind");
		Thread.sleep(1000);
		hotelPageFact.setLname("Rajesekaran");
		Thread.sleep(1000);
		hotelPageFact.setEmail("ashok.raj@gmail.com");
		Thread.sleep(1000);
		hotelPageFact.setCity("Chennai");
		Thread.sleep(1000);
		hotelPageFact.setState("Select State");
		Thread.sleep(1000);
		hotelPageFact.setButton();
	}

	@When("^user enters (\\d+)$")
	public void user_enters(int noOfPersons) throws Exception {
		hotelPageFact.setFname("Aravind");
		Thread.sleep(1000);
		hotelPageFact.setLname("Rajesekaran");
		Thread.sleep(1000);
		hotelPageFact.setEmail("ashok.raj@gmail.com");
		Thread.sleep(1000);
		hotelPageFact.setCity("Chennai");
		Thread.sleep(1000);
		hotelPageFact.setState("Tamilnadu");
		Thread.sleep(1000);
		hotelPageFact.setPersons(noOfPersons);
		Thread.sleep(2000);
	}

	@Then("^for (\\d+) allocate (\\d+)$")
	public void for_allocate(int guest, int rooms) throws Throwable {
		
		if (guest <= 3) {
			System.out.println("no of Rooms:" + rooms);
			assertEquals(1, rooms);
		} else if (guest <= 6) {
			System.out.println("no of Rooms:" + rooms);
			assertEquals(2, rooms);
		} else if (1 <= 9) {
			System.out.println("no of Rooms:" + rooms);
			assertEquals(3, rooms);
		}

	}
	
	@When("^user allows Card holder name empty and clicks the button$")
	public void user_leaves_Card_holder_name_empty_and_clicks_the_button() throws Exception {
		hotelPageFact.setFname("Aravind");
		Thread.sleep(1000);
		hotelPageFact.setLname("raja");
		Thread.sleep(1000);
		hotelPageFact.setEmail("aravind.r@gmail.com");
		Thread.sleep(1000);
		hotelPageFact.setMobile("9008965834");
		Thread.sleep(1000);
		hotelPageFact.setCity("Chennai");
		Thread.sleep(1000);
		hotelPageFact.setState("Tamilnadu");
		Thread.sleep(1000);
		hotelPageFact.setPersons(3);
		Thread.sleep(1000);
		hotelPageFact.setCardholder("");
		Thread.sleep(1000);
		hotelPageFact.setButton();
	}

	@When("^user allows Debit card No empty and clicks the button$")
	public void user_leaves_DebitCardNo_blank_and_clicks_the_button() throws Exception {
		hotelPageFact.setFname("Aravind");
		Thread.sleep(1000);
		hotelPageFact.setLname("Rajesekaran");
		Thread.sleep(1000);
		hotelPageFact.setEmail("aravind.r@gmail.com");
		Thread.sleep(1000);
		hotelPageFact.setMobile("9008965834");
		Thread.sleep(1000);
		hotelPageFact.setCity("Chennai");
		Thread.sleep(1000);
		hotelPageFact.setState("Tamilnadu");
		Thread.sleep(1000);
		hotelPageFact.setPersons(3);
		Thread.sleep(1000);
		hotelPageFact.setCardholder("Aneesh ");
		Thread.sleep(1000);
		hotelPageFact.setDebit("");
		Thread.sleep(1000);
		hotelPageFact.setButton();
	}

	@When("^user allows expiry month empty and clicks the button$")
	public void user_makes_expiry_month_empty_and_clicks_the_button() throws Exception {
		hotelPageFact.setFname("Aravind");
		Thread.sleep(1000);
		hotelPageFact.setLname("Rajesekaran");
		Thread.sleep(1000);
		hotelPageFact.setEmail("aravind.p@gmail.com");
		Thread.sleep(1000);
		hotelPageFact.setMobile("8787543287");
		Thread.sleep(1000);
		hotelPageFact.setCity("Chennai");
		Thread.sleep(1000);
		hotelPageFact.setState("Tamilnadu");
		Thread.sleep(1000);
		hotelPageFact.setPersons(7);
		Thread.sleep(1000);
		hotelPageFact.setCardholder("Aravind rajesekaran");
		Thread.sleep(1000);
		hotelPageFact.setDebit("7656473487654532");
		Thread.sleep(1000);
		hotelPageFact.setCvv("114");
		Thread.sleep(1000);
		hotelPageFact.setMonth("");
		Thread.sleep(1000);
		hotelPageFact.setButton();
	}

	@When("^user allows expiry year empty and clicks the button$")
	public void user_allows_expiration_year_empty_and_clicks_the_button() throws Exception {
		hotelPageFact.setFname("Aravind");
		Thread.sleep(1000);
		hotelPageFact.setLname("Rajesekaran");
		Thread.sleep(1000);
		hotelPageFact.setEmail("aravind.r@gmail.com");
		Thread.sleep(1000);
		hotelPageFact.setMobile("9008965834");
		Thread.sleep(1000);
		hotelPageFact.setCity("Chennai");
		Thread.sleep(1000);
		hotelPageFact.setState("Tamilnadu");
		Thread.sleep(1000);
		hotelPageFact.setCardholder("Aravind");
		Thread.sleep(1000);
		hotelPageFact.setDebit("7778868869899990");
		Thread.sleep(1000);
		hotelPageFact.setCvv("786");
		Thread.sleep(1000);
		hotelPageFact.setMonth("8");
		Thread.sleep(1000);
		hotelPageFact.setYear("");
		Thread.sleep(1000);
		hotelPageFact.setButton();
	}
	@When("^on user entering valid data$")
	public void on_user_entering_valid_data() throws Exception {
		hotelPageFact.setFname("Aravind");
		Thread.sleep(1000);
		hotelPageFact.setLname("rajesekaran");
		Thread.sleep(1000);
		hotelPageFact.setEmail("aravind.r@gmail.com");
		Thread.sleep(1000);
		hotelPageFact.setMobile("9803760982");
		Thread.sleep(1000);
		hotelPageFact.setCity("Chennai");
		Thread.sleep(1000);
		hotelPageFact.setState("Tamilnadu");
		Thread.sleep(1000);
		hotelPageFact.setPersons(3);
		Thread.sleep(1000);
		hotelPageFact.setCardholder("Aravind Rajesekaran");
		Thread.sleep(1000);
		hotelPageFact.setDebit("7055557507557512");
		Thread.sleep(1000);
		hotelPageFact.setCvv("456");
		Thread.sleep(1000);
		hotelPageFact.setMonth("6");
		Thread.sleep(1000);
		hotelPageFact.setYear("2025");
		driver.manage().timeouts().implicitlyWait(70, TimeUnit.SECONDS);
		hotelPageFact.setButton();
		driver.close();
	}

	@Then("^on successfull navigate to home page$")
	public void on_successfull_navigate_to_home_page() throws Exception {
		driver.navigate().to("C:\\Users\\kathirn\\Desktop\\hotelBooking\\success.html");
		driver.manage().timeouts().implicitlyWait(70, TimeUnit.SECONDS);
		driver.close();
	}

}
