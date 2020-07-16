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
   it("GoToUrlAssertURLPositiveEnterFirstNamePositiveEnterLastNamePositiveEnterEmailPositiveEnterPass3", function() {
 	
 	cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.url().should('eq', 'https://magento.nublue.co.uk/customer/account/create/')

cy.xpath("//*[@id='firstname']").type("ipsa")

cy.xpath("//*[@id='lastname']").type("Friesen")

cy.xpath("//*[@id='email_address']").type("james.walker@curiosity.software")

cy.xpath("//*[@id='password']").type("LyXGfDFrj5")

cy.xpath("//*[@id='password-confirmation']").type("#!_ @")

cy.xpath("	//BUTTON[@class='action submit primary']/SPAN").click()

   })
})

