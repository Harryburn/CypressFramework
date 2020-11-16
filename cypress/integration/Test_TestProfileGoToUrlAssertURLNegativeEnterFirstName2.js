

describe('TestProfileGoToUrlAssertURLNegativeEnterFirstName2 - {Guid="d648a524-f351-441c-b7a0-6399ab9dc689"}', function() {
    it("TestProfileGoToUrlAssertURLNegativeEnterFirstName2", function() {
        
        cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.url().should('eq', 'https://magento.nublue.co.uk/customer/account/create/')

cy.xpath("//*[@id='firstname']").type("389348")

    })
})

