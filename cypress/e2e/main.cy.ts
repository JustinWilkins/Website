describe('Cypress Tests', () => {
    beforeEach(() => {
        cy.visit('https://justin-wilkins.netlify.app/testplayground');
    });

    it('Should load the page', () => {
        cy.get('h1').should('be.visible');
        cy.get('nav').should('exist');
    });

    it('Should input a row on the dynamic table', () => {
        cy.get('input[name="name"]').type("Testing")
        cy.get('button[type="submit"]').click()
        cy.get('div[class="toast"]').should('be.visible')
        cy.get('tr').should('be.visible')
    });

    it('Should display accordion content when accordion header is clicked', () => {
        cy.get('button[class="accordion-header"]').contains("Item 1").click()
        cy.get('div[class="accordion-content"]').should('be.visible').contains("This is the content of Item 1.")
    });

    it('Should fail', () => {
        cy.get('Fail')
    });

});