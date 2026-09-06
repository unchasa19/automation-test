import { test as setup, expect } from '@playwright/test';

setup('Login successfully', async ({ page }) => {
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
    await page.context().storageState({
    path: 'playwright/.auth/user.json'
  });


