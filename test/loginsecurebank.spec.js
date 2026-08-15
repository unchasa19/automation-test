import { test, expect } from '@playwright/test';

test('Login successfully', async ({ page }) => {
    await page.goto('https://qaplayground.com/bank/login');
    await page.waitForURL('https://qaplayground.com/bank/login');
    await expect(page.locator('body')) .toContainText ("SecureBank");

    await expect(page.locator('body')).toContainText('Username');
    await page.getByPlaceholder("Enter username").click();
    await page.getByPlaceholder("Enter username").fill('standard_user');
    await page.getByPlaceholder('Enter password').click();
    await page.getByPlaceholder('Enter password').fill('bank_sauce');
    await page.getByTestId('login-submit-btn').click();
    await page.waitForURL('https://qaplayground.com/bank/dashboard');
});

test('Login with out username',async({page}) => {
    await page.goto('https://qaplayground.com/bank/login');
    await page.waitForURL('https://qaplayground.com/bank/login');
    await expect(page.locator('body')) .toContainText ("SecureBank");

    await expect(page.locator('body')).toContainText('Username');
    await page.getByPlaceholder('Enter password').click();
    await page.getByPlaceholder('Enter password').fill('bank_sauce');
    await page.getByTestId('login-submit-btn').click();
    await expect(page.locator('body')).toContainText('Please enter your username.');
});