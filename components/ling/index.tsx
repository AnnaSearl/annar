import React, { useState, useEffect, useRef, useImperativeHandle } from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import Icon from '../icon';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('ling');

export interface LingConfigProps {
  title?: React.ReactNode;
  content?: React.ReactNode;
  icon?: React.ReactNode;
  iconColor?: string;
  titleColor?: string;
}

export interface LingProps {
  position?: string;
}

const Ling: React.ForwardRefRenderFunction<any, LingProps> = (props: LingProps, ref) => {
  const { position = 'top' } = props;

  const durationRef = useRef(2000);
  const onCloseRef = useRef<any>(null);

  const [show, setShow] = useState(false);
  const [config, setConfig] = useState<LingConfigProps>({});

  useEffect(() => {
    if (show && durationRef.current !== 0) {
      setTimeout(() => {
        setShow(false);
      }, durationRef.current);
    }
    if (!show) {
      onCloseRef.current?.();
    }
  }, [show, durationRef.current, onCloseRef.current]);

  const handleShow = (params: any, duration?: number, onClose?: () => void) => {
    if (typeof params === 'string') {
      setConfig({
        title: params,
        titleColor: '#333',
      });
    }
    if (typeof params === 'object' && params !== null) {
      setConfig(params);
    }
    if (duration || duration === 0) {
      durationRef.current = duration;
    } else {
      durationRef.current = 2000;
    }
    if (onClose && typeof onClose === 'function') {
      onCloseRef.current = onClose;
    }
    setShow(true);
  };

  const handleShowStatus = (
    commonConfig: any,
    params: any,
    duration?: number,
    onClose?: () => void,
  ) => {
    let config = commonConfig;
    if (typeof params === 'string') {
      config = {
        title: params,
        titleColor: '#333',
        ...commonConfig,
      };
    }
    if (typeof params === 'object' && params !== null) {
      config = {
        ...params,
        ...commonConfig,
      };
    }
    handleShow(config, duration, onClose);
  };

  useImperativeHandle(ref, () => ({
    show: handleShow,
    info: (params: any, duration?: number, onClose?: () => void) => {
      const infoConfig: any = {
        icon: 'infofill',
        iconColor: '#1890ff',
      };
      handleShowStatus(infoConfig, params, duration, onClose);
    },
    success: (params: any, duration?: number, onClose?: () => void) => {
      const successConfig: any = {
        icon: 'roundcheckfill',
        iconColor: '#52c41a',
      };
      handleShowStatus(successConfig, params, duration, onClose);
    },
    warning: (params: any, duration?: number, onClose?: () => void) => {
      const warningConfig: any = {
        icon: 'warnfill',
        iconColor: '#faad14',
      };
      handleShowStatus(warningConfig, params, duration, onClose);
    },
    error: (params: any, duration?: number, onClose?: () => void) => {
      const errorConfig: any = {
        icon: 'roundclosefill',
        iconColor: '#f5222d',
      };
      handleShowStatus(errorConfig, params, duration, onClose);
    },
  }));

  const classes = classNames({
    [prefixCls]: true,
    [`${prefixCls}-show`]: show,
    [`${prefixCls}-${position}`]: position,
  });

  const iconNode =
    typeof config?.icon === 'string' ? (
      <Icon type={config?.icon} color={config?.iconColor} size="52px" />
    ) : (
      config?.icon
    );

  return (
    <View className={classes}>
      <View className={`${prefixCls}-container`}>
        <View className={`${prefixCls}-title`} style={{ color: config?.titleColor }}>
          {config?.title}
        </View>
        {config?.content || config?.content === 0 ? (
          <View className={`${prefixCls}-content`}>{config?.content}</View>
        ) : null}
      </View>
      <View className={`${prefixCls}-icon`}>{iconNode}</View>
    </View>
  );
};

export default React.forwardRef(Ling);
