// Import playwright module
import { test, expect } from '@playwright/test';


// Write a test
test('Locators in Playwright', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.google.com');

// Get by Role
// await page.getByRole('link', { name: 'Sign in' }).click();

// Get by Label
//await page.getByLabel('Homepage', {exact: true}).first().click();

// Get by alt text
//await page.getByAltText("View BakkappaN's full-sized avatar").click();

// Get by test id
//await page.getByTestId("projects").first().click();

// Get by text
//await page.getByText('Sign up').click();



// Get by placeholder, xpath, css selectors
//await page.goto('https://www.youtube.com/@testerstalk');

// Placeholder
//await page.getByPlaceholder('Search').fill('testers talk');

// Xpath //input[@name="search_query"]
//await page.locator('//input[@name="search_query"]').first().fill('testers talk');

// CSS Selector input[name="search_query"]
//await page.locator('input[name="search_query"]').first().fill('testers talk');

// Title
await page.getByTitle('Search').fill('playwright by testers talk');

});