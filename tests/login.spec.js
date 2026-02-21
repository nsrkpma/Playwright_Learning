import { test } from '@playwright/test';

import LoginPage from '../pages/LoginPage.js';

import loginTestData from '../test-data/loginData.js';



test.describe('Login Tests', () => {

    for (const data of loginTestData) {

        test(data.testName, async ({ page }) => {

            const loginPage = new LoginPage(page);

            await loginPage.navigate();

            await loginPage.login(
                data.email,
                data.password
            );

            if (data.expectedResult === "success") {

                await loginPage.verifyLoginSuccess();

            } else {

                await loginPage.verifyLoginError(
                    data.errorMessage
                );
            }

        });

    }

});