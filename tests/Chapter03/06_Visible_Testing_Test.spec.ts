// Import playwright module
import { test, expect } from '@playwright/test';

console.log('test execution started');
// Write a test
test('Visible Comparison',{tag: ['@SmokeTesting']}, async ({ page }) => {
   // Go to URL
    await page.goto('https://www.github.com/login');

    await expect(page).toHaveScreenshot('GitHubLoginPage.png');

    await page.locator('#login_field').fill('Playwright wiht typescript');

    await expect(page).toHaveScreenshot('GitHubLoginPage.png');
});


test('Element Visible Comparison',{tag: ['@SmokeTesting']}, async ({ page }) => {
   // Go to URL
    await page.goto('https://www.github.com/login');

    await expect(page).toHaveScreenshot('GitHubLoginPage.png');

    const element = page.locator('[class="authentication-body authentication-body--with-form new-session"]');

    await expect(element).toHaveScreenshot('GitHubLoginForm.png');

    await page.locator('#login_field').fill('Playwright wiht typescript');
    await expect(element).toHaveScreenshot('GitHubLoginForm.png');


});