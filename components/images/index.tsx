import * as React from 'react';
import { View, Image, previewImage } from 'remax/alipay';
import styles from './index.module.scss';


export interface ImageProps {
  key: string;
  url: string;
}

export type DataItem = ImageProps | string;

export interface ImagesProps {
  data?: DataItem[];
}

const Images = (props: ImagesProps) => {

  const { data = [] } = props;

  const handleClickImage = (index: number) => {
    let urls = data;
    let current = index;
    if (typeof data[index] !== "string") {
      urls = data.map(i => (i as ImageProps).url);
    }
     previewImage({
      urls: urls as string[],
      current,
      // @ts-ignore
      enablesavephoto: true,
      enableShowPhotoDownload: true,
    })
  }

  return (
    <View className={styles.images}>
      {
        data && data.map((item: DataItem, index: number) => (
          <View
            key={(item as ImageProps).key || index}
            className={styles.item}
            onClick={() => handleClickImage(index)}
          >
            <Image
              mode='widthFix'
              src={(item as ImageProps).url || (item as string)}
            />
          </View>
        ))
      }
    </View>
  )
}

export default Images;
