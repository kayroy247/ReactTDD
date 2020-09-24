/* eslint-disable no-undef */
describe('Testing Irecharge',  () => {
    it('Test Irecharge login', () => {
      cy.visit('http://localhost:3001/')
      cy.wait(2000)
      cy.contains(/SignUp/i).should('be.disabled')

      
      cy.get('#outlined-fullname').type('Kayode Okunlade')
      cy.get('#outlined-email').type('okunladekayode@gmail.com')
      cy.get('#outlined-password').type('testingtesting')
      cy.wait(2000)
      cy.contains(/SignUp/i).should('not.be.disabled')
      
    })
  })