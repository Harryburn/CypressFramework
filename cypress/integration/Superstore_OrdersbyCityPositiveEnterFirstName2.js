Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    debugger
    return false
})

Cypress.on('fail', (err) => {
    debugger
})



describe("OrdersbyCityPositiveEnterFirstName2", function() {
   it("OrdersbyCityPositiveEnterFirstName2", function() {
 	
 	cy.xpath("//*[@id='firstname']").type("")

   })
})

