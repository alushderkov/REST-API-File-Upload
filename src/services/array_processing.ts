import { promises as fs } from 'fs';
import { IncomingMessage } from 'http';

export async function readArrayFromFile(filePath: string): Promise< Array<any> > {
  let result: Array<any> = [];

  try {
    const data = await fs.readFile(filePath, 'utf-8');
    result = JSON.parse(data);

  } catch (error) {

    throw new Error(
      `Failed to read array: ${ error instanceof Error ? error.message : String(error) }`
    );
  }

  return result;
}

export async function writeArrayToFile( filePath: string, array: Array<any> ): Promise<void> {
  try {
    await fs.writeFile( filePath, JSON.stringify(array, null, 2) );

  } catch (error) {

    throw new Error(
      `Failed to write array: ${ error instanceof Error ? error.message : String(error) }`
    );
  }
}

export function parseRequestBody(req: IncomingMessage): Promise<any> {

  return new Promise( (resolve: any, reject: any) => {
    let body = '';

    req
      .on('data', chunk => body += chunk)
      .on('end', () => {

        try {
          resolve( JSON.parse(body) );

        } catch (error) {
          reject(new Error(
            `Invalid JSON body: ${ error instanceof Error ? error.message : String(error) }`
          ));
        }
      })
      .on('error', reject);
  });
}