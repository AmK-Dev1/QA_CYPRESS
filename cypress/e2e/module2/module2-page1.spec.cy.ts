 
import { Page1 } from "../../helpers/module2/Page1";

import { page1Data } from "../../fixtures/module2/page1-data";

describe('Module 2 - Page 1 Test Form', () => {
  
  const helper = new Page1();

  it('the new task should be visible in the tasks list', () => {
    
    // Arrange
    const data = page1Data;
    
    //Act
    helper.visit();
    helper.fillTaskInput(data.taskName);
    helper.clickEnter();
    // Assert
    helper.assert(data.taskName);
  });
    
});
