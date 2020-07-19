import * as React from 'react';
import { SwipeAction, Cell } from 'anna-remax-ui';
import { Block, Frame } from '../../common';
import './index.scss';

export default () => {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    console.log('Delete');
  };

  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleDelete1 = async () => {
    console.log('Delete');
  };

  const handleMark1 = async () => {
    console.log('Mark as Read');
  };

  return (
    <Frame grayBg>
      <Block title="Basic">
        <SwipeAction
          open={open}
          onOpened={() => handleOpen()}
          onClosed={() => handleClose()}
          options={[
            {
              name: 'Delete',
              style: {
                backgroundColor: '#ff0000',
              },
              onTap: () => handleDelete(),
            },
          ]}
        >
          <Cell label="Cell" border={false}>
            content
          </Cell>
        </SwipeAction>
      </Block>
      <Block title="Actions">
        <SwipeAction
          open={open1}
          onOpened={() => handleOpen1()}
          onClosed={() => handleClose1()}
          options={[
            {
              name: 'Mark as Read',
              style: {
                backgroundColor: '#333',
              },
              onTap: () => handleMark1(),
            },
            {
              name: 'Delete',
              style: {
                backgroundColor: '#ff0000',
              },
              onTap: () => handleDelete1(),
            },
          ]}
        >
          <Cell label="Cell" border={false}>
            content
          </Cell>
        </SwipeAction>
      </Block>
    </Frame>
  );
};
