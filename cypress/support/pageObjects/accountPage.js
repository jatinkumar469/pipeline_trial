class AccountPage {
    
    accountsTab = "//span[normalize-space()='Accounts']";
    accountnewButton = "//a[@title='New']";
    accountnextButton = "//span[normalize-space()='Next']";
    accountNameInput = "//input[@class='slds-input' and @name='Name']";
    accountStatusDropdown = "//button[@aria-label='Account Status']";
    accountCurrencyDropdown = "//button[@aria-label='Account Currency']";
    accountbankHolderNameInput = '//input[@name="Bank_Holder_Name__c"]';
    accountsaveButton = '//button[@name="SaveEdit"]';
    accountSuccessMessage = '.slds-theme--success';
    newopportunity="//button[@name='New']";
    optyname="//input[@class='slds-input' and @name='Name']";
    closedate="//input[@class='slds-input' and @name='CloseDate']";
    stagename="//button[@aria-label='Stage' and @type='button']"
    enteramount="//input[@class='slds-input' and @name='Amount']";
    type="//button[@aria-label='Type' and @type='button']";

  
    accountoption(name){
      return `//lightning-base-combobox-item[@data-value='${name}']`
    }
    selectrecordtype(name){
      return `//span[normalize-space()='${name}']`
    }
    selecttype(name){
      return `//lightning-base-combobox-item[@data-value='${name}']`
    }
    stagedropdown(name){
      return `//lightning-base-combobox-item[@data-value='${name}']`
    }

  }
  
  export const accountPage = new AccountPage();
  