

describe('GoToUrlAssertURLPositiveEnterFirstNamePositiveEnterLastNameNegativeEnterEmail5 - {Guid="c6d2a2ab-9baa-4523-861a-52799cefc97e"}', function() {
    it("GoToUrlAssertURLPositiveEnterFirstNamePositiveEnterLastNameNegativeEnterEmail5", function() {
        
        cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.url().should('eq', 'https://magento.nublue.co.uk/customer/account/create/')

cy.xpath("//*[@id='firstname']").type("aut")

cy.xpath("//*[@id='lastname']").type("Hilll")

cy.xpath("//*[@id='email_address']").type("")

    })
})

