// Import playwright module
import { test, expect } from '@playwright/test';


// Write a test
test('Timeouts in playwright', async ({ page }) => {
    // specify individual timeout for the test
    test.setTimeout(1 * 60 * 1000); // 1 minute
  
    // Go to URL
    await page.goto('https://www.google.com/');

    // Search with keywords
    await page.getByLabel('Search', { exact: true }).fill('Playwright by testers talk');
    await page.getByLabel('Search', { exact: true }).press('Enter');

    // Click on the playlist
    await page.getByRole('link', { name: 'Playwright byy Testers Talk☑️ YouTube · Testers Talk 25.5K+ followers' }).first().click({timeout: 5000});

    // Validate webpage title
    await expect(page).toHaveTitle('Playwright byy Testers Talk☑️ - YouTube', {timeout: 5000}); // individual expect timeout});

    //await page.waitForTimeout(60000)
});

