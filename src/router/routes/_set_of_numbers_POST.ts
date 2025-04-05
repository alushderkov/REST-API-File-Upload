import { IncomingMessage, ServerResponse } from "http";
import { Route } from "../Route";
import { Controller } from "../../controller/Controller";

export const numbersProcessingRoute: Route = {

  url: "api/numbers/",
  method: "POST",

  controller: function(req: IncomingMessage, res: ServerResponse): void {
    Controller.numbersController(req, res);
  },

  isMatchesWithURL: function(reqURL: string): boolean {
    let result: boolean = false;

    if (this.url === reqURL) {
      result = true;
    }

    return result;
  }
}