/** @format */

import * as React from 'react';
import { View, Image } from 'remax/one';
import { previewImage, chooseImage } from '../one/api/';
import cloneDeep from 'lodash-es/cloneDeep';
import { sync, to } from '../_util';
import { getPrefixCls } from '../common';
import Icon from '../icon';
import './index.scss';

const prefixCls = getPrefixCls('image-upload');

export interface ImageProps {
  key: string;
  url: string;
}

export type DataItem = ImageProps | string;

export interface ImageUploadProps {
  files?: DataItem[];
  onChange?: (e: DataItem[]) => void;
  multiple?: boolean;
  multipleCount?: number;
  sizeType?: string[];
  sourceType?: string[];
  deletable?: boolean;
  disabled?: boolean;
  maxCount?: number;
}

const ImageUpload = (props: ImageUploadProps) => {
  const {
    files = [],
    onChange,
    multiple,
    multipleCount,
    sizeType,
    sourceType,
    deletable = true,
    disabled,
    maxCount,
  } = props;

  const handleClickImage = (index: number) => {
    let urls = files;
    const current = index;
    if (typeof files[index] !== 'string') {
      urls = files.map(i => (i as ImageProps).url);
    }
    previewImage({
      urls: urls as string[],
      current,
      // @ts-ignore
      enablesavephoto: true,
      enableShowPhotoDownload: true,
    });
  };

  const handleAdd = async () => {
    if (disabled) {
      return;
    }
    const params: any = {};
    if (multiple) {
      params.count = 99;
    }
    if (multipleCount) {
      params.count = multipleCount;
    }
    if (sizeType) {
      params.sizeType = sizeType;
    }
    if (sourceType) {
      params.sourceType = sourceType;
    }
    const [errc, resc] = await to(sync(chooseImage, params));
    if (errc) {
      return;
    }
    const targetFiles = resc.filePaths
      ? resc.filePaths.map((i: any) => i)
      : resc.tempFilePaths.map((i: any) => i);
    const newFiles = files.concat(targetFiles);
    onChange?.(newFiles);
  };

  const handleDelete = (e: any, index: number) => {
    e.stopPropagation();
    let newValue = cloneDeep(files);
    newValue.splice(index, 1);
    newValue = newValue.map((item: DataItem, index: number) => {
      const newItem = item;
      if (typeof newItem === 'string') {
        return newItem;
      }
      (newItem as ImageProps).key = String(index);
      return newItem;
    });
    onChange?.(newValue);
  };

  return (
    <View className={prefixCls}>
      {files.map((item: DataItem, index: number) => (
        <View
          key={(item as ImageProps).key || index}
          className={`${prefixCls}-item`}
          onTap={() => handleClickImage(index)}
        >
          {deletable ? (
            <View className={`${prefixCls}-item-delete`}>
              <View
                style={{ height: '24rpx' }}
                onTap={e => {
                  handleDelete(e, index);
                }}
              >
                <Icon
                  type="close"
                  size="24rpx"
                  color="#FDFFFD"
                  style={{
                    width: '24rpx',
                    height: '24rpx',
                    verticalAlign: 'text-top',
                  }}
                />
              </View>
            </View>
          ) : null}
          <Image mode="widthFix" src={(item as ImageProps).url || (item as string)} />
        </View>
      ))}
      {!maxCount || files.length < maxCount ? (
        <View className={`${prefixCls}-add`} onTap={handleAdd}>
          <Icon type="add" size="48px" color="#BABEC6" />
        </View>
      ) : null}
    </View>
  );
};

export default ImageUpload;
