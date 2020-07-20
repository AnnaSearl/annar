import * as React from 'react';
import { Tag } from 'anna-remax-ui';
import { Block, Frame } from '../../common';

const { CheckableTag } = Tag;

export default () => {
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);

  return (
    <Frame padding>
      <Block noTitlePadding title="Basic">
        <Tag>Anna</Tag>
      </Block>
      <Block noTitlePadding title="Plain">
        <Tag plain>Anna</Tag>
      </Block>
      <Block noTitlePadding title="Color">
        <Tag color="blue">blue</Tag>
        <Tag color="green">green</Tag>
        <Tag color="yellow">yellow</Tag>
        <Tag color="red">red</Tag>
      </Block>
      <Block noTitlePadding title="Size">
        <Tag size="large">large</Tag>
        <Tag>default</Tag>
        <Tag size="small">small</Tag>
      </Block>
      <Block noTitlePadding title="Checkable">
        <CheckableTag checkedColor="blue" checked={checked1} onChange={v => setChecked1(v)}>
          大众优选
        </CheckableTag>
        <CheckableTag checked={checked2} onChange={v => setChecked2(v)}>
          点评高分
        </CheckableTag>
      </Block>
    </Frame>
  );
};
