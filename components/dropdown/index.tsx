import * as React from 'react';
import { View, Text } from 'remax/alipay';
import classNames from 'classnames';
import styles from './index.module.scss';


export interface OptionProps {
  key: string;
  value: string;
}

export interface DropdownProps {
  options?: OptionProps[];
  value?: string;
  onChange?: (e: OptionProps) => void;
}

const Dropdown = (props: DropdownProps) => {

  const { 
    options = [], 
    value, 
    onChange
  } = props;

  return (
    <View className={styles.dropdown}>
      <View
        className={styles.content}
      >
        {
          options.map((item) => (
            <View
              className={styles.option}
              key={item.key}
              onClick={() => onChange?.(item)}
              style={
                item.key === value ? {
                  color: '#1890FF',
                  borderBottom: '1rpx solid #1890FF',
                } : undefined
              }
            >
              {item.value}
              {
                item.key === value
                  ? <View className={styles.check}>
                      <Text
                        className={classNames({
                          [styles.icon]: true,
                          'iconfont': true,
                          'icon-check': true,
                        })}
                      />
                    </View>
                  : null
              }
            </View>
          ))
        }
      </View>
    </View>
  )
}

export default Dropdown;