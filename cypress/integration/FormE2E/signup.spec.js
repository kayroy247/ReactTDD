describe('Testing Irecharge',  () => {
    it('Test Irecharge login', () => {
      cy.visit('https://irecharge.com.ng')
      cy.wait(2000)
      cy.contains("Login").click()
      cy.get('.phone').type('okunladekayode@gmail.com')
      cy.get('#password').type('notnewtome')
      cy.wait(2000)
      cy.get("#loginBtn").click()
    })
  })