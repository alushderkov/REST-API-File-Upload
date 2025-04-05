import {mimeTypes} from "./content_types";

export function setExtension(ext: string): string {
  return ext in mimeTypes ?
    mimeTypes[ext as keyof typeof mimeTypes] : "application/octet-stream";
}