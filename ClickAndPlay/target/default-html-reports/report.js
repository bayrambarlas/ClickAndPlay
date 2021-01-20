$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/game.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@laimute"
    }
  ]
});
formatter.scenario({
  "name": "Player properly complete the grid",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@laimute"
    },
    {
      "name": "@malunas"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "open the url on Chrome web browser",
  "keyword": "Given "
});
formatter.match({
  "location": "gameStepDefinitions.open_the_url_on_Chrome_web_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the all outer cells on the grid, do not click the inner cells",
  "keyword": "When "
});
formatter.match({
  "location": "gameStepDefinitions.click_the_all_outer_cells_on_the_grid_do_not_click_the_inner_cells()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the pop-box should open with a display message",
  "keyword": "And "
});
formatter.match({
  "location": "gameStepDefinitions.the_pop_box_should_open_with_a_display_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter a valid number in boundary to start again with a new size of grid",
  "keyword": "Then "
});
formatter.match({
  "location": "gameStepDefinitions.enter_a_valid_number_in_boundary_to_start_again_with_a_new_size_of_grid()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Player clicks all the cells on the grid",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@laimute"
    },
    {
      "name": "@veles"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "open the url on Chrome web browser",
  "keyword": "Given "
});
formatter.match({
  "location": "gameStepDefinitions.open_the_url_on_Chrome_web_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the all outer and the inner cells on the grid",
  "keyword": "When "
});
formatter.match({
  "location": "gameStepDefinitions.click_the_all_outer_and_the_inner_cells_on_the_grid()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the pop-box should NOT open with a display message",
  "keyword": "And "
});
formatter.match({
  "location": "gameStepDefinitions.the_pop_box_should_NOT_open_with_a_display_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Player enters a number out of boundary",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@laimute"
    },
    {
      "name": "@perkunas"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "open the url on Chrome web browser",
  "keyword": "Given "
});
formatter.match({
  "location": "gameStepDefinitions.open_the_url_on_Chrome_web_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the all outer cells on the grid, do not click the inner cells",
  "keyword": "When "
});
formatter.match({
  "location": "gameStepDefinitions.click_the_all_outer_cells_on_the_grid_do_not_click_the_inner_cells()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the pop-box should open with a display message",
  "keyword": "And "
});
formatter.match({
  "location": "gameStepDefinitions.the_pop_box_should_open_with_a_display_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter a number out of boundary",
  "keyword": "Then "
});
formatter.match({
  "location": "gameStepDefinitions.enter_a_number_out_of_boundary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the NOTIFY message \"\"Not a good size!\"\" should appear in the pop up box",
  "keyword": "Then "
});
formatter.match({
  "location": "gameStepDefinitions.the_NOTIFY_message_Not_a_good_size_should_appear_in_the_pop_up_box(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Player enters a random characters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@laimute"
    },
    {
      "name": "@bubilas"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "open the url on Chrome web browser",
  "keyword": "Given "
});
formatter.match({
  "location": "gameStepDefinitions.open_the_url_on_Chrome_web_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the all outer cells on the grid, do not click the inner cells",
  "keyword": "When "
});
formatter.match({
  "location": "gameStepDefinitions.click_the_all_outer_cells_on_the_grid_do_not_click_the_inner_cells()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the pop-box should open with a display message",
  "keyword": "And "
});
formatter.match({
  "location": "gameStepDefinitions.the_pop_box_should_open_with_a_display_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter a random characters in the pop up box",
  "keyword": "Then "
});
formatter.match({
  "location": "gameStepDefinitions.enter_a_random_characters_in_the_pop_up_box()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoAlertPresentException: no such alert\n  (Session info: chrome\u003d87.0.4280.141)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BAIRO\u0027, ip: \u0027192.168.1.228\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_282\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\wcc-2\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54914}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 4454119ada63c2321d1f5ae2b4b93aef\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.alert(RemoteWebDriver.java:932)\r\n\tat com.ClickAndPlay.GameBase.BasePage.getText(BasePage.java:52)\r\n\tat com.ClickAndPlay.StepDefinitions.gameStepDefinitions.enter_a_random_characters_in_the_pop_up_box(gameStepDefinitions.java:74)\r\n\tat ✽.enter a random characters in the pop up box(file:src/test/resources/features/game.feature:37)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the NOTIFY message \"\"Not a good size!\"\" should appear in the pop up box",
  "keyword": "Then "
});
formatter.match({
  "location": "gameStepDefinitions.the_NOTIFY_message_Not_a_good_size_should_appear_in_the_pop_up_box(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});