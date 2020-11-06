Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    debugger
    return false
})

Cypress.on('fail', (err) => {
    debugger
})



describe("GoToUrlAssertURLPositiveEnterFirstNamePositiveEnterLastNameNegativeEnterEmailClickCreateanAcco5", function() {
   it("GoToUrlAssertURLPositiveEnterFirstNamePositiveEnterLastNameNegativeEnterEmailClickCreateanAcco5", function() {
 	
 	cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.url().should('eq', 'https://magento.nublue.co.uk/customer/account/create/')

cy.xpath("//*[@id='firstname']").type("odio")

cy.xpath("//*[@id='lastname']").type("Kunze")

cy.xpath("//*[@id='email_address']").type("")

cy.get("button[class='action\\ submit\\ primary']>span").click()

   })
})

