import * as React from 'react';
import classNames from 'classnames';
import { View, Text } from 'remax/one';
import styles from './index.module.scss';


export interface ItemProps {
  reqiured?: boolean;
  unline?: boolean;
  arrow?: boolean;
  className?: string;
  style?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  label?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => any;
  verticality?: boolean;
}

const Item = (props: ItemProps) => {
  const { 
    label, 
    unline, 
    onClick, 
    reqiured,
    className = '',
    style,
    labelStyle,
    children,
    arrow,
    verticality,
  } = props;

  if (verticality) {
    return (
      <View
        className={classNames({
          [styles.formItem]: true,
          [className]: true,
        })}
        style={style}
      >
        <View className={styles.verticalityItem}>
          <View
            className={styles.label}
            style={labelStyle}
          >
            {
              reqiured
                ? <Text className={styles.required}>*</Text>
                : null
            }
            <Text>{label}</Text>
          </View>
          <View
            onClick={onClick}
            className={styles.value}
          >
            {children}
          </View>
        </View>
        {
          unline
            ? null
            : <View className={styles.unline} />
        }
      </View>
    )
  }

  return (
    <View
      className={classNames({
        [styles.formItem]: true,
        [className]: true,
      })}
      style={style}
    >
      <View className={styles.item}>
        <Text
          className={styles.label}
          style={labelStyle}
        >
          {
            reqiured
              ? <Text className={styles.required}>*</Text>
              : null
          }
          <Text>{label}</Text>
        </Text>
        <View
          onClick={onClick}
          className={styles.value}
        >
          {children}
        </View>
        {
          arrow
            ? <Text className={styles.arrow}>
                <Text
                  className={classNames({
                    [styles.icon]: true,
                    'iconfont': true,
                    'icon-right': true,
                  })}
                />
              </Text>
            : null
        }
      </View>
      {
        unline
          ? null
          : <View className={styles.unline} />
      }
    </View>
  )
}

export default Item;
