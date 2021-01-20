@laimute
Feature:

  @malunas
  Scenario: Player properly complete the grid

    Given open the url on Chrome web browser
    When click the all outer cells on the grid, do not click the inner cells
    And the pop-box should open with a display message
    Then enter a valid number in boundary to start again with a new size of grid



  @veles
  Scenario: Player clicks all the cells on the grid

    Given open the url on Chrome web browser
    When click the all outer and the inner cells on the grid
    And the pop-box should NOT open with a display message


  @perkunas
  Scenario: Player enters a number out of boundary

    Given open the url on Chrome web browser
    When click the all outer cells on the grid, do not click the inner cells
    And the pop-box should open with a display message
    Then enter a number out of boundary
    Then the NOTIFY message ""Not a good size!"" should appear in the pop up box

  @bubilas
  Scenario: Player enters a random characters

    Given open the url on Chrome web browser
    When click the all outer cells on the grid, do not click the inner cells
    And the pop-box should open with a display message
    Then enter a random characters in the pop up box
    Then the NOTIFY message ""Not a good size!"" should appear in the pop up box


