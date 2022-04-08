describe('explicitcondn', () => {
    it('should wait until text has changed', async () => {

        await browser.url("http://www.leafground.com")

        
        await browser.execute(async ()=>{
            await window.scrollBy(0,1000)
        })

        await $("//img[@alt='disapper']").click()
        const elem = await $("//button[@id='btn']")
        await browser.waitUntil(
            async () => (await elem.isDisplayed()) === false,
            {
                timeout: 15000,
                timeoutMsg: 'not dissappeared afteer  15s'
            }
        );

        const elem2 = await $("//p[contains(text(), 'disappered then confirm')]")
        let Text=await elem2.getText()
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"+Text);
    });
    
});