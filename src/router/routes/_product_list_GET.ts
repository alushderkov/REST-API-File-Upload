import { IncomingMessage, ServerResponse } from "http";
import { Route } from "../route_interface";
import { Controller } from "../../controller/Controller";
import {isMatchesWithString} from "../../config/program_settings/check_url";

export const getProductListRoute: Route = {

  url: "/api/product_list/",
  method: "GET",

  controller: function(req: IncomingMessage, res: ServerResponse): void {
    Controller.productListController(req, res);
  },

  isMatchesWithURL: function(reqURL: string): boolean {
    return isMatchesWithString(reqURL, this.url);
  }
}