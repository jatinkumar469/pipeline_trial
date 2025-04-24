
import { accountPage } from '../support/pageObjects/accountPage';
import { contactPage } from '../support/pageObjects/contactPage';
describe("test-1",()=>{

  beforeEach(() => {
    const username = Cypress.env("SALESFORCE_USERNAME");
    const password = Cypress.env("SALESFORCE_PASSWORD");
    cy.navigateAndLoginSalesforce(username, password);
    
  });


   it("Account creation -> verification",()=>{
      cy.xpath(accountPage.accountsTab).click();
      cy.xpath(accountPage.accountnewButton).click();
      cy.xpath(accountPage.accountnextButton).click();
      cy.xpath(accountPage.accountNameInput).type("account for jatin 123 333");
      cy.xpath(accountPage.accountStatusDropdown).click();
      cy.xpath(accountPage.accountoption("Failed")).click();
      cy.xpath(accountPage.accountCurrencyDropdown).click();
      cy.xpath(accountPage.accountoption("INR")).click();
      cy.xpath(accountPage.accountbankHolderNameInput).type("oiehwfhweif");
      cy.xpath(accountPage.accountsaveButton).click();
      cy.get(accountPage.accountSuccessMessage).should('be.visible');
   })

   it.only("Account creation -> Opportuntity creation from Realted List ",()=>{
      cy.xpath(accountPage.accountsTab).should("be.visible");
      cy.xpath(accountPage.accountsTab).click();
      // cy.xpath("//a[@title='account for jatin 123 333' and @data-recordid='001J100000OtVDIIA3']").click();
      cy.xpath(accountPage.accountnewButton).should("be.visible");
      cy.xpath(accountPage.accountnewButton).click();
      cy.xpath(accountPage.accountnextButton).should("be.visible");
      cy.xpath(accountPage.accountnextButton).click();
      cy.xpath(accountPage.accountNameInput).should("be.visible");
      cy.xpath(accountPage.accountNameInput).type("account for jatin 123 333");
      cy.xpath(accountPage.accountStatusDropdown).should("be.visible")
      cy.xpath(accountPage.accountStatusDropdown).click();
      cy.xpath(accountPage.accountoption("Failed")).should("be.visible")
      cy.xpath(accountPage.accountoption("Failed")).click();
      cy.xpath(accountPage.accountCurrencyDropdown).should("be.visible");
      cy.xpath(accountPage.accountCurrencyDropdown).click();
      cy.xpath(accountPage.accountoption("INR")).should("be.visible");
      cy.xpath(accountPage.accountoption("INR")).click();
      cy.xpath(accountPage.accountbankHolderNameInput).should('be.visible');
      cy.xpath(accountPage.accountbankHolderNameInput).type("oiehwfhweif");
      cy.xpath(accountPage.accountsaveButton).should('be.visible');
      cy.xpath(accountPage.accountsaveButton).click();
      cy.get(accountPage.accountSuccessMessage).should('be.visible');
      cy.xpath(accountPage.newopportunity).should('be.visible');
      cy.xpath(accountPage.newopportunity).click();
      cy.xpath(accountPage.selectrecordtype("jetAirways")).should('be.visible'); 
      cy.xpath(accountPage.selectrecordtype("jetAirways")).click(); 
      cy.xpath(accountPage.accountnextButton).should('be.visible');
      cy.xpath(accountPage.accountnextButton).click();
      cy.xpath(accountPage.type).should('be.visible');
      cy.xpath(accountPage.type).click();
      cy.xpath(accountPage.selecttype("Existing Customer - Upgrade")).should('be.visible');
      cy.xpath(accountPage.selecttype("Existing Customer - Upgrade")).click();
      cy.xpath(accountPage.enteramount).scrollIntoView().should('be.visible');
      cy.xpath(accountPage.enteramount).type("90000");
      cy.xpath(accountPage.optyname).scrollIntoView().should('be.visible');
      cy.xpath(accountPage.optyname).type("mainininin");
      cy.xpath(accountPage.closedate).scrollIntoView().should('be.visible');
      cy.xpath(accountPage.closedate).type("25/01/2025");
      cy.xpath(accountPage.stagename).scrollIntoView().should('be.visible');
      cy.xpath(accountPage.stagename).click();
      cy.xpath(accountPage.stagedropdown("Prospecting")).should('be.visible');
      cy.xpath(accountPage.stagedropdown("Prospecting")).click();
      cy.xpath(accountPage.accountsaveButton).should('be.visible');
      cy.xpath(accountPage.accountsaveButton).click();
    });





   it("Contact creation -> adding description -> Uploading files",()=>{
        cy.xpath(contactPage.contactObject).click();
        cy.xpath(contactPage.contactNewButton).click();
        cy.xpath(contactPage.contactNameFeild).type("koopopop-1111");
        cy.xpath(contactPage.contactCreationFeild).type("rf wegoiweg");
        cy.xpath(contactPage.contactSaveButton).click();
        cy.get(contactPage.contactsuccessMessage);
        cy.xpath(contactPage.contactDetailTab).click();
        cy.xpath(contactPage.contacteditDescriptionButton).click();
        cy.xpath(contactPage.contactdescriptionTextarea).type("srogiw egwioegoiwegoiwe");
        cy.xpath(contactPage.contactSaveButton).click();
        cy.xpath(contactPage.contactRelatedTab).click();
        cy.xpath(contactPage.contactfileInput).selectFile("cypress/fixtures/sample-1.csv",{force:true});
        cy.xpath(contactPage.contactdoneButton).should("be.visible");
        cy.xpath(contactPage.contactdoneButton).should("have.text","Done");
        cy.xpath(contactPage.contactdoneButton).click();
        cy.get(contactPage.contactsuccessMessage).should('be.visible')
      })

});
  



    
  



