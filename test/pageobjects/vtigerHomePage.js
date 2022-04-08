class HomePage {

    get adminImage(){
        return $('//img[@src="themes/softed/images/user.PNG"]')
    }
    async hoverOnAdminImage(){
        await this.adminImage.waitForDisplayed()
        await this.adminImage.moveTo()
    }
    get SignOutLink(){
        return $("//a[. = 'Sign Out']")
    }
    async clickOnSignOutLink(){
        await this.SignOutLink.waitForDisplayed()
        await this.SignOutLink.click()
    }

    get ContactLink(){
        return $("//a[text()='Contacts']")
    }

    async clickonContactLink(){
        await this.ContactLink.waitForDisplayed()
        await this.ContactLink.click()
    }

    get OrganizationsLink(){
        return $("//a[text()='Organizations']")
    }

    async clickonOrganizationsLink(){
        await this.OrganizationsLink.waitForDisplayed()
        await this.OrganizationsLink.click()
    }

    async logoutFromApplication(){
        await this.hoverOnAdminImage()
        await this.clickOnSignOutLink()
    }

}
module.exports = new HomePage()