/** @format */

const to = (promise: Promise<any>): Promise<any> => {
  if (!promise || !Object.prototype.isPrototypeOf.call(Promise, promise)) {
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
