// Import playwright module
import { test, expect } from '@playwright/test';

// Import CSV file
import {parse} from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';

// Define test data structure

type TestRecords = {
    Skill1: string,
    Skill2: string
}

const records = parse(
    fs.readFileSync(path.join(__dirname, '../../test-data/qa/testdata.csv')),
    {
        columns: true,
        skip_empty_lines: true
    }
) as TestRecords[];

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


