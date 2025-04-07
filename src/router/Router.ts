import { IncomingMessage, ServerResponse } from "http";
import { Route } from "../config/program_settings/route_interface";
import { routes } from "./routes/_all_routes";
import { setExtension } from "../config/program_settings/set_extension";


export class Router {

  static accept(req: IncomingMessage, res: ServerResponse): void {
    const sReqUrl: string = String(req.url);

    const route: Route | undefined = routes.find(route => {
      return route.isMatchesWithURL(sReqUrl) && route.method === req.method;
    });

    if (route) {
      route.controller(req, res);

    } else {
      res.statusCode = 404;
      res.setHeader( "Content-Type", setExtension(".json") );

      res.end( JSON.stringify({
        error: "Route not found",
        availableRoutes: routes.map(route => `${route.method} ${route.url}`)
      }));
    }
  }
}