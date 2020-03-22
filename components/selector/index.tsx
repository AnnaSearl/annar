
import * as React from 'react';
import { useState, useEffect } from 'react';
import { View } from 'remax/alipay';
import classNames from 'classnames';
import styles from './index.module.scss';


export interface OptionProps {
  key: string;
  value: string;
  children?: OptionProps[];
}

export interface SelectorProps {
  options?: OptionProps[];
  value?: string[];
  style?: React.CSSProperties;
  onChange?: (value: any, valueStr?: string) => void;
  onChangeParentOption?: (e: any) => void;
  [key: string]: any;
}

let currentParent: any = null;

const Selector = (props: SelectorProps) => {
  
  const { 
    value = [],
    options = [],
    style,
    onChange,
    onChangeParentOption,
  } = props;

  const [parentData, setParentData] = useState<OptionProps[]>([]);
  const [childrenData, setChildrenData] = useState<OptionProps[]>([]);
  const [activeParent, setActiveParent] = useState('');

  useEffect(() => {
    if (options.length > 0) {
      const data = options[0].children || [];
      currentParent = options[0];
      setActiveParent(currentParent.key);
      setParentData(options);
      setChildrenData(data);
    }
  }, [options])

  const handleClickParentOption = (option: OptionProps) => {
    const data = option.children || [];
    currentParent = option;
    setChildrenData(data);
    setActiveParent(option.key);
    onChangeParentOption?.(option);
  }

  const handleClickChildrenOption = (option: OptionProps) => {
    onChange?.([currentParent.key, option.key], `${currentParent.value} ${option.value}`);
  }

  return (
    <View 
      className={styles.selector}
      style={style}
    >
      <View className={styles.parent}>
        {
          parentData?.map((option, index) => (
            <View
              key={option.key}
              className={classNames({
                [styles.option]: true,
                [styles.parentOption]: true,
                [styles.active]: activeParent === option.key,
              })}
              onClick={() => {handleClickParentOption(option)}}
            >
              {option.value}
              {
                (activeParent === option.key && index !== 0)
                  ? <View className={styles.roundedTop}>
                      <View className={styles.circle} />
                    </View>
                  : null
              }
              {
                activeParent === option.key
                  ? <View className={styles.roundedBottom}>
                      <View className={styles.circle} />
                    </View>
                  : null
              }
            </View>
          ))
        }
      </View>
      <View className={styles.children}>
        {
          childrenData?.map((option) => (
            <View
              key={option.key}
              className={classNames({
                [styles.option]: true,
                [styles.active]: value?.[1] === option.key,
              })}
              onClick={() => {handleClickChildrenOption(option)}}
            >
              {option.value}
            </View>
          ))
        }
      </View>
    </View>
  )
}

export default Selector;
