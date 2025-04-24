import { opportunityPage } from '../support/pageObjects/opportunityPage';
describe("opportunty creation and validations",()=>{
    beforeEach(() => {
        const username = Cypress.env("SALESFORCE_USERNAME");
        const password = Cypress.env("SALESFORCE_PASSWORD");
        cy.navigateAndLoginSalesforce(username, password);
        
      });

      it("testcase",()=>{
         cy.xpath(opportunityPage.applauncher_button).scrollIntoView().should("be.visible");
         cy.xpath(opportunityPage.applauncher_button).click();
         cy.xpath(opportunityPage.search_box).scrollIntoView().should("be.visible");
         cy.xpath(opportunityPage.search_box).type("opportunities{enter}");
        //  cy.xpath(opportunityPage.new_opportunity).scrollIntoView().should("be.visible");
         cy.xpath(opportunityPage.new_opportunity).click({force:true});
         cy.xpath(opportunityPage.next_button).scrollIntoView().should("be.visible");
         cy.xpath(opportunityPage.next_button).click();

         cy.xpath(opportunityPage.opportunity_accountname).scrollIntoView().should("be.visible");
         cy.xpath(opportunityPage.opportunity_accountname).click().type("account");
         
        //  cy.xpath(opportunityPage.opportunity_accountname_select).type("account");
         cy.xpath(opportunityPage.opportunity_accountname_lookup).click();
  



      })
})