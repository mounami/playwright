import {Page, Locator} from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage{
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    readonly successMessage: Locator;

    constructor(page: Page){
        super(page);// Call BasePage constructor // Call parent constructor - initializes basePage
    
        // Initialize locators
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#submit');
        this.errorMessage = page.locator('#error');
        this.successMessage = page.locator('.post-title');
    }

    // Page actions
    async login(username:string, password:string){
        await this.fillInput(this.usernameInput, username);
        await this.fillInput(this.passwordInput, password);
        await this.clickElement(this.loginButton);
    }

    async getErrorMessage(): Promise<string> {
        return await this.getText(this.errorMessage);
      }
    
      async isErrorVisible(): Promise<boolean> {
        return await this.isVisible(this.errorMessage);
      }

      async navigateToLogin(){
        await this.page.goto('https://practicetestautomation.com/practice-test-login/');
      }

}