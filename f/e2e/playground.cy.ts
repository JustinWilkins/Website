describe('Cypress Tests', () => {
    beforeEach(() => {
        cy.visit('https://justin-wilkins.netlify.app');
    });

    it('Should load the page', () => {
        cy.get('h1').should('be.visible');
        cy.get('nav').should('exist');
        cy.get('a').should('have.length', 3)
            .first()
            .should('have.attr', 'href')
            .and('not.be.empty');
    });

    it('Should add a row to the table if form is submitted successfully', () => {
        cy.get('input[name="name"]').type("Justin Wilkins");
        cy.get('button[type="submit"]').click();



    });


});