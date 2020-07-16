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
   it("GoToUrlAssertURLPositiveEnterFirstNamePositiveEnterLastNameNegativeEnterEmailClickCreateanAcco1", function() {
 	
 	cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.url().should('eq', 'https://magento.nublue.co.uk/customer/account/create/')

cy.xpath("//*[@id='firstname']").type("rerum")

cy.xpath("//*[@id='lastname']").type("Hartmann")

cy.xpath("//*[@id='email_address']").type("")

cy.xpath("	//BUTTON[@class='action submit primary']/SPAN").click()

cy.xpath("//*[@id='email_address-error']").should('exist')

   })
})

