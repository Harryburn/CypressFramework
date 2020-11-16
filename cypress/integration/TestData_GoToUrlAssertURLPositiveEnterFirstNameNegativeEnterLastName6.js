

describe('GoToUrlAssertURLPositiveEnterFirstNameNegativeEnterLastName6 - {Guid="256dbbbf-6bcf-47fa-ad23-1932053c9f9d"}', function() {
    it("GoToUrlAssertURLPositiveEnterFirstNameNegativeEnterLastName6", function() {
        
        cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.url().should('eq', 'https://magento.nublue.co.uk/customer/account/create/')

cy.xpath("//*[@id='firstname']").type("voluptas")

cy.xpath("//*[@id='lastname']").type("")

    })
})

