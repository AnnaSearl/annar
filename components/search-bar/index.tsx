import * as React from 'react';
import { useState } from 'react'
import { View, Text, Input } from 'remax/one';
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
    actionName="取消",
    keepShowActionButton,
    hideActionButton,
  } = props;

  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = (e: any) => {
    onFocus?.(e);
    setIsFocus(true);
  }

  const handleBlur = (e: any) => {
    onBlur?.(e);
    setIsFocus(false);
  }

  const handleInput = (e: any) => {
    onInput?.(e.detail.value);
  }

  const handleClear = () => {
    onClear?.(value);
  }

  const handleActionClick = () => {
    showBtn = false;
    onActionClick?.();
  }

  const handleConfirm = (e: any) => {
    onSubmit?.(e.detail.value);
  }

  let active = isFocus || value || focus;
  if (active && !showBtn) {
    showBtn = true
  }

  return (
    <View 
      className={prefixCls}
      style={style}
    >
      <View 
        className={`${prefixCls}-input`}
        style={inputStyle}
      >
        <View
          className={classNames({
            [`${prefixCls}-input-synthetic`]: true,
            [`${prefixCls}-input-is_left`]: active,
          })}
        >
          <View className={`${prefixCls}-input-synthetic-icon`}>
            <Text 
              className="iconfont icon-search" 
              style={{
                fontSize: '36rpx'
              }} 
            />
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
          type="search"
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onInput={handleInput}
          onConfirm={handleConfirm}
          focus={focus}
        />
        <View 
          className={`${prefixCls}-input-clear`}
          onTap={handleClear}
        >
          <Icon 
            type="roundclosefill" 
            size="36rpx" 
            color="#999"
            style={{
              visibility: value ? 'visible' : 'hidden',
            }}
          />
        </View>
      </View>
      {
        !hideActionButton
          ? <View
              className={classNames({
                [`${prefixCls}-action_button`]: true,
                [`${prefixCls}-show_action_button`]: keepShowActionButton ? showBtn : active,
              })}
              onTap={handleActionClick}
            >
              {actionName}
            </View>
          : null
      }
    </View>
  );
};

export default SearchBar;
