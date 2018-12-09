package features;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RegisterPageFact {
	
	WebDriver wd=null;
	
	RegisterPageFact(){}
	
public RegisterPageFact(WebDriver wd) {
	this.wd=wd;
	PageFactory.initElements(wd, this);
}
	
	@FindBy(name="txtFN")
	WebElement name;
	@FindBy(xpath="//*[@id=\"btn\"]")
	WebElement button;
	
	

	public WebElement getButton() {
		return button;
	}

	public void setButton() {
		button.click();
	}

	public WebElement getName() {
		return name;
	}

	public void setName(String name) {
		this.name.sendKeys(name);
		System.out.println("value inside the text box is "+this.name.getText());
		//try getattribute also
	}
	
	
	
}
