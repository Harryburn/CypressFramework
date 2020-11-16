

describe('GoToUrlAssertURLPositiveEnterFirstNamePositiveEnterLastNamePositiveEnterEmailPositiveEnterPass1 - {Guid="07a4c11d-4352-44a7-96a8-9c2472b7f83e"}', function() {
    it("GoToUrlAssertURLPositiveEnterFirstNamePositiveEnterLastNamePositiveEnterEmailPositiveEnterPass1", function() {
        
        cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.url().should('eq', 'https://magento.nublue.co.uk/customer/account/create/')

cy.xpath("//*[@id='firstname']").type("sit")

cy.xpath("//*[@id='lastname']").type("Hettinger")

cy.xpath("//*[@id='email_address']").type("james.walker@curiosity.software")

cy.xpath("//*[@id='password']").type("YRXUXQhyyq")

cy.xpath("//*[@id='password-confirmation']").type("SQUbWPGdEx")

cy.get("button[class='action\\ submit\\ primary']>span").click()

    })
})

