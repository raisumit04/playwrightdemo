const { test, expect } = require('@playwright/test');
import testData from '../testData.json';
import { CheckoutPage } from '../PageObjectModel/checkout';

test('checkout', async ({ browser }) => {
    const context = await browser.newContext({ storageState: 'session.json' });
    const page = await context.newPage();
    const checkoutPage = new CheckoutPage(page);

    await page.goto('/inventory.html');
    await checkoutPage.addItemToCart();
    await checkoutPage.navigateToCart();
    await checkoutPage.proceedToCheckout(testData.name, testData.lastName, testData.pinCode);
    await checkoutPage.completeCheckout();

    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
    await context.close();
});