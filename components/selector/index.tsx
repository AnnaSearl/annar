import * as React from 'react';
import { useState, useEffect } from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('selector');

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
  const { value = [], options = [], style, onChange, onChangeParentOption } = props;

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
  }, [options]);

  const handleClickParentOption = (option: OptionProps) => {
    const data = option.children || [];
    currentParent = option;
    setChildrenData(data);
    setActiveParent(option.key);
    onChangeParentOption?.(option);
  };

  const handleClickChildrenOption = (option: OptionProps) => {
    onChange?.([currentParent.key, option.key], `${currentParent.value} ${option.value}`);
  };

  return (
    <View className={prefixCls} style={style}>
      <View className={`${prefixCls}-parent`}>
        {parentData?.map((option, index) => (
          <View
            key={option.key}
            className={classNames({
              [`${prefixCls}-option`]: true,
              [`${prefixCls}-active`]: activeParent === option.key,
            })}
            onTap={() => {
              handleClickParentOption(option);
            }}
          >
            {option.value}
            {activeParent === option.key && index !== 0 ? (
              <View className={`${prefixCls}-option-rounded_top`}>
                <View className={`${prefixCls}-option-rounded_top-circle`} />
              </View>
            ) : null}
            {activeParent === option.key ? (
              <View className={`${prefixCls}-option-rounded_bottom`}>
                <View className={`${prefixCls}-option-rounded_bottom-circle`} />
              </View>
            ) : null}
          </View>
        ))}
      </View>
      <View className={`${prefixCls}-children`}>
        {childrenData?.map(option => (
          <View
            key={option.key}
            className={classNames({
              [`${prefixCls}-option`]: true,
              [`${prefixCls}-active`]: value?.[1] === option.key,
            })}
            onTap={() => {
              handleClickChildrenOption(option);
            }}
          >
            {option.value}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Selector;
