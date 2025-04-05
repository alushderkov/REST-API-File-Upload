import { mimeTypes } from "../../config/content_types";
export function throwError(res: any, error: any): void {
  console.log(error);
  res.statusCode = 404;
  res.setHeader("Content-Type", mimeTypes[".json" as keyof typeof mimeTypes]);
  res.end( JSON.stringify( {message: error} ) );
}