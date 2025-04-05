import { IncomingMessage, ServerResponse } from "http";
import { Route } from "../route_interface";
import { Controller } from "../../controller/Controller";

export const arrayProcessingRoute: Route = {

  url: "api/process_array",
  method: "PUT",

  controller: function(req: IncomingMessage, res: ServerResponse): void {
    Controller.arrayController(req, res);
  },

  isMatchesWithURL: function(reqURL: string): boolean {
    let result: boolean = false;

    if (this.url === reqURL) {
      result = true;
    }

    return result;
  }
}