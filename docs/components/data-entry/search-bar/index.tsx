import * as React from 'react';
import { SearchBar } from 'anna-remax-ui';
import { Block, Frame } from '../../common';

export default () => {
  const [value, setValue] = React.useState('');
  const [value1, setValue1] = React.useState('');
  const [value2, setValue2] = React.useState('');

  return (
    <Frame padding>
      <Block title="Basic">
        <SearchBar
          placeholder="搜索"
          value={value}
          onInput={(v: any) => setValue(v)}
          onClear={() => setValue('')}
        />
      </Block>
      <Block title="Show action button">
        <SearchBar
          placeholder="搜索"
          keepShowActionButton
          value={value1}
          onInput={(v: any) => setValue1(v)}
          onClear={() => setValue1('')}
        />
      </Block>
      <Block title="Custom action text">
        <SearchBar
          placeholder="搜索"
          actionName="搜索"
          value={value2}
          onInput={(v: any) => setValue2(v)}
          onClear={() => setValue2('')}
          onSubmit={() => {}}
          onActionClick={() => console.log('action')}
        />
      </Block>
      <Block title="Size">
        <SearchBar size="large" placeholder="large" style={{ marginBottom: '30px' }} />
        <SearchBar placeholder="default" style={{ marginBottom: '30px' }} />
        <SearchBar size="small" placeholder="small" />
      </Block>
      <Block title="Custom input style">
        <SearchBar
          placeholder="搜索"
          inputStyle={{
            backgroundColor: '#333',
          }}
        />
      </Block>
    </Frame>
  );
};
