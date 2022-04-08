describe('switch to frames', () => {
    it('handling frames', async() => {
        await browser.url("https://chercher.tech/practice/frames")

        let frame1=await $("//iframe[@id='frame1']")
        await browser.switchToFrame(frame1)

        let frame3=await $("//iframe[@id='frame3']")
        await browser.switchToFrame(frame3)

        await browser.pause(2000)


        let checkbox=await $("//input[@id='a']")
        await checkbox.click()

        await browser.switchToFrame(null)

        var frame2=await $("//iframe[@id='frame2']")
        await browser.switchToFrame(frame2)

        let animals=await $$("//select[@id='animals']//option")
        //await animals.selectByVisibleText('Avatar')  ==> this works only for $ not for $$ of animals
        console.log(animals);
        let textArray=[]
        for (const animal of animals) {
            let text=await animal.getText()
            await textArray.push(text)
            console.log(text);
            if (text=="Avatar") {
                //await browser.pause(2000)
                await animal.click()
                //await browser.pause(2000)
                break;    
            } 
          
        }

        await browser.switchToFrame(null)

        let frame_1=await $("//iframe[@id='frame1']")
        await browser.switchToFrame(frame_1)

        await $("//b[@id='topic']//following-sibling::input").setValue("Javascript")
       // await browser.debug()

    })
})