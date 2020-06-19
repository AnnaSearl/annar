import * as React from 'react';
import { useMemo, useState } from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('tabs');

export interface TabTitleProps {
  key?: string | number;
  tab?: React.ReactNode;
}

export interface TabProps {
  type?: string;
  direction?: string;
  activeKey?: string | number;
  animated?: boolean;
  fixed?: boolean;
  onTabClick?: (i: any) => void;
  headerContent?: React.ReactNode;
  children?: React.ReactNode;
  headerStyle?: React.CSSProperties;
  extra?: React.ReactNode;
  titleWidth?: number;
  titleSquare?: boolean;
  titleAlign?: string;
}

export interface TabContentProps {
  key?: string | number;
  tab?: React.ReactNode;
  active?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const heightUnit = 48;

const getTabContents = (children: React.ReactNode, activeKey?: string | number) => {
  const tabContents: any[] = [];
  const tabs: any[] = [];
  React.Children.forEach(children, (node: any, index: number) => {
    const newNode = node;
    if (React.isValidElement(node)) {
      return (
        tabs.push({ key: newNode.key, tab: newNode.props.tab }) &&
        tabContents.push(
          <TabContent
            key={newNode.key}
            {...newNode.props}
            active={
              activeKey === undefined
                ? index === 0 && newNode.key
                : String(activeKey) === newNode.key
            }
          />,
        )
      );
    }
  });
  return [tabs, tabContents];
};

const Tabs = (props: TabProps): React.ReactElement => {
  const {
    type,
    direction = 'horizontal',
    activeKey,
    animated,
    fixed,
    onTabClick,
    headerContent,
    children,
    headerStyle,
    extra,
    titleWidth,
    titleSquare,
    titleAlign,
  } = props;

  const [selected, setSelected] = useState(0);

  const [tabs, tabContents] = getTabContents(children, activeKey);

  const getTabIndex = () => {
    let tIndex = 0;
    tabs.forEach((i: any, index: number) => {
      if (i.key === activeKey) {
        tIndex = index;
      }
    });
    return tIndex;
  };

  const curIndex = useMemo(() => getTabIndex(), [activeKey, tabs]);
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

  const handleTabClick = (item: any, index?: number) => {
    setSelected(index || 0);
    onTabClick?.(item);
  };

  const activeKeyStr = String(activeKey);

  const renderTabs = () => {
    if (type === 'plain') {
      return (
        <View
          className={classNames({
            [`${prefixCls}-plain`]: true,
            [`${prefixCls}-plain-center`]: titleAlign === 'center',
          })}
        >
          {tabs.map((item: TabTitleProps, index: number) => (
            <View
              key={item.key}
              className={classNames({
                [`${prefixCls}-plain-title`]: true,
                [`${prefixCls}-plain-center-title`]: titleAlign === 'center',
                // [`${prefixCls}-plain-active`]: activeKeyStr === item.key,
              })}
              onTap={() => handleTabClick(item, index)}
            >
              {item.tab}
            </View>
          ))}
          <View
            className={`${prefixCls}-plain-active`}
            style={{
              transform: `translate3d(${selected * 40}PX, 0, 0) translate3d(${
                selected * 25
              }PX, 0, 0)`,
            }}
          />
        </View>
      );
    }
    if (type === 'card') {
      return (
        <View className={`${prefixCls}-card`}>
          {tabs.map((item: TabTitleProps) => (
            <View
              key={item.key}
              className={classNames({
                [`${prefixCls}-card-title`]: true,
                [`${prefixCls}-card-active`]: activeKeyStr === item.key,
              })}
              onTap={() => handleTabClick(item)}
            >
              {item.tab}
            </View>
          ))}
        </View>
      );
    }
    return (
      <View className={`${prefixCls}-slider`}>
        <View
          className={classNames({
            [`${prefixCls}-slider-bg`]: true,
            [`${prefixCls}-slider-bg-square`]: titleSquare,
          })}
        >
          <View className={`${prefixCls}-slider-container`}>
            {tabs.map((item: TabTitleProps) => (
              <View
                key={item.key}
                className={`${prefixCls}-slider-title`}
                style={
                  {
                    fontWeight: activeKeyStr === item.key ? 500 : 400,
                    width: titleWidth ? `${titleWidth}px` : null,
                  } as React.CSSProperties
                }
                onTap={() => {
                  handleTabClick(item);
                }}
              >
                {item.tab}
              </View>
            ))}
            <View
              className={`${prefixCls}-slider-active`}
              style={{
                width: `${100 / tabs.length}%`,
                transform: `translateX(${curIndex * 100}%)`,
              }}
            />
          </View>
        </View>
        {extra}
      </View>
    );
  };

  if (direction === 'vertical') {
    return (
      <View className={prefixCls}>
        <View className={`${prefixCls}-vertical`}>
          <View className={`${prefixCls}-vertical-sidebar`}>
            {tabs?.map((item: TabTitleProps, index: number) => (
              <View
                key={item.key}
                className={`${prefixCls}-vertical-sidebar-item`}
                style={{
                  fontWeight: selected === index ? 500 : 400,
                  backgroundColor: selected === index ? '#FDFFFD' : '#FAFAFA',
                }}
                onTap={() => handleTabClick(item, index)}
              >
                {item.tab}
                {selected === index && (
                  <View className={`${prefixCls}-vertical-sidebar-top`}>
                    <View className={`${prefixCls}-vertical-sidebar-top-circle`} />
                  </View>
                )}
                {selected === index && (
                  <View className={`${prefixCls}-vertical-sidebar-bottom`}>
                    <View className={`${prefixCls}-vertical-sidebar-bottom-circle`} />
                  </View>
                )}
              </View>
            ))}
            <View
              className={`${prefixCls}-vertical-sidebar-active`}
              style={{
                transform: `translate3d(0, ${selected * heightUnit}PX, 0)`,
              }}
            />
          </View>
          <View className={`${prefixCls}-vertical-content`}>{tabContents}</View>
        </View>
      </View>
    );
  }

  return (
    <View className={prefixCls}>
      <View
        className={`${prefixCls}-header`}
        style={{
          ...fixedStyle,
          ...headerStyle,
        }}
      >
        {renderTabs()}
        <View className={`${prefixCls}-header-content`}>{headerContent}</View>
      </View>
      <View className={`${prefixCls}-content`}>
        <View
          className={`${prefixCls}-content-wrapper`}
          style={{
            transition: `${animated ? 'all' : 'none'} 0.3s ease`,
            transform: `translate3d(${-curIndex * 100}%, 0, 0)`,
          }}
        >
          {tabContents}
        </View>
      </View>
    </View>
  );
};

const TabContent: React.FC = (props: TabContentProps): React.ReactElement | null => {
  const { active, style, children } = props;

  if (!active) {
    return (
      <View className={`${prefixCls}-content-tab`} style={{ ...style, height: 0, minHeight: 0 }}>
        {children}
      </View>
    );
  }
  return (
    <View className={`${prefixCls}-content-tab`} style={style}>
      {children}
    </View>
  );
};

Tabs.TabContent = TabContent;

export default Tabs;
