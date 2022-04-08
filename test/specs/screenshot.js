describe('', () => {
    it('scroll wedpage to element', async () => {
        await browser.maximizeWindow()

        await browser.url("https://webdriver.io/docs/api/webdriver#findelement")

        await browser.saveScreenshot("./Screenshot.png")
    })
})