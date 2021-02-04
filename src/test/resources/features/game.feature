@laimute
Feature:
  @marcus
  Scenario Outline: Player trying different numbers to complete the grid

    Given playground "<URL>"
    When click the all outer cells on the grid, do not click the inner cells
    And the pop-box should open with a display message
    Then enter a "<value>" start the game again with a new size of grid

    Examples:
      | URL                                                                 | value |
      | file:///C:/Users/wcc-2/Downloads/QA%20Task.html?width=3&height=3    | 4     |
      | file:///C:/Users/wcc-2/Downloads/QA%20Task.html?width=4&height=4    | 5     |
      | file:///C:/Users/wcc-2/Downloads/QA%20Task.html?width=5&height=5    | 6     |
      | file:///C:/Users/wcc-2/Downloads/QA%20Task.html?width=6&height=6    | 7     |
      | file:///C:/Users/wcc-2/Downloads/QA%20Task.html?width=7&height=7    | 8     |
      | file:///C:/Users/wcc-2/Downloads/QA%20Task.html?width=8&height=8    | 9     |



  @veles
  Scenario: Player clicks all the cells on the grid

    When click the all outer and the inner cells on the grid
    Then the pop-box should NOT open with a display message


  @perkunas
  Scenario: Player enters a number out of boundary

    When click the all outer cells on the grid, do not click the inner cells
    And the pop-box should open with a display message
    Then enter a number out of boundary
    Then the NOTIFY message Not a good size! should appear in the pop up box

  @bubilas
  Scenario: Player enters a random characters

    When click the all outer cells on the grid, do not click the inner cells
    And the pop-box should open with a display message
    Then enter a random characters in the pop up box
    Then the NOTIFY message Not a good size! should appear in the pop up box
