import { IncomingMessage, ServerResponse } from "http";

export function accessProductList(req: IncomingMessage, res: ServerResponse): void {

  function getProductList(): void {

  }

  function addToProductList(): void {

  }

  switch (req.method) {
    case "GET": getProductList();
    break;

    case "POST": addToProductList();
    break;

    default: console.log(`${req.method} request was given`);
  }
}