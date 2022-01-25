const BasePage = require("./BasePage")

const ENTER_KEY = "\uE007";

class MasterObligationsPage{

    get AdminModuleNav () { return $('//a[contains(text(),"Admin")]') }
    
    
    async WaitForVisible(element,timeout){ browser.waitForVisible(element, timeout);} 
    
    async clickOnAdminModule() {
        await browser.pause(5000);
        //await this.WaitForVisible(this.worflowName,30000);
        await this.AdminModuleNav.click();
        await browser.pause(30000);
     }
    }
    
    
    module.exports = new MasterObligationsPage();