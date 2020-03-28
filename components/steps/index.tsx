
import * as React from 'react';
import { View, Text } from 'remax/one';
import Icon from '../icon';
import { getPrefixCls } from '../common';
import './index.scss';


const prefixCls = getPrefixCls('steps');

export interface StepProps {
  title?: React.ReactNode;
  extra?: React.ReactNode;
  description?: React.ReactNode;
}

export interface StepsProps {
  steps?: StepProps[];
}

const Steps = (props: StepsProps): React.ReactElement => {
  
  const { steps } = props;

  return (
    <View className={prefixCls}>
      {/* <View className={`${prefixCls}-first_step`}>
        <View className={styles.line} />
      </View> */}
      {
        steps?.map((item, index) => (
          <View
            key={index}
            className={`${prefixCls}-step`}
          >
            {
              index === 0
                ? <View className={`${prefixCls}-circle_current`}>
                    <Text
                      className={`${prefixCls}-circle_current-icon`}
                    >
                      <Icon type="roundcheckfill" size="40rpx" color="#1890FF" />
                    </Text>
                  </View>
                : <View className={`${prefixCls}-circle`} />
            }
            <View className={`${prefixCls}-line`} />
            <View className={`${prefixCls}-step-header`}>
              <View className={`${prefixCls}-step-header-title`}>
                {item.title}
              </View>
              <View className={`${prefixCls}-step-header-extra`}>
                {item.extra}
              </View>
            </View>
            <View className={`${prefixCls}-step-description`}>
              {item.description}
            </View>
          </View>
        ))
      }
    </View>
  )
}

export default Steps;
