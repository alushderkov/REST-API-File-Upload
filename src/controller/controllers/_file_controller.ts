import { IncomingMessage, ServerResponse } from "http";
import { throwError } from "../../config/program_settings/error";
import { setExtension } from "../../config/program_settings/set_extension";
import { copyByURL, deleteByURL, moveByURL } from "../../models/file_representation";

export function workWithFile(req: IncomingMessage, res: ServerResponse): void {

  switch (req.method) {
    case "DELETE": deleteFile(".json");
      break;

    case "PUT": moveFile(".json");
      break;

    case "POST": copyFile(".json");
      break;

    default: console.log(`${req.method} request was given`);
  }

  function deleteFile(ext: string): void {
    const whenFileWasDeleted: Promise<string> = deleteByURL(req);

    whenFileWasDeleted.then(
      result => sendResponse(result, ext, 200),
      error => {
        throwError(res, error, 500, ext);
      }
    );
  }

  function moveFile(ext: string): void {
    const whenFileWasMoved: Promise<string> = moveByURL(req);

    whenFileWasMoved.then(
      result => sendResponse(result, ext, 201),
      error => {
        throwError(res, error, 501, ext);
      }
    );
  }

  function copyFile(ext: string): void {
    const whenFileWasCopied: Promise<string> = copyByURL(req);

    whenFileWasCopied.then(
      result => sendResponse(result, ext, 202),
      error => {
        throwError(res, error, 502, ext);
      }
    );
  }

  function sendResponse(message: string, ext: string, statusCode: number) {
    res.statusCode = statusCode;
    res.setHeader( "Content-Type", setExtension(ext) );
    res.end( JSON.stringify(message) );
  }
}