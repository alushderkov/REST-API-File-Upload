import { CsvRow } from "../models/product_list_representation";
import fs from "fs";
import { stringify } from 'csv-stringify'

export function calcLowPrice(product: CsvRow): string {
  let result: string;
  const priceValue: number = parseFloat( product.price.replace('$', '') );

  result = (priceValue * 0.85).toFixed(2);

  return `${result}$`;
}

export async function writeToCsvFile(filePath: string, newList: Array<CsvRow>): Promise<void> {

  return new Promise( (resolve: any, reject: any) => {
    const csvStringifier = stringify({
      header: true,
      columns: ['id', 'name', 'price', 'description'],
    });

    const writeStream = fs.createWriteStream(filePath);

    writeStream.on( 'finish', () => resolve() );
    writeStream.on( 'error', (error: Error) => reject(error) );

    csvStringifier.pipe(writeStream);
    newList.forEach( (row: CsvRow) => csvStringifier.write(row) );

    csvStringifier.end();
  });
}