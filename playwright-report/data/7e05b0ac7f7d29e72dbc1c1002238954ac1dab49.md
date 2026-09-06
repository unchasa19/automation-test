# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test\addaccout.spec.js >> Add account without accepting terms
- Location: test\addaccout.spec.js:83:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('body')
Timeout: 5000ms
- Expected substring  - 1
+ Received string     + 2

- Please enter a valid starting balance.
+ Skip to contentSecureBank2LogoutMainDashboardAccountsTransferSend MoneyBill PayTransactionsApply LoanAccountNotifications2ProfileTest CasesSTstandard_userMy AccountsManage your accounts and view transaction history.Add AccountAccountTypeBalanceStatusActionsEveryday Checking****4321Checking$4,250.00ActiveViewHigh-Yield Savings****8765Savings$12,800.00ActiveView
+ Add New AccountAccount NameAccount TypeSavings▼Starting Balance$I accept the terms and conditionsCancelAdd AccountCloseCheckingSavingsCredit

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('body')
    14 × locator resolved to <body>…</body>
       - unexpected value "Skip to contentSecureBank2LogoutMainDashboardAccountsTransferSend MoneyBill PayTransactionsApply LoanAccountNotifications2ProfileTest CasesSTstandard_userMy AccountsManage your accounts and view transaction history.Add AccountAccountTypeBalanceStatusActionsEveryday Checking****4321Checking$4,250.00ActiveViewHigh-Yield Savings****8765Savings$12,800.00ActiveView
Add New AccountAccount NameAccount TypeSavings▼Starting Balance$I accept the terms and conditionsCancelAdd AccountCloseCheckingSavingsCredit"

```

```yaml
- dialog "Add New Account":
  - heading "Add New Account" [level=2]
  - form "Account form":
    - text: Account Name
    - textbox "Account Name":
      - /placeholder: e.g. Everyday Checking
      - text: Test Add
    - text: Account Type
    - combobox "Account Type": Savings
    - text: Starting Balance $
    - spinbutton "0.00": "1000"
    - checkbox "I accept the terms and conditions" [checked]
    - text: I accept the terms and conditions
  - button "Cancel"
  - button "Add Account"
  - button "Close"
