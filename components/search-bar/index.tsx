import * as React from 'react';
import { useState } from 'react'
import { View, Text, Input } from 'remax/one';
import classNames from 'classnames';
import styles from './index.module.scss';

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
      className={styles.searchBar}
      style={style}
    >
      <View 
        className={styles.input}
        style={inputStyle}
      >
        <View
          className={classNames({
            [styles.synthetic]: true,
            [styles.isLeft]: active,
          })}
        >
          <View className={styles.syntheticIcon}>
            <Text 
              className="iconfont icon-search" 
              style={{
                fontSize: '36rpx'
              }} 
            />
          </View>
          <View 
            className={styles.syntheticPlaceholder}
            style={{
              visibility: active ? 'hidden' : 'visible',
            }}
          >
            {placeholder}
          </View>
        </View>
        <Input
          className={styles.value}
          type="search"
          confirmType="search"
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onInput={handleInput}
          onConfirm={handleConfirm}
          focus={focus}
        />
        <View 
          className={styles.clear}
          onClick={handleClear}
        >
          <Text 
            className="iconfont icon-roundclosefill"
            style={{
              fontSize: '36rpx',
              visibility: value ? 'visible' : 'hidden',
            }}
          />
        </View>
      </View>
      {
        !hideActionButton
          ? <View
              className={classNames({
                [styles.actionButton]: true,
                [styles.showActionButton]: keepShowActionButton ? showBtn : active,
              })}
              onClick={handleActionClick}
            >
              {actionName}
            </View>
          : null
      }
    </View>
  );
};

export default SearchBar;
