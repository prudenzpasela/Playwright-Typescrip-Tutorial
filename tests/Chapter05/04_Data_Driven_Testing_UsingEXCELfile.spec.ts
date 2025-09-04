// Import playwright module
import { test, expect } from '@playwright/test';

// Import EXCEL file
import path from 'path';
import { readExcelFile } from '../../src/Utils/excelhelper';
import { read } from 'fs';

const filepath = path.join(__dirname, '../../test-data/qa/testdata.xlsx');
const records = readExcelFile(filepath);

for (const record of records){
    // Write a test
test(`Data Driven Testing Using CSV File ${record.Skill2}`, async ({ page }) => {
    // Go to URL
    await page.goto('https://www.google.com/');

    // Search with keywords
    await page.getByLabel('Search', { exact: true }).fill(record.Skill2);
    await page.getByLabel('Search', { exact: true }).press('Enter');

    // Click on the playlist
    await page.getByRole('link', { name: record.Skill2}).first().click();

    // Validate webpage title
    await expect(page).toHaveTitle(record.Skill2+'☑️ - YouTube');
});

}


