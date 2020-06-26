import * as React from 'react';
import { View } from 'remax/one';
import { Popup, Button } from 'anna-remax-ui';
import { Block, Frame } from '../../common';

export default () => {
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const [show3, setShow3] = React.useState(false);
  const [show4, setShow4] = React.useState(false);

  return (
    <Frame padding style={{ overflow: 'hidden' }}>
      <Block title="Basic">
        <Button onTap={() => setShow(true)}>Click here</Button>
      </Block>
      <Block title="With Title">
        <Button onTap={() => setShow1(true)}>Click here</Button>
      </Block>
      <Block title="Closeable">
        <Button onTap={() => setShow2(true)}>Click here</Button>
      </Block>
      <Block title="Position">
        <Button onTap={() => setShow3(true)}>Position = Left</Button>
      </Block>
      <Block title="Curve">
        <Button onTap={() => setShow4(true)}>Click here</Button>
      </Block>
      <Popup
        open={show}
        onClose={() => {
          setShow(false);
        }}
      >
        <View
          style={{
            padding: '80px',
          }}
        >
          Hi, boy~
        </View>
      </Popup>
      <Popup
        position="bottom"
        title="title"
        open={show1}
        onClose={() => {
          setShow1(false);
        }}
      >
        <View
          style={{
            height: '400px',
            padding: '0 24px',
          }}
        >
          content
        </View>
      </Popup>
      <Popup
        position="bottom"
        title="title"
        closeable
        open={show2}
        onClose={() => {
          setShow2(false);
        }}
      >
        <View
          style={{
            height: '400px',
            padding: '0 24px',
          }}
        >
          content
        </View>
      </Popup>
      <Popup
        position="left"
        title="title"
        open={show3}
        onClose={() => {
          setShow3(false);
        }}
      >
        <View
          style={{
            width: '400px',
            padding: '0 24px',
          }}
        ></View>
      </Popup>
      <Popup
        position="top"
        title="title"
        open={show4}
        onClose={() => {
          setShow4(false);
        }}
      >
        <View
          style={{
            height: '400px',
            padding: '0 24px',
          }}
        >
          content
        </View>
      </Popup>
    </Frame>
  );
};
