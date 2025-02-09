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

    it('Should remove a row on the dynamic table', () => {
        cy.get('table tr').should('have.length', 1);
        cy.get('input[name="name"]').type("Testing");
        cy.get('button[type="submit"]').click();
        cy.get('div[class="toast"]').should('be.visible');
        cy.get('tr').should('be.visible');
        cy.get('table tr').should('have.length', 2);
        cy.get('.delete-row').click();
        cy.get('table tr').should('have.length', 1);
    });

    it('Should display accordion content when accordion header is clicked', () => {
        cy.get('button[class="accordion-header"]').contains("Item 1").click()
        cy.get('.accordion-content > p').should('be.visible')
    });

    it('Should have a width of 0% initially', () => {
        cy.get('#progress-bar')
            .should('have.css', 'width', '0px');
    });


    it('Should have a width greater than 0px after clicking "Update Progress"', () => {
        cy.get('#update-progress').click();

        cy.wait(500);

        cy.get('#progress-bar')
            .invoke('css', 'width')
            .then((width) => {
                const widthValue = parseFloat(width);
                expect(widthValue).to.be.greaterThan(0);
            });
    });

    it('Should fail', () => {
        cy.get('Fail')
    });

});