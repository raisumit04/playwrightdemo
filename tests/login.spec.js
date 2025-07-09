
import { test, expect } from '@playwright/test';
import testData from '../testData.json';
import { LoginPage } from '../PageObjectModel/LoginPage';

test('login', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(testData.username, testData.password);
    await context.storageState({ path: 'session.json' });
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await context.close();
});

test('logout', async ({ browser }) => {
    const context = await browser.newContext({ storageState: 'session.json' });
    const page = await context.newPage();
    const loginPage = new LoginPage(page);

    await page.goto('/inventory.html');
    await loginPage.logout();
    await expect(page).toHaveURL('https://www.saucedemo.com/');
});
