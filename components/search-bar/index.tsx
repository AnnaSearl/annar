/** @format */

import * as React from 'react';
import { useState } from 'react';
import { View, Input } from 'remax/one';
import classNames from 'classnames';
import Icon from '../icon';
import { getPrefixCls } from '../common';
import './index.scss';

const prefixCls = getPrefixCls('search_bar');

export interface SearchBarProps {
  value?: string;
  placeholder?: string;
  onInput?: (value: string) => void;
  onClear?: (value: any) => void;
  onActionClick?: () => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  onSubmit?: (value: string) => void;
  inputStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  focus?: boolean;
  actionName?: string;
  keepShowActionButton?: boolean;
  hideActionButton?: boolean;
  size?: string;
}

let showBtn = false;
const SearchBar = (props: SearchBarProps) => {
  const {
    value,
    placeholder,
    onInput,
    onClear,
    onFocus,
    onBlur,
    onActionClick,
    onSubmit,
    inputStyle,
    style,
    focus,
    actionName = '取消',
    keepShowActionButton,
    hideActionButton,
    size,
  } = props;

  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = (e: any) => {
    onFocus?.(e);
    setIsFocus(true);
  };

  const handleBlur = (e: any) => {
    onBlur?.(e);
    setIsFocus(false);
  };

  const handleInput = (e: any) => {
    onInput?.(e.target.value);
  };

  const handleClear = () => {
    onClear?.(value);
  };

  const handleActionClick = () => {
    showBtn = false;
    onActionClick?.();
  };

  const handleConfirm = (e: any) => {
    onSubmit?.(e.target.value);
  };

  const active = isFocus || value || focus;
  if (active && !showBtn) {
    showBtn = true;
  }

  let iconSize = 32;
  if (size === 'large') {
    iconSize = 36;
  }
  if (size === 'small') {
    iconSize = 28;
  }

  return (
    <View
      className={classNames({
        [prefixCls]: true,
        [`${prefixCls}-large`]: size === 'large',
        [`${prefixCls}-small`]: size === 'small',
      })}
      style={style}
    >
      <View className={`${prefixCls}-input`} style={inputStyle}>
        <View
          className={classNames({
            [`${prefixCls}-input-synthetic`]: true,
            [`${prefixCls}-input-is_left`]: active,
          })}
        >
          <View className={`${prefixCls}-input-synthetic-icon`}>
            <Icon type="search" size={`${iconSize}rpx`} color="#999" />
          </View>
          <View
            className={`${prefixCls}-input-synthetic-placeholder`}
            style={{
              visibility: active ? 'hidden' : 'visible',
            }}
          >
            {placeholder}
          </View>
        </View>
        <Input
          className={`${prefixCls}-input-value`}
          // @ts-ignore
          type="search"
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onInput={handleInput}
          onConfirm={handleConfirm}
          focus={focus}
        />
        <View className={`${prefixCls}-input-clear`} onTap={handleClear}>
          <Icon
            type="roundclosefill"
            size={`${iconSize}rpx`}
            color="#999"
            style={{
              visibility: value ? 'visible' : 'hidden',
            }}
          />
        </View>
      </View>
      {!hideActionButton ? (
        <View
          className={classNames({
            [`${prefixCls}-action_button`]: true,
            [`${prefixCls}-show_action_button`]: keepShowActionButton ? true : active,
          })}
          onTap={handleActionClick}
        >
          {actionName}
        </View>
      ) : null}
    </View>
  );
};

export default SearchBar;
