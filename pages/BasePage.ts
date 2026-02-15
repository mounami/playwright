import {Page, Locator} from '@playwright/test'

export class BasePage {
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async navigateToUrl(url:string){
    await this.page.goto(url);
    }

    async getTitle(): Promise<string>{
        return this.page.title();
    }

    async waitForPageLoad(){
        await this.page.waitForLoadState('domcontentloaded');
    }

    async clickElement(locator: Locator){
        await locator.click();
    }

    async fillInput(locator: Locator, text: string){
        await locator.fill(text);
    }

    async getText(locator: Locator): Promise<string>{
        return await locator.textContent() || '';
    }

    async isVisible(locator: Locator): Promise<boolean>{
        return await locator.isVisible();
    }

}