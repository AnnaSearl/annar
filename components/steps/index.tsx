
import * as React from 'react';
import { View, Text } from 'remax/one';
import classNames from 'classnames';
import styles from './index.module.scss';


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
    <View className={styles.steps}>
      {/* <View className={styles.firstStep}>
        <View className={styles.line} />
      </View> */}
      {
        steps?.map((item, index) => (
          <View
            key={index}
            className={styles.step}
          >
            {
              index === 0
                ? <View className={styles.circleCurrent}>
                    <Text
                      className={classNames({
                        [styles.icon]: true,
                        'iconfont': true,
                        'icon-roundcheckfill': true,
                      })}
                    />
                  </View>
                : <View className={styles.circle} />
            }
            <View className={styles.line} />
            <View className={styles.header}>
              <View className={styles.title}>
                {item.title}
              </View>
              <View className={styles.extra}>
                {item.extra}
              </View>
            </View>
            <View className={styles.description}>
              {item.description}
            </View>
          </View>
        ))
      }
    </View>
  )
}

export default Steps;
