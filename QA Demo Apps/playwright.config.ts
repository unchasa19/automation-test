import { defineConfig } from '@playwright/test';


export default defineConfig({
  reporter: 'html',
  use: {
    launchOptions: {
      slowMo: 500
    }
  }
});

