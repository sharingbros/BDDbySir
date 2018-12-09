package com.cg.demo;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class DemoPageFact {
	WebDriver wd;

	public DemoPageFact() {
		super();
	
	}

	public DemoPageFact(WebDriver wd) {
		
		this.wd = wd;
		PageFactory.initElements(wd, this);
	}
	
	@FindBy(id="txtName")
	@CacheLookup
	WebElement fname;
	
	@FindBy(id="txtEmail")
	@CacheLookup
	WebElement email;
	
	
	@FindBy(id="txtPhone")
	@CacheLookup
	WebElement mobile;
	
	@FindBy(name="address")
	@CacheLookup
	WebElement address;
	
	@FindBy(id="male")
	@CacheLookup
	WebElement gender1;
	
	@FindBy(id="female")
	@CacheLookup
	WebElement gender2;
	
	@FindBy(id="btnRegister")
	@CacheLookup
	WebElement button;
	@FindBy(name="city")
	@CacheLookup
	WebElement city;

	public WebElement getCity() {
		return city;
	}

	public void setCity(int i) {
		Select select = new Select(city);
		select.selectByIndex(i);
	}

	public WebElement getFname() {
		return fname;
	}

	public void setFname(String fname1) {
		
		this.fname.sendKeys(fname1);
	}

	public WebElement getEmail() {
		return email;
	}

	public void setEmail(String email1) {
		this.email.sendKeys(email1);
	}

	public WebElement getMobile() {
		return mobile;
	}

	public void setMobile(String tempMobile) {
		mobile.sendKeys(tempMobile);
	}

	public WebElement getAddress() {
		return address;
	}

	public void setAddress(String tempAddress) {
	address.sendKeys(tempAddress);
	}

	public WebElement getGender1() {
		return gender1;
	}

	public void setGender1() {
		this.gender1.click();
	}

	public WebElement getGender2() {
		return gender2;
	}

	public void setGender2() {
		this.gender2.click();
	}

	public WebElement getButton() {
		return button;
	}

	public void setButton() {
		this.button.click();
	}
	
}
