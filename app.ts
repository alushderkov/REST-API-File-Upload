import http from "http";
import { IncomingMessage, ServerResponse } from "http";
import { Router } from "./src/router/Router";

const PORT: number = +(process.env.PORT || 5500);

function startServer(req: IncomingMessage, res: ServerResponse): void {
  Router.accept(req, res);
}

function isListening(): void {
  console.log(`The server was started on the port ${PORT}`);
}

const app = http.createServer(startServer)
  .listen(PORT, isListening);

