import { IncomingMessage, ServerResponse } from "http";
import { processArray } from "./controllers/_array_controller";
import { workWithFile } from "./controllers/_file_controller";
import { accessProductList } from "./controllers/_product_list_controller";

export class Controller {

  static arrayController(req: IncomingMessage, res: ServerResponse): void {
    processArray(req, res, ".json");
  };

  static fileController(req: IncomingMessage, res: ServerResponse): void {
    workWithFile(req, res);
  };

  static productListController(req: IncomingMessage, res: ServerResponse): void {
    accessProductList(req, res);
  };

}