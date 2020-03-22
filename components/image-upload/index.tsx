
import * as React from 'react';
import { View, Text, Image, chooseImage, hideLoading, previewImage } from 'remax/alipay';
import classNames from 'classnames';
import cloneDeep from 'lodash-es/cloneDeep';
import { sync, to } from '../_util';
import styles from './index.module.scss';


export interface ImageProps {
  key: string;
  url: string;
}

export type DataItem = ImageProps | string;

export interface ImageUploadProps {
  files?: DataItem[];
  onChange?: (e: DataItem[]) => void;
  multiple?: boolean;
  count?: number;
  sizeType?: string;
  sourceType?: string;
}

const ImageUpload = (props: ImageUploadProps) => {

  const { 
    files = [], 
    onChange,
    multiple,
    count,
    sizeType,
    sourceType
  } = props;
  
  const handleClickImage = (index: number) => {
    let urls = files;
    let current = index;
    if (typeof files[index] !== "string") {
      urls = files.map(i => (i as ImageProps).url);
    }
    previewImage({
      urls: urls as string[],
      current,
      // @ts-ignore
      enablesavephoto: true,
      enableShowPhotoDownload: true,
    })
  }

  const handleAdd = async () => {
    const params: any = {};
    if (multiple) {
      params.count = 99
    }
    if (count) {
      params.count = count
    }
    if (sizeType) {
      params.sizeType = sizeType
    }
    if (sourceType) {
      params.sourceType = sourceType
    }
    const [errc, resc] = await to(sync(chooseImage, params));
    console.log('resc----',resc);
    if (errc) {
      return;
    }
    onChange?.(resc);
    hideLoading();
  }

  const handleDelete = (e: any, index: number) => {
    e.stopPropagation();
    let newValue = cloneDeep(files);
    newValue.splice(index, 1);
    newValue = newValue.map((item: DataItem, index: number) => {
      const newItem = item;
      (newItem as ImageProps).key = String(index);
      return newItem;
    })
    onChange?.(newValue);
  }

  return (
    <View className={styles.imageUpload}>
      {
        files.map((item: DataItem, index: number) => (
          <View
            key={(item as ImageProps).key || index}
            className={styles.item}
            onClick={() => handleClickImage(index)}
          >
            <View className={styles.delete} >
              <View
                className={classNames({
                  [styles.icon]: true,
                  'iconfont': true,
                  'icon-close': true,
                })}
                onClick={(e) => {handleDelete(e, index)}}
              />
            </View>
            <Image
              mode='widthFix'
              src={(item as ImageProps).url || (item as string)}
            />
          </View>
        ))
      }
      <View 
        className={styles.add}
        onClick={handleAdd}
      >
        <Text
          className={classNames({
            [styles.icon]: true,
            'iconfont': true,
            'icon-add': true,
          })}
        />
      </View>
    </View>
  );
};

export default ImageUpload;
