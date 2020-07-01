import * as React from 'react';
import { ActionSheet, Button } from 'anna-remax-ui';
import { Block, Frame } from '../../common';

const actions = [
  { value: 1, text: 'Forward' },
  { value: 2, text: 'Like' },
  { value: 3, text: 'Collect' },
  { value: 4, text: 'Copy' },
];

const actions2 = [
  { value: 1, text: 'Forward' },
  { value: 2, text: 'Like' },
  { value: 3, text: 'Collect' },
  { value: 4, text: 'Delete', type: 'destructive' },
];

const actions3 = [
  { value: 1, text: 'Forward' },
  {
    value: 2,
    mode: 'grid',
    text: [
      { value: 1, name: 'Comment', icon: 'commentfill' },
      { value: 2, name: 'Appreciate', icon: 'appreciatefill' },
      { value: 3, name: 'Collect', icon: 'favorfill' },
      { value: 4, name: 'Like', icon: 'likefill' },
      { value: 5, name: 'Gratuity', icon: 'evaluate_fill' },
      { value: 6, name: 'Broadcast', icon: 'broadcast_fill' },
    ],
  },
  { value: 3, text: 'Delete', type: 'destructive' },
];

const actions4 = [
  { value: 1, text: 'Forward' },
  { value: 2, text: 'Like' },
  { value: 3, text: 'Collect' },
  { value: 4, text: 'Delete', type: 'destructive' },
];

export default () => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);

  return (
    <Frame padding style={{ overflow: 'hidden' }}>
      <Block noTitlePadding title="Basic">
        <Button onTap={() => setOpen(true)}>Open ActionSheet</Button>
        <ActionSheet
          open={open}
          actions={actions}
          onCancel={() => setOpen(false)}
          onChange={(a: any, g: any, e: any) => {
            console.log(a, g, e);
            setOpen(false);
          }}
        />
      </Block>
      <Block noTitlePadding title="With Title">
        <Button onTap={() => setOpen2(true)}>Open ActionSheet</Button>
        <ActionSheet
          open={open2}
          title="This is a title"
          actions={actions}
          onCancel={() => setOpen2(false)}
          onChange={(a: any, g: any, e: any) => {
            console.log(a, g, e);
            setOpen2(false);
          }}
        />
      </Block>
      <Block noTitlePadding title="Destructive Action">
        <Button onTap={() => setOpen3(true)}>Open ActionSheet</Button>
        <ActionSheet
          open={open3}
          actions={actions2}
          onCancel={() => setOpen3(false)}
          onChange={(a: any, g: any, e: any) => {
            console.log(a, g, e);
            setOpen3(false);
          }}
        />
      </Block>
      <Block noTitlePadding title="Grid Action">
        <Button onTap={() => setOpen4(true)}>Open ActionSheet</Button>
        <ActionSheet
          open={open4}
          actions={actions3}
          onCancel={() => setOpen4(false)}
          onChange={(a: any, g: any, e: any) => {
            console.log(a, g, e);
            setOpen4(false);
          }}
        />
      </Block>
      <Block noTitlePadding title="Cover">
        <Button onTap={() => setOpen5(true)}>Open ActionSheet</Button>
        <ActionSheet
          cover
          open={open5}
          actions={actions4}
          onCancel={() => setOpen5(false)}
          onChange={(a: any, g: any, e: any) => {
            console.log(a, g, e);
            setOpen5(false);
          }}
        />
      </Block>
    </Frame>
  );
};
