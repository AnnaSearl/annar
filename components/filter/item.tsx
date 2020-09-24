import React, { useImperativeHandle, useState } from 'react';
import { View, Text } from 'remax/one';
import classNames from 'classnames';
import { ScrollView } from '../one';
import Dropdown, { OptionProps } from '../dropdown';
import Popup from '../popup';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('filter-item');

export interface ItemProps {
  title?: string;
  height?: string;
  children?: React.ReactNode;
  value?: string;
  options?: OptionProps[];
  activeColor?: string;
  disabled?: boolean;
  onChange?: (e: OptionProps) => void;
  onTap?: (open: boolean) => void;
  onShowMask?: (show: boolean) => void;
}

const Item = (props: ItemProps, ref: any): React.ReactElement => {
  const {
    title,
    onTap,
    children,
    onShowMask,
    value,
    options = [],
    onChange,
    activeColor,
    disabled,
  } = props;

  const [open, setOpen] = useState(false);

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

  return (
    <View className={prefixCls}>
      <View style={{ backgroundColor: '#FDFFFD' }}>
        <View
          className={classNames({
            [`${prefixCls}-label`]: true,
            [`${prefixCls}-label-disabled`]: disabled,
          })}
          onTap={handleTap}
        >
          <Text className={`${prefixCls}-label-text`}>
            {options?.find(option => option.value === value)?.text || title}
          </Text>
          {open ? (
            <Text className={`${prefixCls}-label-chevronUp`} />
          ) : (
            <Text className={`${prefixCls}-label-chevronDown`} />
          )}
        </View>
      </View>
      <Popup
        position="bottom"
        square
        curve="ease"
        mask={false}
        open={open}
        style={{
          position: 'absolute',
          zIndex: -1,
          transform: open ? 'translate3d(0, 100%, 0)' : 'translate3d(0, 0, 0)',
        }}
      >
        <ScrollView
          scrollY
          className={classNames({
            [`${prefixCls}-value`]: true,
          })}
        >
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
        </ScrollView>
      </Popup>
    </View>
  );
};

export default React.forwardRef(Item);
