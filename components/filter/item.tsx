/** @format */

import React, { useImperativeHandle, useState } from 'react';
import { View, Text } from 'remax/one';
import classNames from 'classnames';
import { ScrollView } from '../one/base';
import Dropdown, { OptionProps } from '../dropdown';
import { getPrefixCls } from '../common';
import './item.scss';

const prefixCls = getPrefixCls('filter-item');

export interface ItemProps {
  label?: string;
  height?: string;
  onTap?: (open: boolean) => void;
  onShowMask?: (show: boolean) => void;
  children?: React.ReactNode;
  value?: string;
  options?: OptionProps[];
  activeColor?: string;
  onChange?: (e: OptionProps) => void;
  disabled?: boolean;
}

const Item = (props: ItemProps, ref: any): React.ReactElement => {
  const {
    label,
    onTap,
    children,
    onShowMask,
    value,
    options,
    onChange,
    activeColor,
    disabled,
  } = props;
  const [open, setOpen] = useState(false);
  // const [height, setHeight] = useState("0");

  useImperativeHandle(
    ref,
    () => ({
      toggle() {
        setOpen(state => {
          if (state) {
            setTimeout(() => {
              onShowMask?.(false);
            });
          } else {
            setTimeout(() => {
              onShowMask?.(true);
            });
          }
          return !state;
        });
      },
      open() {
        setOpen(true);
      },
      close() {
        setOpen(false);
      },
    }),
    [],
  );

  const handleTap = () => {
    if (disabled) {
      return;
    }
    setOpen(state => !state);
    onTap?.(!open);
  };

  const handleChange = (e: OptionProps) => {
    onChange?.(e);
    setOpen(false);
    onShowMask?.(false);
  };

  // React.useEffect(() => {
  //   wx.createSelectorQuery()
  //   .select(`#anna-filter-item-${id}`)
  //   .boundingClientRect((rect: any) => {
  //     setHeight(`${rect.height * 2}px`);
  //   })
  //   .exec()
  // }, [])

  return (
    <View className={prefixCls}>
      <View
        className={classNames({
          [`${prefixCls}-label`]: true,
          [`${prefixCls}-label-disabled`]: disabled,
        })}
        onTap={handleTap}
      >
        <Text className={`${prefixCls}-label-text`}>{label}</Text>
        {open ? (
          <Text className={`${prefixCls}-label-chevronUp`} />
        ) : (
          <Text className={`${prefixCls}-label-chevronDown`} />
        )}
      </View>
      <ScrollView
        scrollY
        className={classNames({
          [`${prefixCls}-value`]: true,
        })}
        style={{
          maxHeight: open ? '80vh' : '0',
        }}
      >
        {/* <View id={`anna-filter-item-${id}`}> */}
        {children ? (
          children
        ) : (
          <Dropdown
            value={value}
            options={options}
            onChange={handleChange}
            activeColor={activeColor}
          />
        )}
        {/* </View> */}
      </ScrollView>
    </View>
  );
};

export default React.forwardRef(Item);
