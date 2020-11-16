

describe('GoToUrlAssertURLNegativeEnterFirstName8 - {Guid="c84e9484-434c-4188-9d66-0194ee25392c"}', function() {
    it("GoToUrlAssertURLNegativeEnterFirstName8", function() {
        
        cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.url().should('eq', 'https://magento.nublue.co.uk/customer/account/create/')

cy.xpath("//*[@id='firstname']").type("389348")

    })
})

