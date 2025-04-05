import { IncomingMessage, ServerResponse } from "http";
type TUrl = string | RegExp;
type TRequest = "GET" | "POST" | "PUT" | "COPY" | "DELETE" | "MOVE";

export interface Route {
  url: TUrl;
  method: TRequest;
  controller(req: IncomingMessage, res: ServerResponse): void;
  isMatchesWithURL(reqUrl: string): boolean;
}