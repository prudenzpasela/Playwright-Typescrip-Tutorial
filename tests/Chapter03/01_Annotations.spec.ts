// Import playwright module
import { test, expect } from '@playwright/test';


// Write a test
test('Test 1', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.youtube.com/@testerstalk');

// Element Screenshot
await page.locator('#page-header-container').screenshot({path : './screenshots/ElementScreenshot.png'});

// Page Screenshot
await page.screenshot({path : './screenshots/PageScreenshot.png'});

// Full Page Screenshot
await page.screenshot({path : './screenshots/FullPageScreenshot.png', fullPage: true});
});

test.skip('Test 2', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.youtube.com/@testerstalk');

// Element Screenshot
await page.locator('#page-header-container').screenshot({path : './screenshots/ElementScreenshot.png'});

// Page Screenshot
await page.screenshot({path : './screenshots/PageScreenshot.png'});

// Full Page Screenshot
await page.screenshot({path : './screenshots/FullPageScreenshot.png', fullPage: true});
});

test.only('Test 3', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.youtube.com/@testerstalk');

// Element Screenshot
await page.locator('#page-header-container').screenshot({path : './screenshots/ElementScreenshot.png'});

// Page Screenshot
await page.screenshot({path : './screenshots/PageScreenshot.png'});

// Full Page Screenshot
await page.screenshot({path : './screenshots/FullPageScreenshot.png', fullPage: true});
});