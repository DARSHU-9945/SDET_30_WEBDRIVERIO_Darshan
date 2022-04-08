describe('upload', () => {
    it('upload file_01', async() => {

        await browser.url("http://www.leafground.com")
        await browser.execute(async ()=>{
            await window.scrollBy(0,500)
        })

        await $("//img[@alt='contextClick']").click()

        await $("//input[@type='file']").setValue("C:/Users/Deepthi/Desktop/array Methods.docx")
    })
})
