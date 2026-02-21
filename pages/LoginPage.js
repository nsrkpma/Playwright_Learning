import { expect } from '@playwright/test';

export default class LoginPage {

    constructor(page) {

        this.page = page;

        // Locators
        this.emailInput = page.getByRole('textbox', { name: 'email@example.com' });

        this.passwordInput = page.getByRole('textbox', { name: 'enter your passsword' });

        this.loginButton = page.getByRole('button', { name: 'Login' });

        this.errorMessage = page.getByRole('alert', { name: 'Incorrect email or password.' });
    }
    async navigate() {

        await this.page.goto(
            'https://rahulshettyacademy.com/client/#/auth/login'
        );
    }

    async login(email, password) {

        await this.emailInput.fill(email);

        await this.passwordInput.fill(password);

        await this.loginButton.click();
    }

    async verifyLoginSuccess() {

        await expect(this.page).toHaveURL(/dashboard/);

    }

    async verifyLoginError(expectedMessage) {

        await expect(this.errorMessage).toBeVisible();

        const actualMessage =
            await this.errorMessage.textContent();

        await expect(actualMessage).toContain(expectedMessage);
    }

}