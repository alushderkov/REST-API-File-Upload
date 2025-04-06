import fs from "fs";
import csv from "csv-parser";
import { v4 as uuid4 } from "uuid";
import { writeToCsvFile } from "../services/product_list_processing";

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
      .on( "error", (error: Error) => reject(error) )
      .on("close", () => console.log("CSV stream closed"));
  });
}

export async function addProduct(filePath: string, product: {}): Promise<CsvRow> {

  return new Promise( (resolve: any, reject: any) => {
    const newProduct: CsvRow = { id: uuid4(), ...product };
    let newList: Array<CsvRow> = [];

    fs.createReadStream(filePath)
      .pipe( csv() )
      .on("data", (row: CsvRow) => newList.push(row))
      .on("end", () => {
        newList.push(newProduct);

        const whenWritten: Promise<void> = writeToCsvFile(filePath, newList);

        whenWritten.then(
          () => resolve(newProduct),
          error => reject(error)
        );
      })
      .on("error", (error: Error) => reject(error));
  });
}