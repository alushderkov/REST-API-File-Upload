import { IncomingMessage, ServerResponse } from "http";
import { Route } from "../Route";
import { Controller } from "../../controller/Controller";

export const fileMoveRoute: Route = {

  url: "api/move_file/",
  method: "MOVE",

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