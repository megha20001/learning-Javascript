const {test,expect} = require ("@playwright/test")

test ("demo login", async function({page}){

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const url = await page.url();
    await page.getByPlaceholder('username').fill("Admin")
    await page.locator("//input[@name = 'password']").fill("admin123")
    await page.locator("//button[@type = 'submit']").click()
    await expect (page).toHaveURL('/dashboard/')

})