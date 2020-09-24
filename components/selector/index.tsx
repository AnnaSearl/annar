import * as React from 'react';
import { useState, useEffect } from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('selector');

export interface OptionProps {
  value: string;
  text: string;
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
      setActiveParent(currentParent.value);
      setParentData(options);
      setChildrenData(data);
    }
  }, [options]);

  const handleClickParentOption = (option: OptionProps) => {
    const data = option.children || [];
    currentParent = option;
    setChildrenData(data);
    setActiveParent(option.value);
    onChangeParentOption?.(option);
  };

  const handleClickChildrenOption = (option: OptionProps) => {
    onChange?.([currentParent.value, option.value], `${currentParent.text} ${option.text}`);
  };

  return (
    <View className={prefixCls} style={style}>
      <View className={`${prefixCls}-parent`}>
        {parentData?.map((option, index) => (
          <View
            key={option.value}
            className={classNames({
              [`${prefixCls}-option`]: true,
              [`${prefixCls}-active`]: activeParent === option.value,
            })}
            onTap={() => {
              handleClickParentOption(option);
            }}
          >
            {option.text}
            {activeParent === option.value && index !== 0 ? (
              <View className={`${prefixCls}-option-rounded_top`}>
                <View className={`${prefixCls}-option-rounded_top-circle`} />
              </View>
            ) : null}
            {activeParent === option.value ? (
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
            key={option.value}
            className={classNames({
              [`${prefixCls}-option`]: true,
              [`${prefixCls}-active`]: value?.[1] === option.value,
            })}
            onTap={() => {
              handleClickChildrenOption(option);
            }}
          >
            {option.text}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Selector;
