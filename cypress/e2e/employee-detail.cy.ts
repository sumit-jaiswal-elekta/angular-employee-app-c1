describe('Employee Detail Page', () => {
  it('shows employee details', () => {
    cy.visit('/employees/1');


    cy.contains('John').should('be.visible');
    cy.contains('Doe').should('be.visible');
    cy.contains('john.doe@company.com').should('be.visible');

    cy.get('a').contains('Back to List').should('exist');
  });


  it('navigates back to list', () => {
    cy.visit('/employees/1');

    cy.get('a').contains('Back to List').click();

  });
});
