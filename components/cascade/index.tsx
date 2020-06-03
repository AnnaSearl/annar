import * as React from 'react';
import { View, Text } from 'remax/one';
import { ScrollView } from '../one';
import { useState, useEffect } from 'react';
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
    if (i.children) {
      setShowedOptions(i.children);
    }
    if (!i.children) {
      flag = true;
      setSign(true);
    }
  };

  const getMatchLevelOptions = (id: string, data: any[]): any => {
    let r = null;
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      if (id === item.id) {
        r = data;
      } else if (item.children) {
        r = getMatchLevelOptions(id, item.children);
      }
      if (r) {
        return r;
      }
    }
    return null;
  };

  const handleReChoose = (item: any, index: number) => {
    onChange(value.slice(0, index + 1));
    setShowedOptions(getMatchLevelOptions(item.id, options));
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
      <View className={`${prefixCls}-selected-options`}>
        {value.map((item, index) => (
          <View
            key={item.key}
            className={`${prefixCls}-selected-options-step`}
            onTap={() => {
              handleReChoose(item, index);
            }}
          >
            <View className={`${prefixCls}-selected-options-step-line`}>
              {index === value.length - 1 ? null : (
                <View className={`${prefixCls}-selected-options-step-line-dot_line_active`} />
              )}
              <Text
                className={`${prefixCls}-selected-options-step-line-dot`}
                style={{ backgroundColor: '#1890FF' }}
              />
            </View>
            <View className={`${prefixCls}-selected-options-step-container`}>
              <View className={`${prefixCls}-selected-options-step-container-content`}>
                <View className={`${prefixCls}-selected-options-step-container-content-main`}>
                  <View
                    className={`${prefixCls}-selected-options-step-container-content-main-left`}
                  >
                    {item.value}
                  </View>
                  <View
                    className={`${prefixCls}-selected-options-step-container-content-main-right`}
                  >
                    <View
                      className={`${prefixCls}-selected-options-step-container-content-main-right-text`}
                    >
                      {prompt?.(index)}
                    </View>
                    <View
                      className={`${prefixCls}-selected-options-step-container-content-main-right-arrow`}
                    >
                      <Icon type="right" size="24px" color="#999" />
                    </View>
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
          className={`${prefixCls}-showed-options`}
          scrollTop={scrollTop}
          style={{
            height: `calc(${height} - ${h + 80}px)`,
          }}
        >
          <View className={`${prefixCls}-showed-options-title`}>{`选择${name}`}</View>
          {showedOptions.map(i => (
            <View
              key={i.key}
              className={`${prefixCls}-showed-options-category`}
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
