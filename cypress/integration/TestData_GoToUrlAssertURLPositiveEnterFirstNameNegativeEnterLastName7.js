

describe('GoToUrlAssertURLPositiveEnterFirstNameNegativeEnterLastName7 - {Guid="fb5c4fdc-0dbb-496d-957e-12ad7e6d1c40"}', function() {
    it("GoToUrlAssertURLPositiveEnterFirstNameNegativeEnterLastName7", function() {
        
        cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.url().should('eq', 'https://magento.nublue.co.uk/customer/account/create/')

cy.xpath("//*[@id='firstname']").type("aut")

cy.xpath("//*[@id='lastname']").type("#!_ @")

    })
})

