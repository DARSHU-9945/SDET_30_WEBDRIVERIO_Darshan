class ContactsPage{

    get PlusButton(){

        return $('//img[@src="themes/softed/images/btnL3Add.gif"]')
    }

    async clickonPlussButton(){

        await this.PlusButton.waitForDisplayed()
        await this.PlusButton.click()
    }
}

module.exports=new ContactsPage()