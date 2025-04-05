import { IncomingMessage, ServerResponse } from "http";
import { Route } from "../Route";
import { Controller } from "../../controller/Controller";

export const sortTownsRoute: Route = {

  url: "api/towns/",
  method: "GET",

  controller: function(req: IncomingMessage, res: ServerResponse): void {
    Controller.townsController(req, res);
  },

  isMatchesWithURL: function(reqURL: string): boolean {
    let result: boolean = false;

    if (this.url === reqURL) {
      result = true;
    }

    return result;
  }
}