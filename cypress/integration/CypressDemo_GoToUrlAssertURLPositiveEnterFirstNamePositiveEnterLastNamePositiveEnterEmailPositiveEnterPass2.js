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
   it("GoToUrlAssertURLPositiveEnterFirstNamePositiveEnterLastNamePositiveEnterEmailPositiveEnterPass2", function() {
 	
 	cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.url().should('eq', 'https://magento.nublue.co.uk/customer/account/create/')

cy.xpath("//*[@id='firstname']").type("Hardcoded")

cy.xpath("//*[@id='lastname']").type(" DataGen.Name.LastName()")

cy.xpath("//*[@id='email_address']").type("james.walker@curiosity.software")

cy.xpath("//*[@id='password']").type("DataGen.Internet.Password()")

cy.xpath("//*[@id='password-confirmation']").type(""#!_ @"")

   })
})

