Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    debugger
    return false
})

Cypress.on('fail', (err) => {
    debugger
})



describe("OrdersbyCityPositiveEnterFirstName3", function() {
   it("OrdersbyCityPositiveEnterFirstName3", function() {
 	
 	cy.xpath("//*[@id='firstname']").type("")

   })
})

