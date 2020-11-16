

describe('GoToUrlAssertURLPositiveEnterFirstNamePositiveEnterLastNamePositiveEnterEmailPositiveEnterPass2 - {Guid="440beb7e-d430-42c9-bab5-d61bef7e3f2b"}', function() {
    it("GoToUrlAssertURLPositiveEnterFirstNamePositiveEnterLastNamePositiveEnterEmailPositiveEnterPass2", function() {
        
        cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.url().should('eq', 'https://magento.nublue.co.uk/customer/account/create/')

cy.xpath("//*[@id='firstname']").type("quam")

cy.xpath("//*[@id='lastname']").type("Auer")

cy.xpath("//*[@id='email_address']").type("james.walker@curiosity.software")

cy.xpath("//*[@id='password']").type("1oHFBfwp4_")

cy.xpath("//*[@id='password-confirmation']").type("#!_ @")

cy.get("button[class='action\\ submit\\ primary']>span").click()

    })
})

