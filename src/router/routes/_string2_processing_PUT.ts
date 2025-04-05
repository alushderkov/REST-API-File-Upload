import { IncomingMessage, ServerResponse } from "http";
import { Route } from "../Route";
import { Controller } from "../../controller/Controller";

export const updateStringRoute: Route = {

  url: "api/process_string/",
  method: "PUT",

  controller: function(req: IncomingMessage, res: ServerResponse): void {
    Controller.stringController(req, res);
  },

  isMatchesWithURL: function(reqURL: string): boolean {
    let result: boolean = false;

    if (this.url === reqURL) {
      result = true;
    }

    return result;
  }
}