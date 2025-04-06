import { mimeTypes } from "../../config/content_types";
export function throwError(res: any, error: any, statusCode: number): void {

  console.log(error);

  res.statusCode = statusCode;
  res.setHeader("Content-Type", mimeTypes[".json" as keyof typeof mimeTypes]);
  res.end( JSON.stringify( {message: error} ) );
}