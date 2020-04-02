/** @format */

import * as React from 'react';
import dayjs from 'dayjs';
import { View } from 'remax/one';
import { datePicker } from '../one/api';
import showToast from '../one/api/showToast';
import { to, sync } from '../_util';

export interface DateTimeProps {
  value?: string;
  start?: string;
  format?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  onOpen?: () => void;
  onComplete?: () => void;
}

const DateTime = (props: DateTimeProps) => {
  const { value, start, format = 'yyyy-MM-dd', placeholder, onChange, onOpen, onComplete } = props;

  const handleClick = async () => {
    onOpen?.();
    const [err, res] = await to(
      sync(datePicker, {
        format,
        currentDate: start ? start : dayjs().format(format),
        complete: onComplete,
      }),
    );
    if (err) {
      showToast({
        type: 'none',
        content: '调用datePicker失败',
        duration: 2000,
      });
      return;
    }
    onChange?.(res.date);
  };

  return (
    <View
      style={{
        height: '42rpx',
      }}
      onTap={handleClick}
    >
      {value ? value : placeholder}
    </View>
  );
};

export default DateTime;
