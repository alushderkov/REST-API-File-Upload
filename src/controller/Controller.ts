import { IncomingMessage, ServerResponse } from "http";
import { processArray } from "./controllers/_array_controller";
import { workWithFile } from "./controllers/_file_controller";
import { accessProductList } from "./controllers/_product_list_controller";
import { processNumbers } from "./controllers/_numbers_controller";
import { processString } from "./controllers/_string_controller";
import { sortTowns } from "./controllers/_towns_controller";

export class Controller {

  static arrayController(req: IncomingMessage, res: ServerResponse): void {
    processArray(req, res);
  };

  static fileController(req: IncomingMessage, res: ServerResponse): void {
    workWithFile(req, res);
  };

  static productListController(req: IncomingMessage, res: ServerResponse): void {
    accessProductList(req, res);
  };

  static numbersController(req: IncomingMessage, res: ServerResponse): void {
    processNumbers(req, res);
  };

  static stringController(req: IncomingMessage, res: ServerResponse): void {
    processString(req, res);
  }

  static townsController(req: IncomingMessage, res: ServerResponse): void {
    sortTowns(req, res);
  }

}