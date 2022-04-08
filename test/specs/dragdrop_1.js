describe('dragdrop', () => {
    it('should demonstrate the dragAndDrop command', async() => {

        await browser.url("http://www.leafground.com")
        await browser.execute(async ()=>{
            await window.scrollBy(0,500)
        })

        let drag=await $("//img[@alt='drop']").click()
            let elem = await $("//div[@id='draggable']")
            let target = await $("//div[@id='droppable']")
            await elem.dragAndDrop(target)
            await browser.debug()
    })
})