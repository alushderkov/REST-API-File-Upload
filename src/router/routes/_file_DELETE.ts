import { IncomingMessage, ServerResponse } from "http";
import { Route } from "../route_interface";
import { Controller } from "../../controller/Controller";

export const fileDeleteRoute: Route = {

  url: "api/delete_file/",
  method: "DELETE",

  controller: function(req: IncomingMessage, res: ServerResponse): void {
    Controller.fileController(req, res);
  },

  isMatchesWithURL: function(reqURL: string): boolean {
    let result: boolean = false;

    if (this.url === reqURL) {
      result = true;
    }

    return result;
  }
}