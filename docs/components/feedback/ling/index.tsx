import React, { useRef } from 'react';
import { View } from 'remax/one';
import { Ling, Button, Space } from 'annar';
import { Block, Frame } from '../../common';

export default () => {
  const ling = useRef<any>();

  const handleShow = () => {
    ling.current.show('Welcome to Annar !');
  };

  const handleOn = () => {
    ling.current.show({
      title: 'Dark Mode',
      content: 'On',
      icon: 'roundcheckfill',
    });
  };

  const handleOff = () => {
    ling.current.show({
      title: 'Dark Mode',
      content: 'Off',
      icon: 'roundclosefill',
      iconColor: '#666',
    });
  };

  const handleShow1 = () => {
    ling.current.show('Close after 6 seconds', 6000);
  };

  const handleShow2 = () => {
    ling.current.show('Print log when closed', 3000, () => {
      console.log('Ling has been closed');
    });
  };

  const handleShowInfo = () => {
    ling.current.info('Info');
  };

  const handleShowSuccess = () => {
    ling.current.success('Success');
  };

  const handleShowWarning = () => {
    ling.current.warning('Warning');
  };

  const handleShowError = () => {
    ling.current.error('Error');
  };

  return (
    <Frame padding>
      <Ling ref={ling} />

      <Block noTitlePadding title="Basic">
        <Button shape="square" onTap={handleShow}>
          Show Ling
        </Button>
      </Block>

      <Block noTitlePadding title="Config">
        <Space size="middle">
          <Button look="dark" shape="square" onTap={handleOn}>
            Turn on dark mode
          </Button>
          <Button look="light" shape="square" onTap={handleOff}>
            Turn off dark mode
          </Button>
        </Space>
      </Block>

      <Block noTitlePadding title="Duration">
        <Button shape="square" onTap={handleShow1}>
          Show Ling
        </Button>
      </Block>

      <Block noTitlePadding title="OnClose">
        <Button shape="square" onTap={handleShow2}>
          Show Ling
        </Button>
      </Block>

      <Block noTitlePadding title="Methods">
        <Space size="middle">
          <Button plain hairline color="#1890FF" shape="square" onTap={handleShowInfo}>
            Show Info
          </Button>
          <Button plain hairline color="#07C160" shape="square" onTap={handleShowSuccess}>
            Show Success
          </Button>
        </Space>
        <View style={{ height: '24px' }} />
        <Space size="middle">
          <Button plain hairline color="#faad14" shape="square" onTap={handleShowWarning}>
            Show Warning
          </Button>
          <Button plain hairline color="#FF4D4F" shape="square" onTap={handleShowError}>
            Show Error
          </Button>
        </Space>
      </Block>
    </Frame>
  );
};
