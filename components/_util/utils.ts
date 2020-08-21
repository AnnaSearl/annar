export interface Obj {
  [key: string]: any;
}

export const guid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

// 如果你想禁用第一次首先执行的话，传递{leading: false}，还有如果你想禁用最后一次执行的话，传递{trailing: false}。
// 默认是 第一次首先执行并且最后一次会执行，相当于 {leading: true, trailing: true}
export const throttle = (func: any, wait: any, options?: any) => {
  let previous = 0;
  let timeout: any = null;
  let context: any;
  let args: any;
  if (!options) options = {};

  const later = function () {
    previous = options.leading === false ? 0 : new Date().getTime();
    timeout = null;
    func.apply(context, args);
    if (!timeout) context = args = null;
  };

  const throttled = function (this: any) {
    const now = new Date().getTime();
    if (!previous && options.leading === false) previous = now;
    const remaining = wait - (now - previous);
    context = this;
    // eslint-disable-next-line prefer-rest-params
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
  };
  return throttled;
};

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
  const oneDimensional = data.concat([]);
  let index = 0;
  for (let i = 0; i < rowsLength; i++) {
    const row = oneDimensional.slice(index, (index += columns));
    two.push(row);
    spanTwo.push(new Array(row.length).fill(colSpan));
  }
  return [two, spanTwo];
};

export const flat = (arr: any[]): any[] => {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.reduce((prev, curr) => {
    if (Array.isArray(curr)) {
      return prev.concat(flat(curr));
    }
    return prev.concat(curr);
  }, []);
};

export const isObjectValueEqual = (a: Obj, b: Obj) => {
  //取对象a和b的属性名
  const aProps = Object.getOwnPropertyNames(a);
  const bProps = Object.getOwnPropertyNames(b);
  //判断属性名的length是否一致
  if (aProps.length != bProps.length) {
    return false;
  }
  //循环取出属性名，再判断属性值是否一致
  for (let i = 0; i < aProps.length; i++) {
    const propName = aProps[i];
    if (a[propName] !== b[propName]) {
      return false;
    }
  }
  return true;
};

export const isArrayValueEqual = (a: any[], b: any[]) => {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    return false;
  }
  //判断array的length是否一致
  if (a.length != b.length) {
    return false;
  }

  let isEqual = true;
  for (let i = 0; i < a.length; i += 1) {
    if (typeof a[i] === 'object' && typeof b[i] === 'object') {
      !isObjectValueEqual(a[i], b[i]) && (isEqual = false);
    } else {
      a[i] !== b[i] && (isEqual = false);
    }
  }

  return isEqual;
};

export const deepClone = function (data: any): any {
  let cloneData: any = null;
  if (Array.isArray(data)) {
    cloneData = [];
    for (let i = 0; i < data.length; i += 1) {
      const item = data[i];
      cloneData[i] = deepClone(item);
    }
  } else if (typeof data === 'object' && data !== null) {
    cloneData = {};
    Object.keys(data).forEach(key => {
      const item = data[key];
      cloneData[key] = deepClone(item);
    });
  } else {
    cloneData = data;
  }
  return cloneData;
};
