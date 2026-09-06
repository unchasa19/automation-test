import { test, expect } from '@playwright/test';

test('Add account successfully', async ({ page }) => {
    await page.goto('https://qaplayground.com/bank/dashboard');
    await page.waitForURL('https://qaplayground.com/bank/dashboard');
    await expect(page.locator('body')) .toContainText ("SecureBank");
 });