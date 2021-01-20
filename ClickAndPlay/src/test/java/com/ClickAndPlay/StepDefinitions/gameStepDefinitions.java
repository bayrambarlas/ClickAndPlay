package com.ClickAndPlay.StepDefinitions;

import com.ClickAndPlay.GameBase.BasePage;
import com.ClickAndPlay.Utilities.BrowserUtils;
import com.ClickAndPlay.Utilities.ConfigurationReader;
import com.ClickAndPlay.Utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;


public class gameStepDefinitions {

    @Given("open the url on Chrome web browser")
    public void open_the_url_on_Chrome_web_browser() {
        Driver.get().get(ConfigurationReader.get("url"));
        Driver.get().manage().window().maximize();
    }

    @When("click the all outer cells on the grid, do not click the inner cells")
    public void click_the_all_outer_cells_on_the_grid_do_not_click_the_inner_cells() {

        BasePage basePage = new BasePage();
        basePage.clickOuterCells();

    }

    @When("the pop-box should open with a display message")
    public void the_pop_box_should_open_with_a_display_message() {

        BasePage basePage = new BasePage();
        basePage.getText();
        
    }

    @Then("enter a valid number in boundary to start again with a new size of grid")
    public void enter_a_valid_number_in_boundary_to_start_again_with_a_new_size_of_grid() {
        BasePage basePage = new BasePage();
        basePage.enterValidNumber();
        basePage.clickOK();
    }

    @When("click the all outer and the inner cells on the grid")
    public void click_the_all_outer_and_the_inner_cells_on_the_grid() {
        BasePage basePage = new BasePage();
        basePage.clickTheAllCells();
    }

    @When("the pop-box should NOT open with a display message")
    public void the_pop_box_should_NOT_open_with_a_display_message() {
        BasePage basePage = new BasePage();
        //add here a screen shoot

    }
    @Then("enter a number out of boundary")
    public void enter_a_number_out_of_boundary() {
        BasePage basePage = new BasePage();
        basePage.enterInvalidNumber();
        basePage.clickOK();
    }

    @Then("the NOTIFY message {string}Not a good size!{string} should appear in the pop up box")
    public void the_NOTIFY_message_Not_a_good_size_should_appear_in_the_pop_up_box(String string, String string2) {
        BasePage basePage = new BasePage();
        Assert.assertEquals("Not a good size!", basePage.getText());
    }

    @Then("enter a random characters in the pop up box")
    public void enter_a_random_characters_in_the_pop_up_box() {
        BasePage basePage = new BasePage();
        basePage.enterRandom();
        basePage.clickOK();
        Assert.assertEquals("Not a good size!", basePage.getText());
    }

}
