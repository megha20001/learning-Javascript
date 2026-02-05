const {test,expect} = require ("@playwright/test")

test ("High-to-low filter", async function({page}){

    await page.goto("https://www.saucedemo.com/")
    const url = await page.url();

    await page.getByPlaceholder('Username').fill("standard_user");
    await page.locator('#password').fill("secret_sauce");
    await page.locator("//input[@name = 'login-button']").click();
    await page.locator("//select[@class = 'product_sort_container']").selectOption("hilo");
    console.log("Filter applied!");
   
    // Get all prices as numbers
  const priceElements = await page.$$('.inventory_item_price'); 
  const prices = [];

  for (const el of priceElements) {
    let text = await el.innerText();   // get visible text
    text = text.replace('$', '').trim(); // remove $ and extra spaces/newlines
    prices.push(Number(text));           // convert to number
  }

  console.log('Prices:', prices);

  // Verify prices are sorted High to Low
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      throw new Error(`Prices not sorted: ${prices[i]} < ${prices[i + 1]}`);
    }
  }

  console.log('Prices are sorted High to Low correctly.');

})