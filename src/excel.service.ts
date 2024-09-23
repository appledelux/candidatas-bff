import { Injectable } from '@nestjs/common';
import * as xlsx from 'xlsx';

@Injectable()
export class ExcelService {
  readExcelFile(filePath: string) {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
    return data;
  }

  writeExcelFile<T>(filePath: string, data: T) {
    throw new Error('Method not implemented.');
  }
}
