package hotelbookinglogin;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class HotelLoginPageFactory {
/*
	@FindBys({
		@FindBy(how = How.NAME, using = "username"),
		@FindBy(how = How.NAME, using = "password")
	})
	@FindAll({
	@FindBy(how = How.NAME, using = "username"),
	@FindBy(how = How.NAME, using = "password")
})
	*/
WebDriver wd=null;
//initiating the elements
	public HotelLoginPageFactory(WebDriver webdriver) {
		this.wd = webdriver;
		PageFactory.initElements(webdriver, this);
	}
	@FindBy(name="userName")
	@CacheLookup
	WebElement uName;

	
	@FindBy(how=How.NAME, using="userPwd")
	@CacheLookup
	WebElement pwd;

	@FindBy(className="btn")
	@CacheLookup
	WebElement login;
	
	
			//setters
			public void setuName(String uNameTemp) {
				uName.sendKeys(uNameTemp);
			}
			
			public void setPwd(String pwdTemp) {
				pwd.sendKeys(pwdTemp);
			}
			public void setLogin() {
				login.click();
			}

			public WebElement getuName() {
				return uName;
			}

			public WebElement getPwd() {
				return pwd;
			}
			
}
