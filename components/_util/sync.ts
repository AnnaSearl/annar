const sync = (fn: Function, ...args: any[]): Promise<any> => {
  return new Promise((resolve, reject) => {
    const obj = { ...args[0] };
    const success = obj.success;
    obj.success = function (...params: any[]) {
      success && success.apply(this, ...params);
      const r = params.length > 1 ? params : params[0];
      resolve(r);
    }
    const fail = obj.fail;
    obj.fail = function (...params: any[]) {
      fail && fail.apply(this, ...params);
      const r = params.length > 1 ? params : params[0];
      reject(r);
    }
    fn(obj);
  })
}

export default sync;