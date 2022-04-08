describe('dragdrop', () => {
    it('should demonstrate the dragAndDrop command', async() => {

        await browser.url("http://www.leafground.com")
        await browser.execute(async ()=>{
            await window.scrollBy(0,500)
        })

        let drag=await $("//img[@alt='Draggable']").click()
            let elem = await $("//div[@id='draggable']")
            let target = await $("//img[@alt='logo Testleaf']")
            await elem.dragAndDrop(target)
        
            // drag and drop relative from current position
            //await elem.dragAndDrop({ x: 298, y: 132 })
    
})
})