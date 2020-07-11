import * as React from 'react';
import { View } from 'remax/one';
import { Loading } from 'anna-remax-ui';
import { Block, Frame, Grid, GridItem } from '../../common';
import styles from './index.module.scss';

export default () => {
  return (
    <Frame grayBg>
      <Block title="Basic">
        <Grid>
          <GridItem>
            <Loading />
          </GridItem>
        </Grid>
      </Block>
      <Block title="Type">
        <Grid>
          <GridItem name="anna">
            <View className={styles.main} style={{ transform: 'translate(16px, 34px)' }}>
              <Loading type="anna" />
            </View>
          </GridItem>
          <GridItem name="wave">
            <View className={styles.main}>
              <Loading type="wave" />
            </View>
          </GridItem>
          <GridItem name="default">
            <View className={styles.main}>
              <Loading />
            </View>
          </GridItem>
        </Grid>
      </Block>
      <Block title="Color">
        <Grid>
          <GridItem name="#FF7777">
            <View className={styles.main} style={{ transform: 'translate(16px, 34px)' }}>
              <Loading type="anna" color="#FF7777" />
            </View>
          </GridItem>
          <GridItem name="#000000">
            <View className={styles.main}>
              <Loading type="wave" color="#000000" />
            </View>
          </GridItem>
          <GridItem name="#1890FF">
            <View className={styles.main}>
              <Loading color="#1890FF" />
            </View>
          </GridItem>
        </Grid>
      </Block>
    </Frame>
  );
};
