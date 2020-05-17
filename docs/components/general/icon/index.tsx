import * as React from 'react';
import { Icon } from 'anna-remax-ui';
import { Block, Frame, Grid, GridItem } from '../../common';

export default () => {
  return (
    <Frame grayBg>
      <Block title="Type">
        <Grid>
          <GridItem name="check">
            <Icon type="check" size="50px" />
          </GridItem>
          <GridItem name="close">
            <Icon type="close" size="50px" />
          </GridItem>
          <GridItem name="comment">
            <Icon type="comment" size="50px" />
          </GridItem>
          <GridItem name="scan">
            <Icon type="scan" size="50px" />
          </GridItem>
          <GridItem name="locationfill">
            <Icon type="locationfill" size="50px" />
          </GridItem>
          <GridItem name="emojifill">
            <Icon type="emojifill" size="50px" />
          </GridItem>
        </Grid>
      </Block>
      <Block title="Size">
        <Grid>
          <GridItem name="72 px">
            <Icon type="favorfill" size="72px" />
          </GridItem>
          <GridItem name="50 px">
            <Icon type="favorfill" size="50px" />
          </GridItem>
          <GridItem name="default">
            <Icon type="favorfill" size="28px" />
          </GridItem>
        </Grid>
      </Block>
      <Block title="Color">
        <Grid>
          <GridItem name="#FF6666">
            <Icon type="likefill" size="50px" color="#FF6666" />
          </GridItem>
          <GridItem name="#FFCC33">
            <Icon type="likefill" size="50px" color="#FFCC33" />
          </GridItem>
          <GridItem name="default">
            <Icon type="likefill" size="50px" />
          </GridItem>
        </Grid>
      </Block>
    </Frame>
  );
};
