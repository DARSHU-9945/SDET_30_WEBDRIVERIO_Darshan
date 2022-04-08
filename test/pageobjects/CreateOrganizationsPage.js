class CreateOrganizationsPage{

    get OrganizationName(){
        return $("//input[@name='accountname']")
    }

    async OrganizationNameTextField(Name){
        await this.OrganizationName.waitForDisplayed()
        await this.OrganizationName.setValue(Name)
    }

    get industrytype(){
       // return $("//select[@name='industry']")
        var selectBox = $("//select[@name='industry']");
        return selectBox
        //console.log(await selectBox.getValue()); // returns "someValue
        //$(selector).selectByAttribute(attribute, value)
    }

    async industryDropdown(){
        await this.industrytype.waitForDisplayed()
        await this.industrytype.click()    
        await this.industrytype.selectByAttribute('value', 'Banking');
    }

    get Type(){
        return $("//select[@name='accounttype']")
    }

    async typeDropdown(){
        await this.Type.waitForDisplayed()
        await this.Type.click()
        await this.Type.selectByAttribute('value', 'Investor');
    }

    get Save(){
        return $("//input[@title='Save [Alt+S]']")
    }

    async clickOnSaveButton(){

        await this.Save.waitForDisplayed()
        await this.Save.click()
    }

    async CreateOrganizationsPage(Name){

        await this.OrganizationNameTextField(Name)
        await this.industryDropdown()
        await this.typeDropdown()
        await this.clickOnSaveButton()
        
    }

    async CreateOrganizationsPage(Name){

        await this.OrganizationNameTextField(Name)
        //await this.industryDropdown()
        //await this.typeDropdown()
       // await this.clickOnSaveButton()
        
    }

    async CreateOrganizationsPageIndustry(Name){

        await this.OrganizationNameTextField(Name)
        await this.industryDropdown()
       // await this.typeDropdown()
       // await this.clickOnSaveButton()

}
}

module.exports=new CreateOrganizationsPage()