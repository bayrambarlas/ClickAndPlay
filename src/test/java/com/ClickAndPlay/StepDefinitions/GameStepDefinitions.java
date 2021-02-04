package com.ClickAndPlay.StepDefinitions;

import com.ClickAndPlay.GameBase.BasePage;
import com.ClickAndPlay.Utilities.BrowserUtils;
import com.ClickAndPlay.Utilities.ConfigurationReader;
import com.ClickAndPlay.Utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Alert;

import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;


public class GameStepDefinitions {

    BasePage basePage = new BasePage();

    @Given("playground {string}")
    public void playground(String URL) {
        Driver.get().get(URL);
    }

    @When("click the all outer cells on the grid, do not click the inner cells")
    public void click_the_all_outer_cells_on_the_grid_do_not_click_the_inner_cells() {
        basePage.clickOuterCells();
    }

    @And("the pop-box should open with a display message")
    public void the_pop_box_should_open_with_a_display_message() {
        basePage.getText();
    }

    @Then("enter a {string} start the game again with a new size of grid")
    public void enter_a_start_the_game_again_with_a_new_size_of_grid(String value) {
        Alert alert = Driver.get().switchTo().alert(); // switch to alert
        alert.sendKeys(value);
    }

    @When("click the all outer and the inner cells on the grid")
    public void clickTheAllOuterAndTheInnerCellsOnTheGrid() {
        basePage.clickTheAllCells();
    }

    @Then("the pop-box should NOT open with a display message")
    public void thePopBoxShouldNOTOpenWithADisplayMessage() {
        basePage.getText();
    }

    @Then("enter a number out of boundary")
    public void enterANumberOutOfBoundary() {
        basePage.enterInvalidNumber();
    }



    @Then("enter a random characters in the pop up box")
    public void enterARandomCharactersInThePopUpBox() {

        basePage.enterRandom();
    }


    @Then("the NOTIFY message Not a good size! should appear in the pop up box")
    public void theNOTIFYMessageNotAGoodSizeShouldAppearInThePopUpBox() {

        basePage.getText();
    }
}
