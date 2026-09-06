import { defineConfig } from '@playwright/test';


export default defineConfig({
  reporter: 'html',
  use: {
    launchOptions: {
      slowMo: 500
    },
  name: 'chromium',
  use: {
    ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
  
});

