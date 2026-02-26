
describe('Employee List Page', () => {

  it('should load the page', () => {
    cy.visit('/employees');

    cy.wait(2000);

    cy.contains('Employee Directory').should('exist');
  });

  it('should display employees', () => {

    cy.get('.employee-item').should('have.length', 9);

  });

  it('should navigate to employee detail', () => {
    cy.visit('/employees');

    cy.get('.employee-link').first().click();

    cy.wait(1000);

    cy.url().should('include', '/employees/');
  });

  it('should show employee count', () => {
    cy.visit('/employees');

    cy.get('.employee-count').should('contain', '(9 employees)');
  });

});

