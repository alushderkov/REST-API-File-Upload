export function getElementByIndexes( array: Array<any>, indexes: Array<number> ): any {
  let result: any;

  try {
    let current: Array<any> = array;

    for (const index of indexes) {
      current = current[index];
    }

    result = current;

  } catch {
    throw new Error('Invalid array indexes');
  }

  return result;
}

export function setElementByIndexes(array: Array<any>, indexes: Array<number>, value: any): void {

  try {
    let current: Array<any> = array;

    for (let i: number = 0; i < indexes.length - 1; i++) {
      current = current[indexes[i]];
    }

    current[ indexes[indexes.length - 1] ] = value;

  } catch {
    throw new Error('Invalid array indexes');
  }
}

export function parseIndexes(url: string): Array<number> {
  const result = url.match( /\[(\d+)\]/g )!;

  return result.map( match => parseInt( match.slice(1, -1) ) );
}