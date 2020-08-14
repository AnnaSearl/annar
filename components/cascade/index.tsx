import React, { useState, useEffect } from 'react';
import { View, Text } from 'remax/one';
import { ScrollView } from '../one';
import classNames from 'classnames';
import Icon from '../icon';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('cascade');

export interface OptionProps {
  key: string;
  value: string;
  parentKey: string;
  children?: OptionProps[];
}

export interface CascadeProps {
  name?: string;
  value: OptionProps[];
  options: OptionProps[];
  height?: string;
  className?: string;
  prompt?: (e: any) => string;
  onChange: (v: any[], last?: any) => void;
  onComplete?: (v: any[], last?: any) => void;
}

let flag = false;
const Cascade = (props: CascadeProps) => {
  const {
    name,
    value = [],
    options = [],
    height = '80vh',
    className = '',
    prompt,
    onChange,
    onComplete,
  } = props;

  const [showedOptions, setShowedOptions] = useState(options);
  const [sign, setSign] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  // useEffect(() => {
  //   if (options && options.length > 0) {
  //     setShowedOptions(options);
  //   }
  // }, [options]) // 无法使用此 useEffect，使用后会报错。

  useEffect(() => {
    if (sign && value.length > 0 && flag) {
      setSign(false);
      flag = false;
      const item = value[value.length - 1];
      onComplete?.(value, {
        key: item.key,
        value: item.value,
      });
    }
  }, [value, sign]);

  const handleClick = async (i: any) => {
    let nextValue = [];
    const nextOption = {
      key: i.key,
      value: i.value,
      parentKey: i.parentKey,
    };
    if (value.length > 0 && value[value.length - 1].parentKey === i.parentKey) {
      nextValue = [...value.slice(0, value.length - 1), nextOption];
    } else {
      nextValue = [...value, nextOption];
    }
    onChange(nextValue, nextOption);
    setScrollTop(top => {
      return top === 0 ? 1 : 0;
    });
    if (Array.isArray(i.children) && i.children.length > 0) {
      setShowedOptions(i.children);
    } else {
      flag = true;
      setSign(true);
    }
  };

  const getMatchLevelOptions = (key: string, data: any[]): any => {
    let r = null;
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      if (key === item.key) {
        r = data;
      } else if (item.children) {
        r = getMatchLevelOptions(key, item.children);
      }
      if (r) {
        return r;
      }
    }
    return r;
  };

  const handleReChoose = (item: any, index: number) => {
    onChange(value.slice(0, index + 1));
    setShowedOptions(getMatchLevelOptions(item.key, options));
    setScrollTop(top => {
      return top === 0 ? 1 : 0;
    });
  };

  const h = value.length > 1 ? 90 * value.length + 40 - 30 : 130;

  return (
    <View
      className={classNames({
        [prefixCls]: true,
        [className]: true,
      })}
      style={{
        height,
      }}
    >
      <View className={`${prefixCls}-selected`}>
        {value.map((item, index) => (
          <View
            key={item.key}
            className={`${prefixCls}-step`}
            onTap={() => {
              handleReChoose(item, index);
            }}
          >
            <View className={`${prefixCls}-step-line`}>
              {index === value.length - 1 ? null : (
                <View className={`${prefixCls}-step-line-active`} />
              )}
              <Text className={`${prefixCls}-step-dot`} />
            </View>
            <View className={`${prefixCls}-step-container`}>
              <View className={`${prefixCls}-step-content`}>
                <View className={`${prefixCls}-step-left`}>{item.value}</View>
                <View className={`${prefixCls}-step-right`}>
                  <View className={`${prefixCls}-step-right-text`}>{prompt?.(index)}</View>
                  <View className={`${prefixCls}-step-right-arrow`}>
                    <Icon type="right" size="24px" color="#999" />
                  </View>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
      <View>
        <ScrollView
          scrollY
          className={`${prefixCls}-showed`}
          scrollTop={scrollTop}
          style={{
            height: `calc(${height} - ${h + 80}px)`,
          }}
        >
          <View className={`${prefixCls}-showed-title`}>{`选择${name}`}</View>
          {showedOptions.map(i => (
            <View
              key={i.key}
              className={`${prefixCls}-showed-category`}
              onTap={() => {
                handleClick(i);
              }}
            >
              {i.value}
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Cascade;
