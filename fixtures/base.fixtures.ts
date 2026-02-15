import {test as base, Page} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import users from "../data/users.json";

// define fixture type
type LoginFixtures = {
    loginPage: LoginPage;
    authenticatedPage: Page;
    testData: typeof users;
}

// Extend base test with custom fixtures
export const test = base.extend<LoginFixtures>({
    loginPage: async ({ page }, use) => {
      const loginPage = new LoginPage(page);
      await use(loginPage);
    },
  
    authenticatedPage: async ({ page }, use) => {
      const loginPage = new LoginPage(page);
      await loginPage.navigateToLogin();
      await loginPage.login(users.validUser.username, users.validUser.password);
      await page.waitForURL('**/logged-in-successfully/**');
      await use(page);
    },
  
    // NEW: Test data fixture
    testData: async ({}, use) => {
      // Load test data
      const data = users;
      
      // Provide to test
      await use(data);
          },
  });


export { expect } from '@playwright/test';