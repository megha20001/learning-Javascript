const {test,expect} = require ("@playwright/test")

test ("swag labs login", async function({page}){

    await page.goto("https://www.saucedemo.com/")
    const url = await page.url();

    await page.getByPlaceholder('Username').fill("standard_user")
    await page.locator('#password').fill("secret_sauce")
    await page.locator("//input[@name = 'login-button']").click()

    await expect(page.getByText('Products')).toBeVisible()
// page.getByText('Products') → returns a Locator , expect(locator) → assertion and .toBeVisible() → matcher

    console.log("user logged-in successfull! ")
    await page.locator('#react-burger-menu-btn').click()
    await page.getByText('Logout').click()
    await expect(page.locator('#password')).toBeVisible()


})