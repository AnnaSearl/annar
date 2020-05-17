import React, { useState } from 'react';
import { View } from 'remax/one';
import { Checkbox, Textarea } from 'anna-remax-ui';
import { Block, Frame } from '../../common';
import styles from './index.module.scss';

const radioStyle = { paddingBottom: '30px' };

export default () => {
  const [isTrue, setIsTrue] = useState(true);
  const [option, setOption] = useState('0');
  const [option1, setOption1] = useState('0');

  return (
    <Frame padding>
      <Block title="Basic" noTitlePadding>
        <View className={styles.container}>
          <Checkbox checked>Checkbox</Checkbox>
        </View>
      </Block>
      {/* <Block title="Label" noTitlePadding>
        <View className={styles.container}>
          <Checkbox checked={!isTrue} onChange={() => setIsTrue(v => !v)}>
            NO
          </Checkbox>
          <Checkbox checked={isTrue} onChange={() => setIsTrue(v => !v)}>
            YES
          </Checkbox>
        </View>
      </Block> */}
      <Block title="Group" noTitlePadding>
        <Checkbox.Group
          value={option1}
          onChange={(checked: boolean, value: any) => setOption1(value)}
        >
          <Checkbox value={'0'}>时效问题</Checkbox>
          <Checkbox value={'1'}>价格问题</Checkbox>
          <Checkbox value={'2'}>其他</Checkbox>
        </Checkbox.Group>
      </Block>
      <Block title="Direction & Extra" noTitlePadding>
        <View className={styles.container}>
          <Checkbox.Group
            direction="column"
            value={option}
            onChange={(checked: boolean, value: any) => setOption(value)}
          >
            <Checkbox value={'0'} style={radioStyle}>
              时效问题
            </Checkbox>
            <Checkbox value={'1'} style={radioStyle}>
              价格问题
            </Checkbox>
            <Checkbox
              value={'2'}
              extra={
                <Textarea
                  className={styles.remarks}
                  placeholder="若为其他，请填写备注（注：此处为extra）"
                  value={''}
                  showCount={false}
                />
              }
            >
              其他
            </Checkbox>
          </Checkbox.Group>
        </View>
      </Block>
    </Frame>
  );
};
