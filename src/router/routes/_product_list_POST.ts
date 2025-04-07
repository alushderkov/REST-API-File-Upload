import { IncomingMessage, ServerResponse } from "http";
import { Route } from "../../config/program_settings/route_interface";
import { Controller } from "../../controller/Controller";
import {isMatchesWithRegExp} from "../../config/program_settings/check_url";

export const addToProductListRoute: Route = {

  url: /^\/api\/product_list\/[a-zA-Z0-9\- ]+,\d+\$,[a-zA-Z0-9 \-]+$/,
  method: "POST",

  controller: function(req: IncomingMessage, res: ServerResponse): void {
    Controller.productListController(req, res);
  },

  isMatchesWithURL: function(reqURL: string): boolean {
    return isMatchesWithRegExp(reqURL, this.url);
  }
}