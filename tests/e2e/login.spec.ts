import { test, expect } from '../../fixtures/base.fixtures';
import { LoginPage } from '../../pages/LoginPage';
import users from '../../data/users.json';

test.describe('Login test script', ()=>{
    test('successful login', async({loginPage, testData})=>{

        await loginPage.navigateToLogin();
        await loginPage.login(testData.validUser.username, testData.validUser.password);
    
        // Assertions
        await expect(loginPage.page).toHaveURL(/logged-in-successfully/);
        await expect(loginPage.successMessage).toContainText('Logged In Successfully')
    });

    test('login fails with invalid credentials', async ({ loginPage }) => {
        
        await loginPage.navigateToLogin();
        await loginPage.login(users.invalidUser.username, users.invalidUser.password);
        
        // Assertions
        const isErrorVisible = await loginPage.isErrorVisible();
        expect(isErrorVisible).toBeTruthy();
        
        const errorText = await loginPage.getErrorMessage();
        expect(errorText).toContain('Your username is invalid');
      });
    
      test('login button is disabled with empty fields', async ({ loginPage }) => {
        // const loginPage = new LoginPage(page);
        
        // await loginPage.navigateToLogin();
        
        // // Check button state
        // await expect(loginPage.loginButton).toBeDisabled();
        
        // // Fill only username
        // await loginPage.fillInput(loginPage.usernameInput, 'user');
        // await expect(loginPage.loginButton).toBeDisabled();
        
        // // Fill password too
        // await loginPage.fillInput(loginPage.passwordInput, 'pass');
        // await expect(loginPage.loginButton).toBeEnabled();
      });
    });
