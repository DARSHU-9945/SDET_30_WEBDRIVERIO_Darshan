describe('explicitcondn', () => {
    it('should wait until text has changed', async () => {

        await browser.url("http://www.leafground.com")

        
        await browser.execute(async ()=>{
            await window.scrollBy(0,1000)
        })

        await $("//img[@alt='appear']").click()
        const elem = await $("//button[@id='btn']")
        await elem.waitForDisplayed({ reverse: false });
        let Text=await elem.getText()
        console.log("=====================================================>>>>>>>>"+Text);
    })
})