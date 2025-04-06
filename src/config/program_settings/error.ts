import { setExtension } from "./set_extension";

export function throwError(res: any, error: any, statusCode: number, ext: string): void {

  console.log(error);

  res.statusCode = statusCode;
  res.setHeader( "Content-Type", setExtension(ext) );
  res.end( JSON.stringify( {message: error} ) );
}