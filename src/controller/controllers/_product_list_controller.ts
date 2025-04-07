import path from "path";
import { IncomingMessage, ServerResponse } from "http";
import { addProduct, parseCsv, CsvRow } from "../../models/product_list_representation";
import { throwError } from "../../config/program_settings/error";
import { setExtension } from "../../config/program_settings/set_extension";
import { calcLowPrice } from "../../services/product_list_processing";


const listCsvPath: string = path.join(__dirname, "../../data/list.csv");

export function accessProductList(req: IncomingMessage, res: ServerResponse): void {

  switch (req.method) {
    case "GET": getProductList(".json");
      break;

    case "POST": addToProductList(".json");
      break;

    default: console.log(`${req.method} request was given`);
  }

  function getProductList(ext: string): void {
    const whenCsvGot: Promise<CsvRow[]> = parseCsv(listCsvPath);
    let products: Array<CsvRow>;

    whenCsvGot.then(
      result => {

        products = result.map(product =>
          ( { ...product, lowPrice: calcLowPrice(product) } )
        );

        res.statusCode = 200;
        res.setHeader( "Content-Type", setExtension(ext) );
        res.end( JSON.stringify(products) );
      },
      error => {
        throwError(res, error, 500, ext);
      }
    );
  }

  function addToProductList(ext: string): void {

    if (req.url) {
      const productData: string = req.url.replace('/api/product_list/', '');
      const [name, price, description] = productData.split(',');

      const takenProduct = { name, price, description };
      const whenProductAdded: Promise<CsvRow> = addProduct(listCsvPath, takenProduct);

      whenProductAdded.then(
        result => {
          const newProduct: CsvRow = result;

          res.statusCode = 201;
          res.setHeader( "Content-Type", setExtension(ext) );
          res.end( JSON.stringify(newProduct) );
        },
        error => {
          throwError(res, error, 501, ext);
        }
      );

    } else {
      console.log(`There is no request ${req.url}`)
    }
  }
}