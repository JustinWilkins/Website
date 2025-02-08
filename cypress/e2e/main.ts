describe('Cypress Tests', () => {
    beforeEach(() => {
        cy.visit('https://justin-wilkins.netlify.app/testplayground');
    });

    it('Should load the page', () => {
        cy.get('h1').should('be.visible');
        cy.get('nav').should('exist');
    });

});