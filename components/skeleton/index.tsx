/** @format */

import * as React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import { getPrefixCls } from '../common';
import './index.scss';

const prefixCls = getPrefixCls('skeleton');

export interface SkeletonParagraphProps {
  rows?: number;
}

export interface SkeletonProps {
  title?: boolean;
  active?: boolean;
  avatar?: boolean;
  loading?: boolean;
  image?: boolean;
  paragraph?: SkeletonParagraphProps;
  children?: React.ReactNode;
}

const Skeleton = (props: SkeletonProps) => {
  const { title = true, active, avatar, loading, image, paragraph = {}, children } = props;

  const [loadingEnd, setLoadingEnd] = React.useState(false);
  const [renderStart, setRenderStart] = React.useState(false);

  React.useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setLoadingEnd(true);
      }, 300);
    }
  }, [loading]);

  React.useEffect(() => {
    if (loadingEnd) {
      setTimeout(() => {
        setRenderStart(true);
      }, 100);
    }
  }, [loadingEnd]);

  const isLoading = loading === undefined ? true : loading;
  const rows = React.useMemo(() => (paragraph.rows ? [...new Array(paragraph.rows).keys()] : []), [
    paragraph,
  ]);

  if (!loadingEnd) {
    return (
      <View className={prefixCls}>
        {
          <View
            className={classNames({
              [`${prefixCls}-container`]: true,
              [`${prefixCls}-container_active`]: !isLoading,
            })}
          >
            {image ? (
              <View
                className={classNames({
                  [`${prefixCls}-container-image`]: true,
                  [`${prefixCls}-active`]: active,
                })}
              />
            ) : null}
            {avatar ? (
              <View className={`${prefixCls}-container-avatar`}>
                <View
                  className={classNames({
                    [`${prefixCls}-container-avatar-left`]: true,
                    [`${prefixCls}-active`]: active,
                  })}
                />
                <View className={`${prefixCls}-container-avatar-right`}>
                  <View
                    className={classNames({
                      [`${prefixCls}-container-avatar-right-text`]: true,
                      [`${prefixCls}-active`]: active,
                    })}
                  />
                  <View
                    className={classNames({
                      [`${prefixCls}-container-avatar-right-text`]: true,
                      [`${prefixCls}-active`]: active,
                    })}
                  />
                </View>
              </View>
            ) : null}
            {title ? (
              <View
                className={classNames({
                  [`${prefixCls}-container-title`]: true,
                  [`${prefixCls}-active`]: active,
                })}
              />
            ) : null}
            {rows.map(item => (
              <View
                key={item}
                className={classNames({
                  [`${prefixCls}-container-row`]: true,
                  [`${prefixCls}-active`]: active,
                })}
              />
            ))}
          </View>
        }
      </View>
    );
  }

  return (
    <View className={prefixCls}>
      <View
        className={classNames({
          [`${prefixCls}-child_container`]: true,
          [`${prefixCls}-child_container_active`]: renderStart,
        })}
      >
        {children}
      </View>
    </View>
  );
};

export default Skeleton;
