/** @format */

import * as React from 'react';
import { useMemo } from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import { getPrefixCls } from '../common';
import './index.scss';

const prefixCls = getPrefixCls('tabs');

export interface TabTitleProps {
  key?: string;
  title?: string;
}

export interface TabProps {
  type?: string;
  tabs?: TabTitleProps[];
  activeTab?: string;
  fixed?: boolean;
  onTabClick?: (i: any) => void;
  headerContent?: React.ReactNode;
  children?: React.ReactNode;
  headerStyle?: React.CSSProperties;
  extra?: React.ReactNode;
  tabTitleWidth?: number;
  tabTitleSquare?: boolean;
}

export interface TabContentProps {
  tabId?: string;
  activeTab?: string;
  children?: React.ReactNode;
}

const Tabs = (props: TabProps): React.ReactElement => {
  const {
    type,
    tabs = [],
    activeTab,
    fixed,
    onTabClick,
    headerContent,
    children,
    headerStyle,
    extra,
    tabTitleWidth = 140,
    tabTitleSquare,
  } = props;

  const getTabIndex = () => {
    let tIndex = 0;
    tabs.forEach((i: any, index: number) => {
      if (i.key === activeTab) {
        tIndex = index;
      }
    });
    return tIndex;
  };

  const curIndex = useMemo(() => getTabIndex(), [activeTab, tabs]);
  const fixedStyle = useMemo(() => {
    return fixed
      ? ({
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9,
        } as React.CSSProperties)
      : null;
  }, [fixed]);

  const handleTabClick = (item: any) => {
    onTabClick?.(item);
  };

  return (
    <View className={prefixCls}>
      <View
        className={`${prefixCls}-header`}
        style={{
          ...fixedStyle,
          ...headerStyle,
        }}
      >
        {type !== 'card' && type !== 'plain' ? (
          <View className={`${prefixCls}-header-titles`}>
            <View
              className={classNames({
                [`${prefixCls}-header-titles-bg`]: true,
                [`${prefixCls}-header-titles-bg-square`]: tabTitleSquare,
              })}
            >
              <View className={`${prefixCls}-header-titles-bg-container`}>
                {tabs.map((item: TabTitleProps) => (
                  <View
                    key={item.key}
                    className={`${prefixCls}-header-titles-bg-container-title`}
                    style={{
                      fontWeight: activeTab === item.key ? 500 : 400,
                      width: `${tabTitleWidth}rpx`,
                    }}
                    onTap={() => {
                      handleTabClick(item);
                    }}
                  >
                    {item.title}
                  </View>
                ))}
                <View
                  className={`${prefixCls}-header-titles-bg-container-active`}
                  style={{
                    width: `${100 / tabs.length}%`,
                    transform: `translateX(${curIndex * 100}%)`,
                  }}
                />
              </View>
            </View>
            {extra}
          </View>
        ) : null}
        {type === 'plain' ? (
          <View className={`${prefixCls}-header-titles-plain`}>
            {tabs.map((item: TabTitleProps) => (
              <View
                key={item.key}
                className={classNames({
                  [`${prefixCls}-header-titles-plain-title`]: true,
                  [`${prefixCls}-header-titles-plain-title-active`]: activeTab === item.key,
                })}
                onTap={() => {
                  handleTabClick(item);
                }}
              >
                {item.title}
              </View>
            ))}
          </View>
        ) : null}
        {type === 'card' ? (
          <View className={`${prefixCls}-header-titles-card`}>
            {tabs.map((item: TabTitleProps) => (
              <View
                key={item.key}
                className={classNames({
                  [`${prefixCls}-header-titles-card-title`]: true,
                  [`${prefixCls}-header-titles-card-title-active`]: activeTab === item.key,
                })}
                onTap={() => {
                  handleTabClick(item);
                }}
              >
                {item.title}
              </View>
            ))}
          </View>
        ) : null}
        <View className={`${prefixCls}-header-content`}>{headerContent}</View>
      </View>
      <View className={`${prefixCls}-content`}>{children}</View>
    </View>
  );
};

const TabContent: React.FC = (props: TabContentProps): React.ReactElement | null => {
  const { tabId, activeTab, children } = props;

  if (activeTab !== tabId) {
    return null;
  }
  return <View>{children}</View>;
};

Tabs.TabContent = TabContent;

export default Tabs;
