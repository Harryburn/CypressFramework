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
   it("GoToUrlAssertURLPositiveEnterFirstNamePositiveEnterLastNamePositiveEnterEmailPositiveEnterPass1", function() {
 	
 	cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.url().should('eq', 'https://magento.nublue.co.uk/customer/account/create/')

cy.xpath("//*[@id='firstname']").type("Hardcoded")

cy.xpath("//*[@id='lastname']").type("Schamberger")

cy.xpath("//*[@id='email_address']").type("james.walker@curiosity.software")

cy.xpath("//*[@id='password']").type("gwYZK7NEQE")

cy.xpath("//*[@id='password-confirmation']").type("n1zCi6Z2Ss")

cy.xpath("	//BUTTON[@class='action submit primary']/SPAN").click()

   })
})

