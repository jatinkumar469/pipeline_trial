class OpportuntityPage
{
    applauncher_button="//button[@title='App Launcher']";
    search_box="//input[@placeholder='Search apps and items...']";
    new_opportunity="//a[@title='New']";
    next_button="//span[normalize-space()='Next']";
    opportunity_name="//input[@class='slds-input' and @name='Name']";
    opportunity_closedate="//input[@class='slds-input' and @name='CloseDate']";
    opportunity_stagename="//button[@aria-label='Stage' and @type='button']"
    opportunity_amount="//input[@class='slds-input' and @name='Amount']";
    opportunity_accountname="//input[@class='slds-combobox__input slds-input' and @placeholder='Search Accounts...']";
    opportunity_accountname_lookup="//lightning-base-combobox-item[@data-value='actionAdvancedSearch']";
    opportunity_accountname_select='//lightning-base-combobox-formatted-text[@title="account for jatin 123 333"]';
    opportunity_type="//button[@aria-label='Type' and @type='button']";
    move_to_right="//button[@title='Move to Chosen']//lightning-primitive-icon[@exportparts='icon']//*[name()='svg']";
    private_checkbox="//input[@type='checkbox' and @name='IsPrivate']";
    tracking_number="//input[@class='slds-input' and @name='TrackingNumber__c']"
    errormessage_tracking_number="//div[@class='slds-form-element__help' and @part='help-text' and text()='Length should be less than 5.']"
    save_edit="//button[@name='SaveEdit']";
    detail_tab="//a[@id='detailTab__item']";
    deliverystatus="//a[@title='Delivery Status']";
    remove_target_from_deliverystatus="//a[@class='slds-hyphenate' and @title='Delivery Status']"
    leave_button="//input[@id='proceed']";
    fedex_img="//img[@alt='FedEx India Homepage']";

   fun_select_country(name){
        return `//div[@role="option" and @data-value="${name}"]`
   }
   fun_stage_dropdown(name){
       return `//lightning-base-combobox-item[@data-value='${name}']`
   }
   fun_select_type(name){
    return `//lightning-base-combobox-item[@data-value='${name}']`
  }

  fun_select_contact(){
    return `cy.get('.scroller > .forceRecordLayout > tbody > :nth-child(1) > :nth-child(1)')`;
  }

    
}
export const opportunityPage = new OpportuntityPage();