```

# Test source

```ts
  2   | 
  3   | test('Add account successfully', async ({ page }) => {
  4   |     await page.goto('https://qaplayground.com/bank/dashboard');
  5   |     await page.waitForURL('https://qaplayground.com/bank/dashboard');
  6   |     await page.getByTestId('sidebar-link-accounts').click();
  7   |     await page.waitForURL('https://qaplayground.com/bank/accounts');
  8   |     await expect(page.locator('body')).toContainText('My Accounts');
  9   |     await page.getByTestId('add-account-btn').click();
  10  |     await expect(page.locator('body')).toContainText('Add New Account');
  11  | 
  12  |     await page.getByTestId('account-form-name-input').click();
  13  |     await page.getByTestId('account-form-name-input').fill('Test Add');
  14  | 
  15  |     await page.getByRole('combobox').click();
  16  |     await page.getByTestId('account-form-type-option').filter({ hasText: 'Savings' }).click();  
  17  |     await page.locator('[name="account_balance_field"]').click();
  18  |     await page.locator('[name="account_balance_field"]').fill('1000');
  19  |     await page.getByTestId('account-form-accept-terms-checkbox').click();
  20  | 
  21  |     await page.getByTestId('save-account-form-btn').click();
  22  |     await expect(page.locator('body')).toContainText('Test Add');   
  23  |     });
  24  | 
  25  | test('Add account without name', async ({ page }) => {
  26  |     await page.goto('https://qaplayground.com/bank/dashboard');
  27  |     await page.waitForURL('https://qaplayground.com/bank/dashboard');    
  28  |     await page.getByTestId('sidebar-link-accounts').click();
  29  |     await page.waitForURL('https://qaplayground.com/bank/accounts');
  30  |     await expect(page.locator('body')).toContainText('My Accounts');
  31  |     await page.getByTestId('add-account-btn').click();
  32  |     await expect(page.locator('body')).toContainText('Add New Account');
  33  | 
  34  |     await page.getByRole('combobox').click();
  35  |     await page.getByTestId('account-form-type-option').filter({ hasText: 'Savings' }).click();  
  36  |     await page.locator('[name="account_balance_field"]').click();
  37  |     await page.locator('[name="account_balance_field"]').fill('1000');
  38  |     await page.getByTestId('account-form-accept-terms-checkbox').click();
  39  | 
  40  |     await page.getByTestId('save-account-form-btn').click();
  41  |     await expect(page.locator('body')).toContainText('Please enter an account name.');
  42  |     });
  43  | 
  44  | test('Add account without balance', async ({ page }) => {
  45  |     await page.goto('https://qaplayground.com/bank/dashboard');
  46  |     await page.waitForURL('https://qaplayground.com/bank/dashboard');   
  47  |     await page.getByTestId('sidebar-link-accounts').click();
  48  |     await page.waitForURL('https://qaplayground.com/bank/accounts');
  49  |     await expect(page.locator('body')).toContainText('My Accounts');
  50  |     await page.getByTestId('add-account-btn').click();
  51  |     await expect(page.locator('body')).toContainText('Add New Account');
  52  | 
  53  |     await page.getByTestId('account-form-name-input').click();
  54  |     await page.getByTestId('account-form-name-input').fill('Test Add');
  55  | 
  56  |     await page.getByRole('combobox').click();
  57  |     await page.getByTestId('account-form-type-option').filter({ hasText: 'Savings' }).click();  
  58  |     await page.getByTestId('account-form-accept-terms-checkbox').click();
  59  | 
  60  |     await page.getByTestId('save-account-form-btn').click();
  61  |     await expect(page.locator('body')).toContainText('Please enter a valid starting balance.');   
  62  |     });  
  63  | 
  64  | test('Add account without type', async ({ page }) => {
  65  |         await page.goto('https://qaplayground.com/bank/dashboard');
  66  |         await page.waitForURL('https://qaplayground.com/bank/dashboard');
  67  |         await page.waitForURL('https://qaplayground.com/bank/accounts');
  68  |         await expect(page.locator('body')).toContainText('My Accounts');
  69  |         await page.getByTestId('add-account-btn').click();
  70  |         await expect(page.locator('body')).toContainText('Add New Account');
  71  |         
  72  |         await page.getByTestId('account-form-name-input').click();
  73  |         await page.getByTestId('account-form-name-input').fill('Test Add');
  74  | 
  75  |         await page.locator('[name="account_balance_field"]').click();
  76  |         await page.locator('[name="account_balance_field"]').fill('1000');
  77  |         await page.getByTestId('account-form-accept-terms-checkbox').click();
  78  | 
  79  |         await page.getByTestId('save-account-form-btn').click();
  80  |         await expect(page.locator('body')).toContainText('Please select an account type.');   
  81  |     });
  82  | 
  83  | test('Add account without accepting terms', async ({ page }) => {
  84  |     await page.goto('https://qaplayground.com/bank/dashboard');
  85  |     await page.waitForURL('https://qaplayground.com/bank/dashboard');
  86  |     await page.getByTestId('sidebar-link-accounts').click();
  87  |     await page.waitForURL('https://qaplayground.com/bank/accounts');
  88  |     await expect(page.locator('body')).toContainText('My Accounts');
  89  |     await page.getByTestId('add-account-btn').click();
  90  |     await expect(page.locator('body')).toContainText('Add New Account');
  91  | 
  92  |     await page.getByTestId('account-form-name-input').click();
  93  |     await page.getByTestId('account-form-name-input').fill('Test Add');
  94  | 
  95  |     await page.getByRole('combobox').click();
  96  |     await page.getByTestId('account-form-type-option').filter({ hasText: 'Savings' }).click();  
  97  |     await page.locator('[name="account_balance_field"]').click();
  98  |     await page.locator('[name="account_balance_field"]').fill('1000');
  99  |     await page.getByTestId('account-form-accept-terms-checkbox').click();
  100 | 
  101 | 
> 102 |     await expect(page.locator('body')).toContainText('Please enter a valid starting balance.');   
      |                                        ^ Error: expect(locator).toContainText(expected) failed
  103 |     });
```