/*let importContact=require("./Contactspage")

class CreateContactPage{

    get LastName(){
        return $("//input[@name='lastname']")
    }

    async LastNameTextField(Name){
        await this.LastName.waitForDisplayed()
        await this.LastName.setValue(Name)
    }

    get LeadSource(){
        return $("//select[@name='leadsource']")
    }

    async LeadSourceDropdown(){
        await this.LeadSource.waitForDisplayed()
        //await this.LeadSource.click()  ====> without clicking also dropdown will select based on method
        await this.LeadSource.selectByAttribute('value', 'Employee');

    }

    get plussbutton(){
        return $("//input[@name='account_name']/following-sibling::img")
    }

    async clickonPlussButton(){
        await this.plussbutton.waitForDisplayed()
        await this.plussbutton.click()
        
    }
    get searchtextfield(){
        return $("//input[@name='search_text']")
    }

    async searchfield(OrgName){
        await this.searchtextfield.waitForDisplayed()
        await this.searchtextfield.setValue(OrgName)
    }

    get searchButton(){
        return $("//input[@name='search']")
    }

    async search(){
        await this.searchButton.waitForDisplayed()
        await this.searchButton.click()
    }

     name(OrgName){   //=============> for reference passing we should not use get and also pass 
        //the reference everywhere 'name' is there
        return $("//a[text()='"+OrgName+"']")
    }

    async namesearched(OrgName){
        await this.name(OrgName).waitForDisplayed()
        //console.log(OrgName);
        await this.name(OrgName).click()
    }

    get Save(){
        return $("//input[@title='Save [Alt+S]']")
    }

    async clickOnSaveButton(){

        await this.Save.waitForDisplayed()
        await this.Save.click()
    }

    async CreateContactPage(Name){

        await this.LastNameTextField(Name)
        await this.clickOnSaveButton()
    }

    async CreateContactPagewithleadsource(Name){

        await this.LastNameTextField(Name)
        await this.LeadSourceDropdown()
        await this.clickOnSaveButton()
    }

    async CreateContactPageAll(Name){

        await this.LastNameTextField(Name)
        await this.LeadSourceDropdown()
        await this.clickonPlussButton()
        browser.switchWindow("http://localhost:8888/index.php?module=Accounts&action=Popup&popuptype=specific_contact_account_address&form=TasksEditView&form_submit=false&fromlink=&recordid=")
    }

    async newWindow(OrgName){
        await this.searchfield(OrgName)
        await this.search()
        await this.name(OrgName)
        await this.namesearched(OrgName)
        console.log(OrgName);
        browser.switchWindow("http://localhost:8888/index.php?module=Contacts&action=EditView&return_action=DetailView&parenttab=Marketing")
        await this.clickOnSaveButton()
        
    }

    }

module.exports=new CreateContactPage()*/

/*let windowids=await browser.getWindowHandles()
for (const window of windowids) {

    if (!(parentWindow==window)) {
        break 
    }  
}

//switching based on title

for (const window of windowids) {
    await browser.switchToWindow(window)

    if(await browser.getTitle()=="TitleYouNeedToSwitch"){
        break;
    }  
}

let childBrowserTitle=await browser.getTitle()
console.log(childbrowserTitle);*/

let importContact=require("./Contactspage")

class CreateContactPage{

    get LastName(){
        return $("//input[@name='lastname']")
    }

    async LastNameTextField(Name){
        await this.LastName.waitForDisplayed()
        await this.LastName.setValue(Name)
    }

    get LeadSource(){
        return $("//select[@name='leadsource']")
    }

    async LeadSourceDropdown(){
        await this.LeadSource.waitForDisplayed()
        //await this.LeadSource.click()  ====> without clicking also dropdown will select based on method
        await this.LeadSource.selectByAttribute('value', 'Employee');

    }

    get plussbutton(){
        return $("//input[@name='account_name']/following-sibling::img")
    }

    async clickonPlussButton(){
        await this.plussbutton.waitForDisplayed()
        await this.plussbutton.click()
        
    }
    get searchtextfield(){
        return $("//input[@name='search_text']")
    }

    async searchfield(OrgName){
        await this.searchtextfield.waitForDisplayed()
        await this.searchtextfield.setValue(OrgName)
    }

    get searchButton(){
        return $("//input[@name='search']")
    }

    async search(){
        await this.searchButton.waitForDisplayed()
        await this.searchButton.click()
    }

     name(OrgName){   //=============> for reference passing we should not use get and also pass 
        //the reference everywhere 'name' is there
        return $("//a[text()='"+OrgName+"']")
    }

    async namesearched(OrgName){
        await this.name(OrgName).waitForDisplayed()
        //console.log(OrgName);
        await this.name(OrgName).click()
    }

    get Save(){
        return $("//input[@title='Save [Alt+S]']")
    }

    async clickOnSaveButton(){

        await this.Save.waitForDisplayed()
        await this.Save.click()
    }

    async CreateContactPage(Name){

        await this.LastNameTextField(Name)
        await this.clickOnSaveButton()
    }

    async CreateContactPagewithleadsource(Name){

        await this.LastNameTextField(Name)
        await this.LeadSourceDropdown()
        await this.clickOnSaveButton()
    }

    async CreateContactPageAll(Name){

        await this.LastNameTextField(Name)
        var parentWindow=await browser.getWindowHandle()
        await this.LeadSourceDropdown()
        await this.clickonPlussButton()
        let windowids=await browser.getWindowHandles()
        for (const window of windowids) {
            await browser.switchToWindow(window)

        if (!(parentWindow==window)) {
        break 
     }  
    }
        //browser.switchWindow("http://localhost:8888/index.php?module=Accounts&action=Popup&popuptype=specific_contact_account_address&form=TasksEditView&form_submit=false&fromlink=&recordid=")
    }

    async newWindow(OrgName){
        await this.searchfield(OrgName)
        await this.search()
        await this.name(OrgName)
        await this.namesearched(OrgName)
        console.log(OrgName);
        await browser.switchWindow(parentWindow)
        //browser.switchWindow("http://localhost:8888/index.php?module=Contacts&action=EditView&return_action=DetailView&parenttab=Marketing")
        await this.clickOnSaveButton()
        
    }

    }

module.exports=new CreateContactPage()