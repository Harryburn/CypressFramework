

describe('TestProfileGoToUrlAssertURLPositiveEnterFirstName1 - {Guid="bd6c4b0b-04c4-4c2f-a937-86fe7bc7cbcd"}', function() {
    it("TestProfileGoToUrlAssertURLPositiveEnterFirstName1", function() {
        
        cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.url().should('eq', 'https://magento.nublue.co.uk/customer/account/create/')

cy.xpath("//*[@id='firstname']").type("quibusdam")

    })
})

