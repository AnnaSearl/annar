import React, { useMemo, useState, useEffect } from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import { createSelectorQuery } from '../one';
// import { isArrayValueEqual } from '../_util';
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
  animated?: boolean;
  children?: React.ReactNode;
}

const heightUnit = 48;
// const prevTabs: any[] = [];

const getTabContents = (
  children: React.ReactNode,
  activeKey?: string | number,
  animated?: boolean,
) => {
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
            animated={animated}
          />,
        )
      );
    }
  });
  // return isArrayValueEqual(tabs, prevTabs)
  //   ? [prevTabs, tabContents]
  //   : (prevTabs = tabs) && [tabs, tabContents];
  return [tabs, tabContents];
};

const getTabIndex = (tabs: TabTitleProps[], activeKey?: string | number) => {
  let tIndex = 0;
  tabs.forEach((i: any, index: number) => {
    if (i.key === activeKey) {
      tIndex = index;
    }
  });
  return tIndex;
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

  const [tabs, tabContents] = useMemo(() => getTabContents(children, activeKey, animated), [
    children,
  ]);
  const tabIndex = useMemo(() => getTabIndex(tabs, activeKey), [activeKey, tabs]);

  const [selected, setSelected] = useState(tabIndex);
  const [titleWrapperLeft, setTitleWrapperLeft] = useState(0);
  const [titleNodes, setTitleNodes] = useState<any[]>([]);

  useEffect(() => {
    if (type === 'plain') {
      const query: any = createSelectorQuery();
      query
        .select(`.${prefixCls}-plain`)
        .scrollOffset?.()
        .exec((ret: any) => {
          const r = Array.isArray(ret) ? ret[0] : ret;
          setTitleWrapperLeft(-(r?.scrollLeft || 0));
        });
    }
  }, [activeKey]);

  useEffect(() => {
    if (type === 'plain') {
      const query: any = createSelectorQuery();
      query
        .selectAll(`.${prefixCls}-plain .${prefixCls}-plain-title`)
        .boundingClientRect()
        .exec((ret: any) => {
          const r = Array.isArray(ret) ? ret[0] : [ret];
          const nodes =
            r?.map((i: any) => ({
              offsetLeft: i.left,
              offsetWidth: i.width,
            })) || [];
          // 解决切换tabbar导致页面渲染找不到相关节点(因为此时已经在跳转后一个页面，所以找不到)，从而使nodes这个数组为空，继而导致Tabs下标left重置为0。
          nodes.length > 0 && setTitleNodes(nodes);
        });
    }
  }, [tabs]);

  const handleTabClick = (item: any, index?: number) => {
    setSelected(index || 0);
    onTabClick?.(item);
  };

  const activeKeyStr = String(activeKey);

  const renderTabs = () => {
    if (type === 'plain') {
      const titleNode = titleNodes?.[selected] || { offsetLeft: 0, offsetWidth: 0 };
      let left = titleNode.offsetLeft + titleNode.offsetWidth / 2;
      // 解决小程序下无法获取到元素的 offsetLeft 的问题，使用 scrollOffset 来获取 scrollLeft。
      if (titleWrapperLeft < 0) {
        left += Math.abs(titleWrapperLeft);
      }
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
              })}
              onTap={() => handleTabClick(item, index)}
            >
              {item.tab}
            </View>
          ))}
          <View
            className={`${prefixCls}-plain-active`}
            style={{
              transform: `translateX(${left}PX) translateX(-50%)`,
            }}
          />
        </View>
      );
    }
    if (type === 'card') {
      return (
        <View className={`${prefixCls}-card`}>
          {tabs.map((item: TabTitleProps, index: number) => (
            <View
              key={item.key}
              className={classNames({
                [`${prefixCls}-card-title`]: true,
                [`${prefixCls}-card-active`]: activeKeyStr === item.key,
              })}
              onTap={() => handleTabClick(item, index)}
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
            {tabs.map((item: TabTitleProps, index: number) => (
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
                  handleTabClick(item, index);
                }}
              >
                {item.tab}
              </View>
            ))}
            <View
              className={`${prefixCls}-slider-active`}
              style={{
                width: `${100 / tabs.length}%`,
                transform: `translateX(${selected * 100}%)`,
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
        className={classNames(`${prefixCls}-header`, {
          [`${prefixCls}-header-fixed`]: fixed,
        })}
        style={{
          ...headerStyle,
        }}
      >
        {renderTabs()}
        <View className={`${prefixCls}-header-content`}>{headerContent}</View>
      </View>
      <View className={`${prefixCls}-content`}>
        <View
          className={`${prefixCls}-content-wrapper`}
          style={
            animated
              ? {
                  transition: `all 0.3s ease`,
                  transform: `translate3d(${-selected * 100}%, 0, 0)`,
                }
              : ({} as React.CSSProperties)
          }
        >
          {tabContents}
        </View>
      </View>
    </View>
  );
};

const TabContent: React.FC = (props: TabContentProps): React.ReactElement | null => {
  const { active, style, animated, children } = props;

  if (!active) {
    return (
      <View
        className={classNames(`${prefixCls}-content-tab`, {
          [`${prefixCls}-content-tab-inactive`]: !animated,
          [`${prefixCls}-content-tab-inactive-animated`]: animated,
        })}
        style={style}
      >
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
