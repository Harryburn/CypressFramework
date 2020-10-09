Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    debugger
    return false
})

Cypress.on('fail', (err) => {
    debugger
})



describe("GoToUrlAssertURLPositiveEnterFirstNamePositiveEnterLastNameNegativeEnterEmail5", function() {
   it("GoToUrlAssertURLPositiveEnterFirstNamePositiveEnterLastNameNegativeEnterEmail5", function() {
 	
 	cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.url().should('eq', 'https://magento.nublue.co.uk/customer/account/create/')

cy.xpath("//*[@id='firstname']").type("voluptas")

cy.xpath("//*[@id='lastname']").type("Johnston")

cy.xpath("//*[@id='email_address']").type("")

   })
})

