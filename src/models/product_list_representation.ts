import fs from "fs";
import csv from "csv-parser";

export interface CsvRow {
  [key: string]: string;
}

export async function parseCsv(filePath: string): Promise< CsvRow[] > {
  return new Promise( (resolve: any, reject: any) => {
    const result: Array<CsvRow> = [];

    fs.createReadStream(filePath)
      .pipe( csv() )
      .on( "data", (row: CsvRow) => result.push(row)  )
      .on( "end", () => resolve(result) )
      .on( "error", (error) => reject(error) )
      .on("close", () => console.log("CSV stream closed"));
  });
}