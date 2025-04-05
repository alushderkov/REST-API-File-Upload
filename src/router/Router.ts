import { IncomingMessage, ServerResponse } from "http";
import {Route} from "./Route";
import { routes } from "./routes/_all_routes";


export class Router {

  static accept(req: IncomingMessage, res: ServerResponse): void {
    const sReqUrl: string = String(req.url);

    const route: Route | undefined = routes.find( route => {
      return route.isMatchesWithURL(sReqUrl) && route.method === req.method;
    });

    if (route) {
      route.controller(req, res);
    }
  }
}