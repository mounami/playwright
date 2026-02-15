import { test, expect } from '../../fixtures/base.fixtures';

test.describe('Dashboard Tests', () => {
  
    test('user can view dashboard', async ({ authenticatedPage }) => {
        // User is already logged in via fixture
        await expect(authenticatedPage).toHaveURL(/logged-in-successfully/);
        
        // Check for logged in page elements
        const heading = authenticatedPage.locator('.post-title');
        await expect(heading).toContainText('Logged In Successfully');
    });

    test('user can see success message', async ({ authenticatedPage }) => {
        // Already logged in
        const successText = authenticatedPage.locator('.post-content p');
        await expect(successText).toContainText('Congratulations');
    });

    test('user can logout', async ({ authenticatedPage }) => {
        // Click logout button
        const logoutButton = authenticatedPage.locator('a').filter({ hasText: 'Log out' });
        await logoutButton.click();
        
        // Verify back on login page
        await expect(authenticatedPage).toHaveURL(/practice-test-login/);
    });
});