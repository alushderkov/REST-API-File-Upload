import {TUrl} from "../../router/route_interface";

export function isMatchesWithString(reqURL: string, validURL: TUrl): boolean {
  let result: boolean = false;

  if (validURL === reqURL) {
    result = true;
  }

  return result;
}

export function isMatchesWithRegExp(reqURL: string, validURL: TUrl): boolean {
  let result: boolean = false;

  if ( reqURL.match(validURL) ) {
    result = true;
  }

  return result;
}