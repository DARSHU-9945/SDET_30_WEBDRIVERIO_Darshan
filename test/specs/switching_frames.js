describe('switch to frames', () => {
    it('handling frames', async() => {
        await browser.url("https://chercher.tech/practice/frames")
        var frame2=await $("//iframe[@id='frame2']")
        await browser.switchToFrame(frame2)

        let animals=await $$("//select[@id='animals']//option")
        let animalArray=[]
        for (const animal of animals) {
            let text=await animal.getText()
            await animalArray.push(text)
            console.log(text);

            if (text=='Avatar') {

                await animal.click()
                break;    
            }   
        }
        console.log(animalArray);

        await browser.switchToFrame(null)
 
        let frame1=await $("//iframe[@id='frame1']")
        await browser.switchToFrame(frame1)

        let frame3=await $("//iframe[@id='frame3']")
        await browser.switchToFrame(frame3)

        await browser.pause(2000)


        let checkbox=await $("//input[@id='a']")
        await checkbox.click()

       // await browser.switchToFrame(null)

        
    });
    
});