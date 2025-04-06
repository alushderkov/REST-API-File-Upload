import { IncomingMessage, ServerResponse } from "http";
import path from "path";
import { modifyArrayElement } from "../../models/array_representation";
import { setExtension } from "../../config/program_settings/set_extension";
import { throwError } from "../../config/program_settings/error";

const arrayFilePath: string = path.join(__dirname, "../../data/array.json");

export function processArray(req: IncomingMessage, res: ServerResponse, ext: string): void {
  const whenArrayModified: Promise< { oldValue: any, newValue: any } > =
    modifyArrayElement(req, arrayFilePath);

  whenArrayModified.then(
    ( { oldValue, newValue }: { oldValue: any, newValue: any } ) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", setExtension(ext) );
      res.end(JSON.stringify({
        status: 'success',
        oldValue,
        newValue
      }));
    },
    error => {
      throwError(res, error, 400, ext);
    }
  );
}