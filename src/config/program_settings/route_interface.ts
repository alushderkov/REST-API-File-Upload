import { IncomingMessage, ServerResponse } from "http";
export type TUrl = string | RegExp;
type TRequest = "GET" | "POST" | "PUT" ;

export interface Route {
  url: TUrl;
  method: TRequest;
  controller(req: IncomingMessage, res: ServerResponse): void;
  isMatchesWithURL(reqUrl: string): boolean;
}