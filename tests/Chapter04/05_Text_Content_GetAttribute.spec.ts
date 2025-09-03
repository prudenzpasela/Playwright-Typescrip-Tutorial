// Import playwright module
import { test, expect } from '@playwright/test';

    // Write a test
    test('Get text and attribute', async ({ page }) => {

    // Go to URL
    await page.goto('https://www.github.com/BakkappaN');

    const name = await page.locator('[itemprop="name"]').textContent();
    const finalname = name?.trim();
    console.log(`Name is: ${finalname}`);
    expect(finalname).toBe('Testers Talk');

    const attributevalue = await page.getByTestId('repositories').first().getAttribute('data-selected-links');
    console.log(`Attribute value is: ${attributevalue}`);

    });


