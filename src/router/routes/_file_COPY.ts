import { IncomingMessage, ServerResponse } from "http";
import { Route } from "../Route";
import { Controller } from "../../controller/Controller";

export const fileCopyRoute: Route = {

  url: "api/copy_file",
  method: "COPY",

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