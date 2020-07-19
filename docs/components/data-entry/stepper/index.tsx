import * as React from 'react';
import { View } from 'remax/one';
import { Stepper } from 'anna-remax-ui';
import { Block, Frame } from '../../common';
import styles from './index.module.scss';

export default () => {
  const [number, setNumber] = React.useState(1);
  const [number1, setNumber1] = React.useState(2);
  const [number2, setNumber2] = React.useState(3);
  const [number3, setNumber3] = React.useState(1);
  const [number4, setNumber4] = React.useState(1);
  const [number5, setNumber5] = React.useState(1);
  const [number6, setNumber6] = React.useState(1);
  const [number7, setNumber7] = React.useState(1);
  const [number8, setNumber8] = React.useState(1);
  const [number9, setNumber9] = React.useState(1);
  const [number10, setNumber10] = React.useState(1);
  const [number11, setNumber11] = React.useState(1);
  const [number12, setNumber12] = React.useState(1);
  const [number13, setNumber13] = React.useState(1);

  return (
    <Frame className={styles.app}>
      <Block title="Basic">
        <View className={styles.container}>
          <Stepper value={number} onChange={(val: any) => setNumber(val)} />
        </View>
      </Block>
      <Block title="Step">
        <View className={styles.container}>
          <Stepper step={3} value={number1} onChange={(val: any) => setNumber1(val)} />
        </View>
      </Block>
      <Block title="Min">
        <View className={styles.container}>
          <Stepper min={2} value={number2} onChange={(val: any) => setNumber2(val)} />
        </View>
      </Block>
      <Block title="Max">
        <View className={styles.container}>
          <Stepper max={3} value={number3} onChange={(val: any) => setNumber3(val)} />
        </View>
      </Block>
      <Block title="Disabled">
        <View className={styles.container}>
          <Stepper disabled value={number4} onChange={(val: any) => setNumber4(val)} />
        </View>
      </Block>
      <Block title="Plain">
        <View className={styles.container}>
          <Stepper plain value={number5} onChange={(val: any) => setNumber5(val)} />
        </View>
      </Block>
      <Block title="Size">
        <View className={styles.container}>
          <Stepper size="small" value={number12} onChange={(val: any) => setNumber12(val)} />
          <Stepper size="small" plain value={number13} onChange={(val: any) => setNumber13(val)} />
        </View>
      </Block>
      <Block title="Shape">
        <View className={styles.container}>
          <Stepper shape="circle" value={number6} onChange={(val: any) => setNumber6(val)} />
          <Stepper shape="circle" plain value={number7} onChange={(val: any) => setNumber7(val)} />
        </View>
      </Block>
      <Block title="Color">
        <View className={styles.container}>
          <Stepper
            color="#096dd9"
            max={7}
            value={number8}
            onChange={(val: any) => setNumber8(val)}
          />
          <Stepper
            color="#096dd9"
            plain
            max={7}
            value={number9}
            onChange={(val: any) => setNumber9(val)}
          />
        </View>
      </Block>
      <Block title="BgColor">
        <View className={styles.container}>
          <Stepper
            bgColor="#FFC409"
            shape="circle"
            max={7}
            value={number10}
            onChange={(val: any) => setNumber10(val)}
          />
          <Stepper
            bgColor="#FFC409"
            shape="circle"
            plain
            max={7}
            value={number11}
            onChange={(val: any) => setNumber11(val)}
          />
        </View>
      </Block>
    </Frame>
  );
};
