import { IncomingMessage, ServerResponse } from "http";
import { Route } from "../Route";
import { Controller } from "../../controller/Controller";

export const getProductListRoute: Route = {

  url: "api/product_list/",
  method: "GET",

  controller: function(req: IncomingMessage, res: ServerResponse): void {
    Controller.productListController(req, res);
  },

  isMatchesWithURL: function(reqURL: string): boolean {
    let result: boolean = false;

    if (this.url === reqURL) {
      result = true;
    }

    return result;
  }
}