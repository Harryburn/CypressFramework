Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    debugger
    return false
})

Cypress.on('fail', (err) => {
    debugger
})



describe("{{{ModelName}}}", function() {
   it("TestsGoToUrlAssertURLPositiveEnterFirstNameNegativeEnterLastNameClickCreateanAccount2", function() {
 	
 	cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.url().should('eq', 'https://magento.nublue.co.uk/customer/account/create/')

cy.xpath("//*[@id='firstname']").type("voluptatem")

cy.xpath("//*[@id='lastname']").type("")

cy.get("button[class='action\\ submit\\ primary']").click()

   })
})

