// Import playwright module
import { test, expect } from '@playwright/test';

    // Write a test
    test('Checkbox and Radio button', async ({ page }) => {

    // Go to URL
    await page.goto('https://jqueryui.com/checkboxradio/');

   const iframe = await page.frameLocator('[class="demo-frame"]');

   // check if radio is unchecked
    await expect(iframe.locator('[for="radio-1"]')).not.toBeChecked();

    // check the radio button
    await iframe.locator('[for="radio-1"]').check();

    // check if radio is unchecked
    await expect(iframe.locator('[for="radio-1"]')).toBeChecked();

    });