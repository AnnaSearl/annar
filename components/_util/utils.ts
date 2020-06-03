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
