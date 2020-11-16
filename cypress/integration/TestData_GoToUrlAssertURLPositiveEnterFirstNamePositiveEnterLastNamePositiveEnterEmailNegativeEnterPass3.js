

describe('GoToUrlAssertURLPositiveEnterFirstNamePositiveEnterLastNamePositiveEnterEmailNegativeEnterPass3 - {Guid="6456b68e-7a45-4f6a-b112-31b815e07050"}', function() {
    it("GoToUrlAssertURLPositiveEnterFirstNamePositiveEnterLastNamePositiveEnterEmailNegativeEnterPass3", function() {
        
        cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.url().should('eq', 'https://magento.nublue.co.uk/customer/account/create/')

cy.xpath("//*[@id='firstname']").type("nisi")

cy.xpath("//*[@id='lastname']").type("Kautzer")

cy.xpath("//*[@id='email_address']").type("james.walker@curiosity.software")

cy.xpath("//*[@id='password']").type("#!_ @")

    })
})

