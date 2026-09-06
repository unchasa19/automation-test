import { test, expect } from '@playwright/test';

test('Add account successfully', async ({ page }) => {
    await page.goto('https://qaplayground.com/bank/dashboard');
    await page.waitForURL('https://qaplayground.com/bank/dashboard');
    await page.getByTestId('sidebar-link-accounts').click();
    await page.waitForURL('https://qaplayground.com/bank/accounts');
    await expect(page.locator('body')).toContainText('My Accounts');
    await page.getByTestId('add-account-btn').click();
    await expect(page.locator('body')).toContainText('Add New Account');

    await page.getByTestId('account-form-name-input').click();
    await page.getByTestId('account-form-name-input').fill('Test Add');

    await page.getByRole('combobox').click();
    await page.getByTestId('account-form-type-option').filter({ hasText: 'Savings' }).click();  
    await page.locator('[name="account_balance_field"]').click();
    await page.locator('[name="account_balance_field"]').fill('1000');
    await page.getByTestId('account-form-accept-terms-checkbox').click();

    await page.getByTestId('save-account-form-btn').click();
    await expect(page.locator('body')).toContainText('Test Add');   
    });

test('Add account without name', async ({ page }) => {
    await page.goto('https://qaplayground.com/bank/dashboard');
    await page.waitForURL('https://qaplayground.com/bank/dashboard');    
    await page.getByTestId('sidebar-link-accounts').click();
    await page.waitForURL('https://qaplayground.com/bank/accounts');
    await expect(page.locator('body')).toContainText('My Accounts');
    await page.getByTestId('add-account-btn').click();
    await expect(page.locator('body')).toContainText('Add New Account');

    await page.getByRole('combobox').click();
    await page.getByTestId('account-form-type-option').filter({ hasText: 'Savings' }).click();  
    await page.locator('[name="account_balance_field"]').click();
    await page.locator('[name="account_balance_field"]').fill('1000');
    await page.getByTestId('account-form-accept-terms-checkbox').click();

    await page.getByTestId('save-account-form-btn').click();
    await expect(page.locator('body')).toContainText('Please enter an account name.');
    });

test('Add account without balance', async ({ page }) => {
    await page.goto('https://qaplayground.com/bank/dashboard');
    await page.waitForURL('https://qaplayground.com/bank/dashboard');   
    await page.getByTestId('sidebar-link-accounts').click();
    await page.waitForURL('https://qaplayground.com/bank/accounts');
    await expect(page.locator('body')).toContainText('My Accounts');
    await page.getByTestId('add-account-btn').click();
    await expect(page.locator('body')).toContainText('Add New Account');

    await page.getByTestId('account-form-name-input').click();
    await page.getByTestId('account-form-name-input').fill('Test Add');

    await page.getByRole('combobox').click();
    await page.getByTestId('account-form-type-option').filter({ hasText: 'Savings' }).click();  
    await page.getByTestId('account-form-accept-terms-checkbox').click();

    await page.getByTestId('save-account-form-btn').click();
    await expect(page.locator('body')).toContainText('Please enter a valid starting balance.');   
    });  

test('Add account without type', async ({ page }) => {
        await page.goto('https://qaplayground.com/bank/dashboard');
        await page.waitForURL('https://qaplayground.com/bank/dashboard');
        await page.waitForURL('https://qaplayground.com/bank/accounts');
        await expect(page.locator('body')).toContainText('My Accounts');
        await page.getByTestId('add-account-btn').click();
        await expect(page.locator('body')).toContainText('Add New Account');
        
        await page.getByTestId('account-form-name-input').click();
        await page.getByTestId('account-form-name-input').fill('Test Add');

        await page.locator('[name="account_balance_field"]').click();
        await page.locator('[name="account_balance_field"]').fill('1000');
        await page.getByTestId('account-form-accept-terms-checkbox').click();

        await page.getByTestId('save-account-form-btn').click();
        await expect(page.locator('body')).toContainText('Please select an account type.');   
    });

test('Add account without accepting terms', async ({ page }) => {
    await page.goto('https://qaplayground.com/bank/dashboard');
    await page.waitForURL('https://qaplayground.com/bank/dashboard');
    await page.getByTestId('sidebar-link-accounts').click();
    await page.waitForURL('https://qaplayground.com/bank/accounts');
    await expect(page.locator('body')).toContainText('My Accounts');
    await page.getByTestId('add-account-btn').click();
    await expect(page.locator('body')).toContainText('Add New Account');

    await page.getByTestId('account-form-name-input').click();
    await page.getByTestId('account-form-name-input').fill('Test Add');

    await page.getByRole('combobox').click();
    await page.getByTestId('account-form-type-option').filter({ hasText: 'Savings' }).click();  
    await page.locator('[name="account_balance_field"]').click();
    await page.locator('[name="account_balance_field"]').fill('1000');
    
    await page.getByTestId('save-account-form-btn').click();
    await expect(page.locator('body')).toContainText('Please enter a valid starting balance.');   
    });