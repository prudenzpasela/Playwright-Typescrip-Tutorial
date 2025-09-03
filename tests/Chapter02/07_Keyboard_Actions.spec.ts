// Import playwright module
import { test, expect } from '@playwright/test';


// Write a test
test('Handling Keyboard Actions', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.google.com');

// Enter action from keyboard
// await page.getByLabel('Search', {exact: true}).first().click();
// await page.getByLabel('Search', {exact: true}).first().fill('Playwright by testers talk');
// await page.getByLabel('Search', {exact: true}).first().press('Enter');

// Selecting and deleting from keyboard
// await page.getByLabel('Search', {exact: true}).first().click();
// await page.keyboard.press('Control+A');
// await page.keyboard.press('Delete');

// Press tab and enter from the keyboard
await page.getByLabel('Search', {exact: true}).first().click();
await page.keyboard.press('Tab');
await page.keyboard.press('Enter');

});

