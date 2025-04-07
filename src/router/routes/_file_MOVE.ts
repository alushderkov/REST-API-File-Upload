import { IncomingMessage, ServerResponse } from "http";
import { Route } from "../../config/program_settings/route_interface";
import { Controller } from "../../controller/Controller";
import {isMatchesWithRegExp} from "../../config/program_settings/check_url";

export const fileMoveRoute: Route = {

  url: /^\/api\/files\/move\?from=[^&]+&to=[^&]+$/i,
  method: "PUT",

  controller: function(req: IncomingMessage, res: ServerResponse): void {
    Controller.fileController(req, res);
  },

  isMatchesWithURL: function(reqURL: string): boolean {
    return isMatchesWithRegExp(reqURL, this.url);
  }
}