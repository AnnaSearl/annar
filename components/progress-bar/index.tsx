import * as React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import Loading from '../loading';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('progress_bar');

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
  const { data = [], value, style } = props;

  const [move, setMove] = React.useState(false);

  React.useEffect(() => {
    if (data.length > 1 && !move) {
      setTimeout(() => {
        setMove(true);
      }, 100);
    }
  }, [data]);

  let curIndex = -1;
  data.forEach((item, index) => {
    if (value === item.key) {
      curIndex = index;
    }
  });
  const moveX = data.length > 0 ? (100 / data.length) * (curIndex + 1) : 100;

  return (
    <View className={prefixCls} style={style}>
      {data?.map((item, index) => (
        <View
          key={item.key}
          className={classNames({
            [`${prefixCls}-node`]: true,
            [`${prefixCls}-node_first`]: index === 0,
            [`${prefixCls}-node_last`]: index === curIndex,
            [`${prefixCls}-node_active`]: index <= curIndex,
          })}
        >
          {item.value}
        </View>
      ))}
      {data.length === 0 ? <Loading type="gap" gapColor="#E8E8E8" /> : null}
      <View
        className={`${prefixCls}-process`}
        style={{
          width: move ? `${moveX}%` : 0,
          transition: `width ${(curIndex + 1) * 0.3}s ease-in`,
        }}
      />
    </View>
  );
};

export default ProgressBar;
