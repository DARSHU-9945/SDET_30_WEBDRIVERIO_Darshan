describe('switch to frames', () => {
    it('handling frames', async() => {
        await browser.url("https://chercher.tech/practice/frames")

        let text=await $("//span[.='Not a Friendly Topic']").getText()

        console.log("Text is: =============>"+text);

        let frame1=await $("//iframe[@id='frame1']")
        await browser.switchToFrame(frame1)

        await $("//b[@id='topic']//following-sibling::input").setValue("Javascript")

        let frame3=await $("//iframe[@id='frame3']")
        await browser.switchToFrame(frame3)

        await $("//input[@id='a']").click()

        await browser.switchToFrame(null)

        var frame2=await $("//iframe[@id='frame2']")
        await browser.switchToFrame(frame2)

        let animals=await $$("//select[@id='animals']//option")
        //await animals.selectByVisibleText('Avatar')  ==> this works only for $ not for $$ of animals
        console.log(animals);
        let textArray=[]
        for (const animal of animals) {
            let text=await animal.getText()
            textArray.push(text)
            console.log(text);
            if (text=='Avatar') {
                browser.pause(2000)
                await animal.click()
                browser.pause(2000)
                break;    
            } 
          
        }

        console.log(textArray);
    })
})