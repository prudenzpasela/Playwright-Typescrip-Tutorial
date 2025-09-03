// Import playwright module
import { test, expect } from '@playwright/test';

const searchKeywords = ['Playwright by Testers Talk', 'Cypress by Testers Talk', 'API Testing by Testers Talk']

for (const searchKeyword of searchKeywords) {
// Write a test
test(`My First Playwright TypeScript Test ${searchKeyword}`, async ({ page }) => {
    // Go to URL
    await page.goto('https://www.google.com/');

    // Search with keywords
    await page.getByLabel('Search', { exact: true }).fill(searchKeyword);
    await page.getByLabel('Search', { exact: true }).press('Enter');

    // Click on the playlist
    await page.getByRole('link', { name: searchKeyword }).first().click();

    // Validate webpage title
    await expect(page).toHaveTitle(searchKeyword + '☑️ - YouTube');
});
}
