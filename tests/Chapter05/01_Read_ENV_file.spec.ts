// Import playwright module
import { test, expect } from '@playwright/test';


// Write a test
test('Read ENV File config', async ({ page }) => {
    // Go to URL
    await page.goto(`${process.env.GOOGLE_URL}`);

    // Search with keywords
    await page.getByLabel('Search', { exact: true }).fill('Playwright by testers talk');
    await page.getByLabel('Search', { exact: true }).press('Enter');

    // Click on the playlist
    await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).first().click();

    // Validate webpage title
    await expect(page).toHaveTitle('Playwright by Testers Talk☑️ - YouTube');
});

