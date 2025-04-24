/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>
import testData from "../fixtures/salesforceTestData.json";
Cypress.Commands.add("navigateAndLoginSalesforce", (username, password) => {
  const requestBody = testData.requestBodyForSalesforceLogin;
  requestBody.un=username;
  requestBody.pw=password;
  cy.session("SalesforceLogin", () => {
    cy.request({

      body: requestBody,
      form: true,
      method: "POST",
      url: "https://login.salesforce.com/",
    });
  });
  // cy.wait(2000);
  cy.visit("https://aethereus-1f-dev-ed.develop.lightning.force.com/lightning/page/home");
});





