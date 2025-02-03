describe('Home Tests', () => {

    beforeEach(() => {
        cy.visit('https://justin-wilkins.netlify.app');
    });

    it('Should load the homepage', () => {
        cy.get('h1').should('be.visible');
        cy.get('nav').should('exist');
        cy.get('a').should('have.length', 3)
            .first()
            .should('have.attr', 'href')
            .and('not.be.empty');
    });


    it('Should have a title that contains Justin Wilkins', () => {
        cy.get('h1')
            .should('have.length', 1)
            .should('contain', 'Justin Wilkins');
    });

    it('Should have a welcome message', () => {
        cy.get('.home-section')
            .should('have.length', 1)
            .should('contain', 'Welcome');
    });

    it('Should have a results section', () => {
        cy.get('.results-section')
            .should('have.length', 1)
            .should('contain', 'Results');
    });

});