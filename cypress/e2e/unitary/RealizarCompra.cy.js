describe('ActivityTest - Realizar compra', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8082/')
        cy.get('#email').type('joao@email.com')
        cy.get('#password').type('Joao1234')
        cy.get('[type="submit"]').click()
       })
   
    it("Testando realização de compra", () => {
        cy.visit('http://localhost:8082/home')
        cy.get(':nth-child(1) > table > tbody > :nth-child(2) > .buttoncar > button > a > iconify-icon').click()
        cy.get('[href="/Carbuy"]').click()
        cy.get('body > :nth-child(2) > :nth-child(2)').should('be.visible')
        cy.get(':nth-child(2) > button').click()
        cy.get('form > :nth-child(1) > input').type('0000')
        cy.get(':nth-child(2) > input').type('000')
        cy.get('#cpf').type('00000000000')
        cy.get('.cotainerButton > [type="submit"]').click()
    })
    
})
