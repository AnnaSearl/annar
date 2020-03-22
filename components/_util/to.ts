const to = (promise: Promise<any>): Promise<any> => {
  if(!promise || !Promise.prototype.isPrototypeOf(promise)){
    return new Promise((resolve, reject)=>{
      reject(new Error("requires promises as the param"))
    }).catch((err)=>{
      return [err, null]
    });
  }
  return promise.then(function(){
    return [null, ...arguments]
  }).catch(err => {
    return [err]
  })
}

export default to;
