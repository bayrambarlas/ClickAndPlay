package com.ClickAndPlay.GameBase;

import com.ClickAndPlay.Utilities.BrowserUtils;
import com.ClickAndPlay.Utilities.Driver;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class BasePage {

    public BasePage() {

        PageFactory.initElements(Driver.get(), this);

    }

    public void clickOuterCells(){

        List<WebElement> allRows = Driver.get().findElements(By.xpath("//div[@class='mainGrid']/div"));

        for (int i = 0; i <allRows.size(); i++){

            if (i==0 || i==allRows.size()-1){

                for (int j = 0; j<allRows.size(); j++){
                    String columnsXpath = "(//div[@class='mainGrid']/div)["+ (i+1) +"]/div[@class='icon'][" + (j+1) + "]";
                    WebElement singleColumn = Driver.get().findElement(By.xpath(columnsXpath));
                    singleColumn.click();

                }
            }
            else if (i!=0 || i!= allRows.size()-1){

                for (int j = 0; j<allRows.size(); j++){

                    if (j==0 || j==allRows.size()-1){

                        String columnsXpath = "(//div[@class='mainGrid']/div)["+ (i+1) +"]/div[@class='icon'][" + (j+1) + "]";
                        WebElement singleColumn = Driver.get().findElement(By.xpath(columnsXpath));
                        singleColumn.click();
                    }
                }
            }
        }
    }

    public String getText() {

        Alert alert = Driver.get().switchTo().alert(); // switch to alert

        String alertMessage= Driver.get().switchTo().alert().getText(); // capture alert message

        System.out.println(alertMessage); // Print Alert Message
        BrowserUtils.waitFor(1);
        return alertMessage;
    }

    public void enterValidNumber() {

        Alert alert = Driver.get().switchTo().alert(); // switch to alert

        alert.sendKeys("3");
    }

    public void enterInvalidNumber() {

        Alert alert = Driver.get().switchTo().alert(); // switch to alert

        alert.sendKeys("10");
    }

    public void enterRandom() {

        Alert alert = Driver.get().switchTo().alert(); // switch to alert

        alert.sendKeys("*");
    }

    public void clickOK() {

        Alert alert = Driver.get().switchTo().alert(); // switch to alert

        alert.accept();
    }

    public void clickTheAllCells(){
        List<WebElement> allRows = Driver.get().findElements(By.xpath("//div[@class='mainGrid']/div"));

        for (int i = 0; i <allRows.size(); i++){

                for (int j = 0; j<allRows.size(); j++){
                    String columnsXpath = "(//div[@class='mainGrid']/div)["+ (i+1) +"]/div[@class='icon'][" + (j+1) + "]";
                    WebElement singleColumn = Driver.get().findElement(By.xpath(columnsXpath));
                    singleColumn.click();

                }
                }
            }
        }





