

describe('GoToUrlAssertURLPositiveEnterFirstNamePositiveEnterLastNameNegativeEnterEmail4 - {Guid="d73825cb-3364-460f-9cd1-f0195bc6d704"}', function() {
    it("GoToUrlAssertURLPositiveEnterFirstNamePositiveEnterLastNameNegativeEnterEmail4", function() {
        
        cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.url().should('eq', 'https://magento.nublue.co.uk/customer/account/create/')

cy.xpath("//*[@id='firstname']").type("dolores")

cy.xpath("//*[@id='lastname']").type("Ziemann")

cy.xpath("//*[@id='email_address']").type("james.walker")

    })
})

