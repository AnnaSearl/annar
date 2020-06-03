const to = (promise: Promise<any>): Promise<any> => {
  // eslint-disable-next-line no-prototype-builtins
  if (!promise || !Promise.prototype.isPrototypeOf(promise)) {
    return new Promise((resolve, reject) => {
      reject(new Error('requires promises as the param'));
    }).catch(err => {
      return [err, null];
    });
  }
  return promise
    .then(function (...args) {
      return [null, ...args];
    })
    .catch(err => {
      return [err];
    });
};

export default to;
