// Import playwright module
import { test, expect } from '@playwright/test';


// Write a test
test('Recorded Cursor Test', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.google.com/');

    // Search with keywords
    await page.getByLabel('Search', { exact: true }).fill('Playwright by testers talk');
    await page.getByLabel('Search', { exact: true }).press('Enter');

    // Click on the playlist
    await page.getByRole('link', { name: 'Playwright by Testers Talk☑️ YouTube · Testers Talk 25.5K+ followers' }).first().click();

    // Validate webpage title
    await expect(page).toHaveTitle('Playwright by Testers Talk☑️ - YouTube');

        await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();
        await expect(page.getByRole('link', { name: '#2 Playwright API Testing' })).toBeVisible();
        await expect(page.getByLabel('#1 Playwright Tutorial Full').locator('#video-title')).toContainText('#1 Playwright Tutorial Full Course 2024 | Playwright Testing Tutorial');
        await expect(page.getByLabel('#2 Playwright API Testing').locator('#video-title')).toContainText('#2 Playwright API Testing Tutorial Crash Course 2024');

});

