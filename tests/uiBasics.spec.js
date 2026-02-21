import { test, expect } from '@playwright/test';
test('Login', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.getByRole('textbox', { name: 'email@example.com' }).fill('Kane@gmail.com');
    await page.getByRole('textbox', { name: 'enter your passsword' }).fill('Kane@1213');
    await page.getByRole('button', { name: 'Login' }).click();
})