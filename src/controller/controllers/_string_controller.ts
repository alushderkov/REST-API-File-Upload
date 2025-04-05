import { IncomingMessage, ServerResponse } from "http";

export function processString(req: IncomingMessage, res: ServerResponse): void {

  function getString(): void {

  }

  function updateString(): void {

  }

  switch (req.method) {
    case "GET": getString();
    break;

    case "PUT": updateString();
    break;

    default: console.log(`${req.method} request was given`);
  }
}