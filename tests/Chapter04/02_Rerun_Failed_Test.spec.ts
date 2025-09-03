// Import playwright module
import { test, expect } from '@playwright/test';

// To run only failed tests from the last run, use the following command:
// npx playwright test --last-failed

// Write a test
test('test 1', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.google.com/');

});

// Write a test
test('test 2', async ({ page }) => {

    // Validate webpage title
    //await true.toBe(true);
});

// Write a test
test('test 3', async ({ page }) => {
    // Validate webpage title
   // await true.toBe(true);
});
