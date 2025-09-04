// Import xlsx plugin
import * as EXCEL from 'xlsx';
import fs from 'fs';

// Define test data structure
interface TestRecord{
    Skill1: string;
    Skill2: string;
}

// Create method to read data from excel file
export function readExcelFile(filePath: string){

    // Read the excel file as a binary string
    const file = fs.readFileSync(filePath);

    // Parse into workbook
    const workbook = EXCEL.read(file);

    // Get first sheet
    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    // Convert sheet into JSON
    const rawdata: any[] = EXCEL.utils.sheet_to_json(sheet, {header: 1});

    // Conver raw data into TestRecord type
    const records: TestRecord[] = rawdata.slice(1).map((column: any[]) => ({

        Skill1: column[0],
        Skill2: column[1]
    }))
    return records;
}
