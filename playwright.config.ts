import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  reporter: 'html',
  use: {
    launchOptions: {
      slowMo: 500,
    },
  },
  projects: [
    {
      name: 'setup',
      testMatch: /auth\.setup\.ts/,
    },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
  ],
});

