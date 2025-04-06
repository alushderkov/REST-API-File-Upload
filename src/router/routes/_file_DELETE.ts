import { IncomingMessage, ServerResponse } from "http";
import { Route } from "../route_interface";
import { Controller } from "../../controller/Controller";
import {isMatchesWithRegExp} from "../check_url";

export const fileDeleteRoute: Route = {

  url: /^\/api\/files\?path=[^&]+$/i,
  method: "DELETE",

  controller: function(req: IncomingMessage, res: ServerResponse): void {
    Controller.fileController(req, res);
  },

  isMatchesWithURL: function(reqURL: string): boolean {
    return isMatchesWithRegExp(reqURL, this.url);
  }
}