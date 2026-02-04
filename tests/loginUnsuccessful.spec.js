const {test,expect} = require ("@playwright/test")

test ("swag labs invalid username", async function({page}){

    await page.goto("https://www.saucedemo.com/")
    const url = await page.url();

    await page.getByPlaceholder('Username').fill("standard_users"); //invalid username
    await page.locator('#password').fill("secret_sauce");
    await page.locator("//input[@name = 'login-button']").click();
    
    await expect (page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service'); // css locator used
    
    const errorMsg = await page.locator('[data-test="error"]').textContent();
    console.log("Error message:", errorMsg);

})

test ("swag labs invalid password", async function({page}){

    await page.goto("https://www.saucedemo.com/")
    const url = await page.url();

    await page.getByPlaceholder('Username').fill("standard_user"); 
    await page.locator('#password').fill("secret_saucess"); //invalid password
    await page.locator("//input[@name = 'login-button']").click();
    
    await expect (page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service'); // css locator used
    
    const errorMsg = await page.locator('[data-test="error"]').textContent();
    console.log("Error message:", errorMsg);

})