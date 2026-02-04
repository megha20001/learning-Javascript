const {test,expect} = require ("@playwright/test")

test ("Application Title", async function({page}){

    await page.goto("https://www.saucedemo.com/")
    const url = await page.url()
    console.log("URL is"+ url)

    const title = await page.title()
    console.log("Title is"+ title)

    await expect(page).toHaveTitle("Swag Labs")

})