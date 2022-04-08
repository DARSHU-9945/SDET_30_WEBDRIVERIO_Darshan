describe('Alert', () => {
    it('Alert Handling', async() => {

        await browser.url("http://www.leafground.com")
        await browser.execute(async ()=>{
            await window.scrollBy(0,200)
        })
        browser.pause(3000)
        await $("//img[@alt='Alert']").click()

        /*let alerttext=await $("//button[text()='Alert Box']")
        await alerttext.click()
        let Textalert=await browser.getAlertText()
        console.log("alert text is: ========>"+Textalert);
        await browser.acceptAlert()

        
        let confirmtext=await $("//button[text()='Confirm Box']")
        await confirmtext.click()
        let textconfirm=await browser.getAlertText()
        console.log("confirm text is: ========>"+textconfirm);
        await browser.acceptAlert()*/

        
        /*let prompttext=await $("//button[text()='Prompt Box']")
        await prompttext.click()
        let textprompt=await browser.getAlertText()
        console.log("prompt text is: ========>"+textprompt);
        await browser.sendAlertText("Hello Boss")
        await browser.debug()
        await browser.acceptAlert()*/


        let linebreaktext=await $("//button[text()='Line Breaks?']")
        await linebreaktext.click()
        let textlinebraek=await browser.getAlertText()
        console.log("line break text is: ========>"+textlinebraek);
        await browser.acceptAlert()

        

    });
    
});