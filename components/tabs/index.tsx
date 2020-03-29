/** @format */

import * as React from 'react';
import { useMemo } from 'react';
import { View } from 'remax/one';
import { getPrefixCls } from '../common';
import './index.scss';

const prefixCls = getPrefixCls('tab');

export interface TabTitleProps {
  key?: string;
  title?: string;
}

export interface TabProps {
  tabs?: TabTitleProps[];
  activeTab?: string;
  fixed?: boolean;
  onTabClick?: (i: any) => void;
  headerContent?: React.ReactNode;
  children?: React.ReactNode;
  headerStyle?: React.CSSProperties;
  extra?: React.ReactNode;
}

export interface TabContentProps {
  tabId?: string;
  activeTab?: string;
  children?: React.ReactNode;
}

const Tab = (props: TabProps): React.ReactElement => {
  const {
    tabs = [],
    activeTab,
    fixed = true,
    onTabClick,
    headerContent,
    children,
    headerStyle,
    extra,
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
        }}>
        <View className={`${prefixCls}-header-titles`}>
          <View className={`${prefixCls}-header-titles-bg`}>
            <View className={`${prefixCls}-header-titles-bg-container`}>
              {tabs.map((item: TabTitleProps) => (
                <View
                  key={item.key}
                  className={`${prefixCls}-header-titles-bg-container-title`}
                  onTap={() => {
                    handleTabClick(item);
                  }}>
                  {item.title}
                </View>
              ))}
              <View
                className={`${prefixCls}-header-titles-bg-container-active`}
                style={{
                  transform: `translateX(${curIndex * 100}%)`,
                }}
              />
            </View>
          </View>
          {extra}
        </View>
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

Tab.TabContent = TabContent;

export default Tab;
