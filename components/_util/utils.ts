export const guid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export interface Obj {
  [key: string]: any;
}

export const mergeStyle = (target: Obj | undefined, style: Obj) => {
  const newTarget = target ? { ...target } : {};
  for (const key in style) {
    if (Object.prototype.hasOwnProperty.call(style, key)) {
      const element = style[key];
      if (element || element === 0) {
        newTarget[key] = element;
      }
    }
  }
  return newTarget;
};

export const twoDimensional = (
  data: any[],
  columns: number,
  span?: number | number[],
  standard = 24,
): [any[], any[]] => {
  const two: any[] = [];
  const spanTwo: any[] = [];
  const colSpan = standard / columns;
  if (!Array.isArray(data)) {
    return [two, spanTwo];
  }
  let spanArray = [];
  if (span) {
    spanArray = new Array(data.length).fill(colSpan);
    if (typeof span === 'number') {
      if (span > 0) {
        spanArray[0] = span;
      }
      if (span < 0) {
        spanArray[data.length - 1] = Math.abs(span);
      }
    }
    if (Array.isArray(span)) {
      spanArray = span.concat(spanArray.slice(span.length));
    }

    let prev = 0;
    let rowIndex = 0;
    for (let i = 0; i < spanArray.length; i++) {
      const item = spanArray[i];
      const row = [data[i]];
      const spanRow = [item];
      if (item >= 24) {
        rowIndex = two.push(row);
        spanTwo.push(spanRow);
      } else {
        if (24 - prev >= item) {
          two[rowIndex]
            ? (two[rowIndex] = two[rowIndex].concat(data[i]))
            : (rowIndex = two.push(row) - 1);
          spanTwo[rowIndex]
            ? (spanTwo[rowIndex] = spanTwo[rowIndex].concat(item))
            : (rowIndex = spanTwo.push(spanRow) - 1);
          prev += item;
        } else {
          rowIndex = two.push(row) - 1;
          spanTwo.push(spanRow);
          prev = item;
        }
      }
    }
    return [two, spanTwo];
  }
  const rowsLength = Math.ceil(data.length / columns);
  // const remainder = columns - (data.length % columns);
  // const oneDimensional = data.concat(new Array(remainder).fill({}));
  const oneDimensional = data.concat([]);
  let index = 0;
  for (let i = 0; i < rowsLength; i++) {
    const row = oneDimensional.slice(index, (index += columns));
    two.push(row);
    spanTwo.push(new Array(row.length).fill(colSpan));
  }
  return [two, spanTwo];
};
