Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    debugger
    return false
})

Cypress.on('fail', (err) => {
    debugger
})



describe("GoToUrlAssertURLPositiveEnterFirstNamePositiveEnterLastNameNegativeEnterEmail4", function() {
   it("GoToUrlAssertURLPositiveEnterFirstNamePositiveEnterLastNameNegativeEnterEmail4", function() {
 	
 	cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.url().should('eq', 'https://magento.nublue.co.uk/customer/account/create/')

cy.xpath("//*[@id='firstname']").type("dolores")

cy.xpath("//*[@id='lastname']").type("Buckridge")

cy.xpath("//*[@id='email_address']").type("james.walker")

   })
})

