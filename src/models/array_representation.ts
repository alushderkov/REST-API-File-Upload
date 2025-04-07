import { IncomingMessage } from "http";

import { getElementByIndexes,
         parseIndexes,
         setElementByIndexes }
from "../services/array_calculations";

import { parseRequestBody,
         readArrayFromFile,
         writeArrayToFile }
from "../services/array_processing";

export async function modifyArrayElement(req: IncomingMessage, filePath: string):
  Promise<{ oldValue: any, newValue: any }> {

  return new Promise( async (resolve: any, reject: any) => {
    const indexes: Array<number> = parseIndexes( req.url! );

    if (indexes.length === 0) {
      reject(new Error('Invalid indexes format. Use [1][2][3]'));
      return;
    }

    try {
      const newValue: any = await parseRequestBody(req);
      const array: any = await readArrayFromFile(filePath);
      const oldValue: any = getElementByIndexes(array, indexes);

      setElementByIndexes(array, indexes, newValue);
      await writeArrayToFile(filePath, array);

      resolve({ oldValue, newValue });

    } catch (error) {
      reject(
        error instanceof Error ? error : new Error( String(error) )
      );
    }
  });
}