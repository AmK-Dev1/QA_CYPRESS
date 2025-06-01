export class Page1 {

  visit() {
    cy.visit('https://todomvc.com/examples/react/dist/');
  }

  fillTaskInput(taskName : string)
  {
    cy.xpath('//section[@class = "todoapp"]//div[@class = "input-container"]//input[contains(@placeholder, "What")]')
    .type(taskName);
  }

  clickEnter()
  {
    cy.get('body').type('{enter}');
  }

  assert(taskName : string)
  {
    cy.xpath(`//ul[@class="todo-list"]//label[contains(text(), "${taskName}")]`)
        .should('exist')
        .and('be.visible');
  }

}
