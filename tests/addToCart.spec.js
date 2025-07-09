const { test, expect } = require('@playwright/test');
const {browser} = require('@playwright/test');

test("addToCart", async ({ browser }) => {
    const context = await browser.newContext({storageState:"session.json"});
    const page = await context.newPage();
    await page.goto('/inventory.html');
    const itemName = await page.locator(".inventory_item_name").first().textContent();
    await page.locator("#add-to-cart-sauce-labs-backpack").click();
    await page.locator("#shopping_cart_container").click();
    await expect(page.locator(".inventory_item_name").first()).toHaveText(item);
    await page.goto('/cart.html');
    await page.locator("#remove-sauce-labs-backpack").click();
    await context.close();
});
