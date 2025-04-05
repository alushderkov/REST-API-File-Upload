import path from "path";
import { IncomingMessage, ServerResponse } from "http";
import { CsvRow, parseCsv } from "../../models/product_list_representation";
import { throwError } from "./error";
import { setExtension } from "../../config/set_extension";


const listCsvPath: string = path.join(__dirname, "list.csv");

export function accessProductList(req: IncomingMessage, res: ServerResponse): void {

  function getProductList(ext: string): void {
    const contentType = setExtension(ext);

    const whenCsvGot: Promise< CsvRow[] > = parseCsv(listCsvPath);
    let products: Array<CsvRow>;

    whenCsvGot.then(

      result => {
        products = result;

        res.statusCode = 200;
        res.setHeader("Content-Type", contentType);
        res.end( JSON.stringify(products) );
      },
      error => {
        throwError(res, error);
      }
    );
  }

  function addToProductList(): void {

  }

  switch (req.method) {
    case "GET": getProductList(".json");
    break;

    case "POST": addToProductList();
    break;

    default: console.log(`${req.method} request was given`);
  }
}