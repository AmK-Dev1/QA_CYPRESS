import { Page1 } from '../../helpers/module1/Page1';
import { page1Data } from '../../fixtures/module1/page1-data';

describe('Module 1 - Page 1 Test Form', () => {
  
  const page = new Page1();

  it('should submit form successfully', () => {
    
    // Arrange
    const data = page1Data;
    
    //Act
    page.visit();
    page.fillFirstName(data.firstName);
    page.fillLastName(data.lastName);
    page.selectGender(data.gender);
    page.fillPhone(data.phone);
    page.clickButton();

    // Assert
    page.assert();
  });
    
});
