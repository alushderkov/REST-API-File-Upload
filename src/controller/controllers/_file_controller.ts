import { IncomingMessage, ServerResponse } from "http";
import { throwError } from "./error";
import { setExtension } from "../../config/set_extension";
import {copyByURL, deleteByURL, moveByURL} from "../../models/file_representation";

export function workWithFile(req: IncomingMessage, res: ServerResponse): void {

  function deleteFile(ext: string): void {
    const contentType: string = setExtension(ext);
    const whenFileWasDeleted: Promise<string> = deleteByURL(req);
    let message: string;

    whenFileWasDeleted.then(
      result => sendResponse(result, contentType, 200),
      error => {
        throwError(res, error, 500);
      }
    );
  }

  function moveFile(ext: string): void {
    const contentType: string = setExtension(ext);
    const whenFileWasMoved: Promise<string> = moveByURL(req);
    let message: string;

    whenFileWasMoved.then(
      result => sendResponse(result, contentType, 201),
      error => {
        throwError(res, error, 501);
      }
    );
  }

  function copyFile(ext: string): void {
    const contentType: string = setExtension(ext);
    const whenFileWasCopied: Promise<string> = copyByURL(req);
    let message: string;

    whenFileWasCopied.then(
      result => sendResponse(result, contentType, 202),
      error => {
        throwError(res, error, 502);
      }
    );
  }

  function sendResponse(message: string, contentType: string, statusCode: number) {
    res.statusCode = statusCode;
    res.setHeader("Content-Type", contentType);
    res.end( JSON.stringify(message) );
  }

  switch (req.method) {
    case "DELETE": deleteFile(".json");
    break;

    case "PUT": moveFile(".json");
    break;

    case "POST": copyFile(".json");
    break;

    default: console.log(`${req.method} request was given`);
  }
}