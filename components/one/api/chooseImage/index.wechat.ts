import { chooseImage } from 'remax/wechat';

export default (options: any) =>
  chooseImage({
    ...options,
    success(r) {
      console.log(r);
    },
  });
