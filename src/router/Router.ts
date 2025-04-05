import { IncomingMessage, ServerResponse } from "http";
import {Route} from "./route_interface";
import { routes } from "./routes/_all_routes";


export class Router {

  static accept(req: IncomingMessage, res: ServerResponse): void {
    const sReqUrl: string = String(req.url);

    const route: Route | undefined = routes.find(route => {
      return route.isMatchesWithURL(sReqUrl) && route.method === req.method;
    });

    if (route) {
      route.controller(req, res);
    } else {
      console.log("There are no such routes");
    }
  }
}