import {IncomingMessage} from "http";
import { deleteFile, copyFile, moveFile, parseQuery } from "../services/file_processing";

export async function deleteByURL(req: IncomingMessage): Promise<string> {

  return new Promise( (resolve: any, reject: any) => {
    const { path } = parseQuery(req.url);

    if (path) {
      const whenDeleted: Promise<void> = deleteFile(path);

      whenDeleted.then(
        () => { resolve(`File "${path}" was successfully deleted`); },
        error=> reject(error)
      );
    } else {
      reject( new Error(`Path "${path}" is incorrect`) );
    }

  });
}

export async function moveByURL(req: IncomingMessage): Promise<string> {

  return new Promise( (resolve: any, reject: any) => {
    const { from, to } = parseQuery(req.url);

    if (from && to) {
      const whenMoved: Promise<void> = moveFile(from, to);

      whenMoved.then(
        () => { resolve(`File copied from "${from}" to "${to}"`); },
        error => reject(error)
      );
    } else {
      reject( new Error(`Paths "${from}" and "${to}" are incorrect`) );
    }
  });
}


export async function copyByURL(req: IncomingMessage): Promise<string> {

  return new Promise( (resolve: any, reject: any) => {
    const { from, to } = parseQuery(req.url);

    if (from && to) {
      const whenCopied: Promise<void> = copyFile(from, to);

      whenCopied.then(
        () => { resolve(`File copied from "${from}" to "${to}"`); },
        error => reject(error)
      );
    } else {
      reject( new Error(`Paths "${from}" and "${to}" are incorrect`) );
    }
  });
}