import React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import Popup from '../popup';
import Icon from '../icon';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('action-sheet');

export interface ActionSheetActionGridProps {
  value?: string | number;
  name?: React.ReactNode;
  icon?: string;
  disabled?: boolean;
}

export interface ActionSheetActionDefaultProps {
  value?: string | number;
  text?: React.ReactNode | ActionSheetActionGridProps[];
  type?: string;
  mode?: string;
  disabled?: boolean;
}

export type ActionSheetAction = ActionSheetActionDefaultProps | ActionSheetActionGridProps;

export interface ActionSheetProps {
  open?: boolean;
  title?: React.ReactNode;
  actions?: ActionSheetActionDefaultProps[];
  cancelText?: React.ReactNode;
  cover?: boolean;
  children?: React.ReactNode;
  maskClosable?: boolean;
  onCancel?: (e?: any) => void;
  onChange?: (a: ActionSheetAction, g?: ActionSheetActionDefaultProps, e?: any) => void;
}

const ActionSheet = (props: ActionSheetProps) => {
  const {
    open,
    title,
    actions,
    cancelText = 'Cancel',
    cover,
    maskClosable = true,
    onCancel,
    onChange,
  } = props;

  const handleCancel = (e: any) => {
    onCancel?.(e);
  };

  const handleChange = (
    action: ActionSheetAction,
    grid?: ActionSheetActionDefaultProps,
    e?: any,
  ) => {
    onChange?.(action, grid, e);
  };

  const handleCloseMask = () => {
    maskClosable && onCancel?.();
  };

  const renderAction = (action: ActionSheetActionDefaultProps) => (
    <View
      key={action.value}
      className={classNames(`${prefixCls}-action`, {
        [`${prefixCls}-action-destructive`]: action.type === 'destructive',
      })}
      onTap={e => handleChange(action, undefined, e)}
    >
      {action.text}
    </View>
  );

  const renderGrid = (action: ActionSheetActionDefaultProps) => (
    <View
      key={action.value}
      className={classNames(`${prefixCls}-grid`, {
        [`${prefixCls}-action-destructive`]: action.type === 'destructive',
      })}
    >
      <View className={`${prefixCls}-grid-wrapper`}>
        {(action.text as ActionSheetActionGridProps[])?.map((item: ActionSheetActionGridProps) => (
          <View
            key={item.value}
            className={`${prefixCls}-grid-item`}
            onTap={e => handleChange(item, action, e)}
          >
            <View className={`${prefixCls}-grid-item-icon`}>
              {item.icon ? (
                <Icon type={item.icon} size="48px" color="rgba(0, 0, 0, 0.8)" />
              ) : (
                item.name
              )}
            </View>
            <View className={`${prefixCls}-grid-item-name`}>{item.name}</View>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <View className={prefixCls}>
      <Popup transparent position="bottom" open={open} onClose={handleCloseMask}>
        <View className={classNames(`${prefixCls}-container`, { [`${prefixCls}-cover`]: cover })}>
          <View className={`${prefixCls}-menu`}>
            {title ? (
              <View className={classNames(`${prefixCls}-action`, { [`${prefixCls}-title`]: true })}>
                {title}
              </View>
            ) : null}
            {actions?.map(action =>
              action.mode === 'grid' ? renderGrid(action) : renderAction(action),
            )}
          </View>
          <View className={`${prefixCls}-cancel`} onTap={handleCancel}>
            {cancelText}
          </View>
        </View>
      </Popup>
    </View>
  );
};

export default ActionSheet;
