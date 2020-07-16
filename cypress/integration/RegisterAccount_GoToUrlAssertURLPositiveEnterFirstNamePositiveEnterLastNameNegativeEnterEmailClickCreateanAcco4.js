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
   it("GoToUrlAssertURLPositiveEnterFirstNamePositiveEnterLastNameNegativeEnterEmailClickCreateanAcco4", function() {
 	
 	cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.url().should('eq', 'https://magento.nublue.co.uk/customer/account/create/')

cy.xpath("//*[@id='firstname']").type("ratione")

cy.xpath("//*[@id='lastname']").type("Lind")

cy.xpath("//*[@id='email_address']").type("james.walker")

cy.xpath("	//BUTTON[@class='action submit primary']/SPAN").click()

   })
})

