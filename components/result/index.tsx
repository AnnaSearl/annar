import * as React from 'react';
import { View } from 'remax/alipay';
import classNames from 'classnames';
import styles from './index.module.scss';


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
}

export interface iconProps {
  name: string;
  color?: string;
}

export interface ResultProps {
  status?: string;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  extra?: React.ReactNode;
  children?: React.ReactNode;
  icon?: React.ReactNode | iconProps;
}

const Result = (props: ResultProps) => {

  const {
    status,
    title,
    subTitle,
    extra,
    children,
    icon,
  } = props;

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
    <View 
      className={styles.result}
    >
      <View className={styles.icon}>
        {
          isCustomIcon
            ? icon
            : <View className={styles.status}>
                <View
                  className={classNames({
                    [styles.iconDefault]: true,
                    'iconfont': true,
                    [`icon-${iconObj.name}`]: true,
                  })}
                  style={{
                    color: iconObj.color,
                  }}
                />
              </View>
        }
      </View>
      <View className={styles.title}>
        {title}
      </View>
      <View className={styles.subTitle}>
        {subTitle}
      </View>
      {
        children
          ? <View className={styles.content}>
              {children}
            </View>
          : null
      }
      <View className={styles.extra}>
        {extra}
      </View>
    </View>
  )
}

export default Result;
