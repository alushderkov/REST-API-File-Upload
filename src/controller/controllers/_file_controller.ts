import { IncomingMessage, ServerResponse } from "http";

export function workWithFile(req: IncomingMessage, res: ServerResponse): void {

  function copyFile(): void {

  }

  function deleteFile(): void {

  }

  function moveFile(): void {

  }

  switch (req.method) {
    case "COPY": copyFile();
    break;

    case "DELETE": deleteFile();
    break;

    case "MOVE": moveFile();
    break;

    default: console.log(`${req.method} request was given`);
  }
}