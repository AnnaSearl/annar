export default (obj: any) => {
  const body = document.getElementsByTagName('body')[0];
  const imgUploadInput = document.createElement('input');
  imgUploadInput.type = 'file';
  imgUploadInput.multiple = obj?.multiple;
  imgUploadInput.style.height = '0';
  body.appendChild(imgUploadInput);
  imgUploadInput.onclick = e => {
    // body.removeChild(imgUploadInput as HTMLInputElement);
  };
  imgUploadInput.onchange = (e: any) => {
    const files = e.target.files;
    if (obj?.multiple && files.length > obj.count) {
      console.log('选择数量超过最大数量');
      return;
    }
    const filesTask = [];
    for (let i = 0; i < files.length; i += 1) {
      const fileTask = new Promise((resolve, reject) => {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = function (evt: any) {
          resolve(evt.target.result);
        };
        reader.readAsDataURL(file);
      });
      filesTask.push(fileTask);
    }
    Promise.all(filesTask)
      .then(result => {
        const params = {
          filePaths: result,
        };
        obj?.success(params);
      })
      .catch(error => {
        console.error('Read file error', error);
      });
    body.removeChild(imgUploadInput);
  };
  imgUploadInput.click();
};
