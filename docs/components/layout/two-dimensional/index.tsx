import * as React from 'react';
import { View } from 'remax/one';
import { Grid } from 'anna-remax-ui';
import { Block, Frame } from '../../common';
import './index.scss';

const data = ['#FFDDDD', '#FFFFCC', '#FFDDDD', '#FFFFCC', '#FFDDDD', '#FFFFCC'];
const data1 = ['#FFDDDD', '#FFFFCC', '#FFDDDD', '#FFFFCC'];
const data2 = ['#FFDDDD', '#FFFFCC', '#FFDDDD'];
const data3 = ['#FFDDDD', '#FFFFCC', '#CCCCFF', '#FFFFCC', '#FFDDDD'];
const data4 = ['#FFDDDD', '#CCCCFF', '#FFFFCC', '#66CCCC'];

export default () => {
  const renderGridItem = (col: any, index?: number) => (
    <View className="demo-grid-item" style={{ backgroundColor: col }}>
      {index}
    </View>
  );

  return (
    <Frame padding>
      <Block noTitlePadding title="Basic" className="demo-grid">
        <Grid data={data} columns={3}>
          {renderGridItem}
        </Grid>
        <View className="space" />
        <Grid data={data1} columns={3}>
          {renderGridItem}
        </Grid>
      </Block>
      <Block noTitlePadding title="Gutter" className="demo-grid">
        <Grid data={data2} columns={3} gutter={16}>
          {renderGridItem}
        </Grid>
        <View className="space" />
        <Grid data={data} columns={3} gutter={[8, 8]}>
          {renderGridItem}
        </Grid>
      </Block>
      <Block noTitlePadding title="Span" className="demo-grid">
        <Grid data={data3} columns={3} span={16}>
          {renderGridItem}
        </Grid>
        <View className="space" />
        <Grid data={data3} columns={3} span={-16}>
          {renderGridItem}
        </Grid>
        <View className="space" />
        <Grid data={data4} columns={3} span={[8, 16, 8, 16]}>
          {renderGridItem}
        </Grid>
      </Block>
    </Frame>
  );
};
