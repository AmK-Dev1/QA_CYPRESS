export class Page1 {

  visit() {
    cy.visit('https://demoqa.com/automation-practice-form');
  }


  fillFirstName(firstName : string) 
  {
    cy.get('#firstName').type(firstName)
  }

  fillLastName(lastName : string) 
  {
    cy.get('#lastName').type(lastName)
  }

  selectGender(gender : string)
  {
    switch (gender) {
        case "male":
            cy.get('label[for="gender-radio-1"]').click();
            break;
        
        case "female":
            cy.get('label[for="gender-radio-2"]').click();
            break;
        
        default:
            cy.get('label[for="gender-radio-3"]').click();
            break;
    }
  }

  fillPhone(phone : string) 
  {
    cy.get('#userNumber').type(phone)
  }


  clickButton() {
    cy.get('#submit').click();
  }

  assert()
  {
cy.get('#example-modal-sizes-title-lg')
  .should('contain.text', 'Thanks');  }

}
