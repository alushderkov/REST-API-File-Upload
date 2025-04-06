import { promises as fs } from 'fs';
import path from 'path';

type TReqUrl = string | undefined;

interface QueryParams {
  path?: string;
  from?: string;
  to?: string;
}

export async function deleteFile(filePath: string): Promise<void> {

  try {
    await fs.access(filePath);
    await fs.unlink(filePath);

  } catch (error) {
    throw new Error(
      `Failed to delete file: ${ error instanceof Error ? error.message : String(error) }`
    );
  }
}

export async function moveFile(sourcePath: string, destinationPath: string): Promise<void> {
  try {
    await fs.access(sourcePath);
    await fs.mkdir( path.dirname(destinationPath), { recursive: true } );
    await fs.rename(sourcePath, destinationPath);

  } catch (error) {
    throw new Error(
      `Failed to move file: ${ error instanceof Error ? error.message : String(error) }`
    );
  }
}

export async function copyFile(sourcePath: string, destinationPath: string): Promise<void> {
  try {
    await fs.access(sourcePath);
    await fs.mkdir( path.dirname(destinationPath), { recursive: true } );
    await fs.copyFile(sourcePath, destinationPath);

  } catch (error) {
    throw new Error(
      `Failed to copy file: ${ error instanceof Error ? error.message : String(error) }`
    );
  }
}

export function parseQuery(url: TReqUrl): QueryParams {

  function setIfExists(
    params: URLSearchParams, target: QueryParams, ...keys: (keyof QueryParams)[]
  ) {
    keys.forEach(k => params.has(k) && (target[k] = params.get(k)!));
  }

  let result: QueryParams = {};

  if (url) {

    try {
      const params = new URLSearchParams( url.split('?')[1] );
      setIfExists(params, result, "path", "from", "to");

    } catch {}
  }

  return result;
}