// Import playwright module
import { test, expect } from '@playwright/test';


// Write a test
test('My First Playwright TypeScript Test', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.google.com/');

    // Search with keywords
    await page.getByLabel('Search', { exact: true }).fill('Playwright by testers talk');
    await page.getByLabel('Search', { exact: true }).press('Enter');

    // Click on the playlist
    await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).first().click();

    // Validate webpage title
    await expect(page).toHaveTitle('Playwright TypeScript Test - YouTube');
});

