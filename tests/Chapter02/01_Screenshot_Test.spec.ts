// Import playwright module
import { test, expect } from '@playwright/test';

console.log('test execution started');
// Write a test
test('Capture Screenshots in Playwright', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.youtube.com/@testerstalk');

// Element Screenshot
await page.locator('#page-header-container').screenshot({path : './screenshots/ElementScreenshot.png'});

// Page Screenshot
await page.screenshot({path : './screenshots/PageScreenshot.png'});

// Full Page Screenshot
await page.screenshot({path : './screenshots/FullPageScreenshot.png', fullPage: true});

});

