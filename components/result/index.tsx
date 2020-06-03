import * as React from 'react';
import { View } from 'remax/one';
import Icon from '../icon';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('result');

const getIconNameByStatus = (status: any): any => {
  let obj = {
    name: 'infofill',
    color: '#1890ff',
  };
  switch (status) {
    case 'info':
      obj = {
        name: 'infofill',
        color: '#1890ff',
      };
      break;
    case 'success':
      obj = {
        name: 'roundcheckfill',
        color: '#52c41a',
      };
      break;
    case 'warning':
      obj = {
        name: 'warnfill',
        color: '#faad14',
      };
      break;
    case 'error':
      obj = {
        name: 'roundclosefill',
        color: '#f5222d',
      };
      break;
    default:
      break;
  }
  return obj;
};

export interface IconProps {
  name: string;
  color?: string;
}

export interface ResultProps {
  status?: string;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  extra?: React.ReactNode;
  children?: React.ReactNode;
  icon?: React.ReactNode | IconProps;
  height?: string;
}

const Result = (props: ResultProps) => {
  const { status = 'info', title, subTitle, extra, children, icon, height } = props;

  let isCustomIcon = false;
  let iconObj = getIconNameByStatus(status);
  if (icon) {
    if (Object.prototype.toString.call(icon) === '[object Object]') {
      iconObj = icon;
    } else {
      isCustomIcon = true;
    }
  }

  return (
    <View className={prefixCls} style={{ height: height || '100vh' }}>
      <View className={`${prefixCls}-icon`}>
        {isCustomIcon ? (
          icon
        ) : (
          <View className={`${prefixCls}-icon-status`}>
            <Icon type={iconObj.name} color={iconObj.color} size="168px" />
          </View>
        )}
      </View>
      <View className={`${prefixCls}-title`}>{title}</View>
      <View className={`${prefixCls}-sub_title`}>{subTitle}</View>
      {children ? <View className={`${prefixCls}-content`}>{children}</View> : null}
      <View className={`${prefixCls}-extra`}>{extra}</View>
    </View>
  );
};

export default Result;
