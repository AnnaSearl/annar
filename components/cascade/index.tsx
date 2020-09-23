import React, { useRef, useState } from 'react';
import { View, Text } from 'remax/one';
import { ScrollView } from '../one';
import classNames from 'classnames';
import Icon from '../icon';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('cascade');

const getMatchLevelOptions = (value: valueType, level: number, data: OptionProps[]): any => {
  let r = null;
  const currentLevel = level - 1;
  for (let i = 0; i < data.length; i += 1) {
    const item = data[i];
    if (currentLevel === 0) {
      if (value === item.value) {
        r = data;
      }
    }
    if (currentLevel > 0) {
      if (item.children) {
        r = getMatchLevelOptions(value, currentLevel, item.children);
      }
    }
    if (r) {
      return r;
    }
  }
  return r;
};

const getSelectedOptions = (value: valueType[], options: OptionProps[]) => {
  if (!Array.isArray(value) || !Array.isArray(options)) {
    return [];
  }
  let level = 0;
  const selectedOptions: any[] = [];
  const recursion = (levelOptions: OptionProps[]): any => {
    for (let i = 0; i < levelOptions.length; i += 1) {
      const option = levelOptions[i];
      if (option.value === value[level]) {
        selectedOptions.push(option);
        level += 1;
        if (selectedOptions.length === value.length) {
          return selectedOptions;
        } else if (selectedOptions.length < value.length) {
          return recursion(option.children || []);
        }
      }
    }
    return selectedOptions;
  };

  return recursion(options);
};

export type valueType = string | number;

export interface OptionProps {
  value: valueType;
  text: React.ReactNode;
  children?: OptionProps[];
}

export interface CascadeProps {
  name?: string;
  value: valueType[];
  options: OptionProps[];
  changeOnSelect?: boolean;
  height?: string;
  className?: string;
  prompt?: (e: any) => string;
  onChange: (v: valueType[], selectedOptions?: OptionProps[], isLast?: boolean) => void;
}

const Cascade = (props: CascadeProps) => {
  const {
    name,
    value = [],
    options = [],
    changeOnSelect,
    height = '80vh',
    className = '',
    prompt,
    onChange,
  } = props;

  const [levelOptions, setLevelOptions] = useState(options);
  const [scrollTop, setScrollTop] = useState(0);
  const [localValue, setLocalValue] = useState<valueType[]>([]);

  const rechoose = useRef(false);

  const val = changeOnSelect ? value : localValue;

  const selectedOptions = getSelectedOptions(val, options);

  // useEffect(() => {
  //   if (options && options.length > 0) {
  //     setLevelOptions(options);
  //   }
  // }, [options]) // 无法使用此 useEffect，使用后会报错。

  const handleClick = async (i: any) => {
    let nextValue = [];
    let nextSelectedOption = [];
    const lastIndex = val.length - 1;
    const lastSelectedOption = selectedOptions[lastIndex] || {};

    if (
      val.length > 0 &&
      (!lastSelectedOption.children || lastSelectedOption.children.length === 0)
    ) {
      nextValue = [...val.slice(0, lastIndex), i.value];
      nextSelectedOption = [...selectedOptions.slice(0, lastIndex), i];
    } else if (val.length > 0 && rechoose.current) {
      nextValue = [...val.slice(0, lastIndex), i.value];
      nextSelectedOption = [...selectedOptions.slice(0, lastIndex), i];
    } else {
      nextValue = [...val, i.value];
      nextSelectedOption = [...selectedOptions, i];
    }
    if (changeOnSelect) {
      let isLast = false;
      if (!Array.isArray(i.children) || i.children.length === 0) {
        isLast = true;
      }
      onChange(nextValue, nextSelectedOption, isLast);
    }
    if (!changeOnSelect) {
      if (!Array.isArray(i.children) || i.children.length === 0) {
        setLocalValue(nextValue);
        onChange(nextValue, nextSelectedOption, true);
      } else {
        setLocalValue(nextValue);
      }
    }

    rechoose.current = false;

    setScrollTop(top => {
      return top === 0 ? 1 : 0;
    });
    if (Array.isArray(i.children) && i.children.length > 0) {
      setLevelOptions(i.children);
    }
  };

  const handleReChoose = (item: any, index: number) => {
    rechoose.current = true;
    if (changeOnSelect) {
      onChange(val.slice(0, index + 1));
    }
    if (!changeOnSelect) {
      setLocalValue(val.slice(0, index + 1));
    }
    setLevelOptions(getMatchLevelOptions(item.value, index + 1, options));
    setScrollTop(top => {
      return top === 0 ? 1 : 0;
    });
  };

  const h = val.length > 1 ? 90 * val.length + 40 - 30 : 130;

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
        {selectedOptions.map((item: OptionProps, index: number) => (
          <View
            key={item.value}
            className={`${prefixCls}-step`}
            onTap={() => {
              handleReChoose(item, index);
            }}
          >
            <View className={`${prefixCls}-step-line`}>
              {index === val.length - 1 ? null : (
                <View className={`${prefixCls}-step-line-active`} />
              )}
              <Text className={`${prefixCls}-step-dot`} />
            </View>
            <View className={`${prefixCls}-step-container`}>
              <View className={`${prefixCls}-step-content`}>
                <View className={`${prefixCls}-step-left`}>{item.text}</View>
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
          {levelOptions?.map(i => (
            <View
              key={i.value}
              className={`${prefixCls}-showed-category`}
              onTap={() => {
                handleClick(i);
              }}
            >
              {i.text}
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Cascade;
