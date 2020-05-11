import * as React from 'react';
import { Cell } from 'anna-remax-ui';
import { Block, Frame } from '../../common';

export default () => {
  return (
    <Frame grayBg>
      <Block title="Basic">
        <Cell label="Cell" border={false}>
          content
        </Cell>
      </Block>
      <Block title="With Icon">
        <Cell label="Music" icon="musicfill" border={false}>
          content
        </Cell>
      </Block>
      <Block title="With Required">
        <Cell label="Cell" required border={false}>
          content
        </Cell>
      </Block>
      <Block title="With Arrow">
        <Cell label="Cell" arrow border={false}>
          content
        </Cell>
      </Block>
      <Block title="With Border">
        <Cell label="Cell">content</Cell>
        <Cell label="Cell" border={false}>
          content
        </Cell>
      </Block>
      <Block title="With Description">
        <Cell label="Cell" border={false} description="Here is the description">
          content
        </Cell>
      </Block>
    </Frame>
  );
};
