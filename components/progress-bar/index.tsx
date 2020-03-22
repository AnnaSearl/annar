import * as React from 'react';
import { View } from 'remax/alipay';
import classNames from 'classnames';
import Loading from '../loading';
import styles from './index.module.scss';


export interface ItemProps {
  key: string;
  value: string;
}

export interface ProgressBarProps {
  data?: ItemProps[];
  value?: string;
  style?: React.CSSProperties;
}

const ProgressBar = (props: ProgressBarProps) => {
  const { 
    data = [], 
    value,
    style,
  } = props;

  const [move, setMove] = React.useState(false)

  React.useEffect(() => {
    if (data.length > 1 && !move) {
      setTimeout(() => {
        setMove(true);
      }, 100)
    }
  }, [data])

  let curIndex = -1;
  data.forEach((item, index) => {
    if (value === item.key) {
      curIndex = index;
    }
  })
  const moveX = data.length > 0 ? (100/data.length) * (curIndex + 1) : 100;

  return (
    <View 
      className={styles.progressBar}
      style={style}
    >
      {
        data?.map((item, index) => (
          <View
            key={item.key}
            className={classNames({
              [styles.node]: true,
              [styles.nodeFirst]: index === 0,
              [styles.nodeLast]: index === curIndex,
              [styles.nodeActive]: index <= curIndex,
            })}
          >
            {item.value}
          </View>
        ))
      }
      {
        data.length === 0
          ? <Loading emptyColor="#E8E8E8" />
          : null
      }
      <View 
        className={styles.process}
        style={{
          width: move ? `${moveX}%` : 0,
          transition: `width ${(curIndex + 1) * 0.3}s ease-in`,
        }}
      />
    </View>
  )
}

export default ProgressBar;
