import * as React from 'react';
import { Image, View } from 'remax/one';
import { ImageUpload } from 'anna-remax-ui';
import { Block, Frame } from '../../common';

const logoUrl = 'https://smebimage.fuliaoyi.com/FoMXNlKdZt9UqufDkPony8ztWKsU';
const fontUrl = 'https://smebimage.fuliaoyi.com/Fr53_6YFoikRWCgyOsRTcQ4f7CNB';

export default () => {
  const [value, setValue] = React.useState([]);
  const [value1, setValue1] = React.useState([logoUrl]);
  const [value2, setValue2] = React.useState([logoUrl]);
  const [value3, setValue3] = React.useState([logoUrl]);
  const [value4, setValue4] = React.useState([logoUrl]);
  const [value5, setValue5] = React.useState([logoUrl]);
  const [value6, setValue6] = React.useState([]);
  const [value7, setValue7] = React.useState([]);

  const handleChange = (files: any) => {
    setValue(files);
  };
  const handleChange1 = (files: any) => {
    setValue1(files);
  };
  const handleChange2 = (files: any) => {
    setValue2(files);
  };
  const handleChange3 = (files: any) => {
    setValue3(files);
  };
  const handleChange4 = (files: any) => {
    setValue4(files);
  };
  const handleChange5 = (files: any) => {
    setValue5(files);
  };
  const handleChange6 = (files: any) => {
    setValue6(files);
  };
  const handleChange7 = (files: any) => {
    setValue7(files);
  };

  return (
    <Frame padding>
      <Block noTitlePadding title="Basic">
        <ImageUpload files={value} onChange={handleChange} />
      </Block>
      <Block noTitlePadding title="Multiple & MultipleCount">
        <ImageUpload files={value1} onChange={handleChange1} multiple multipleCount={3} />
      </Block>
      <Block noTitlePadding title="maxCount">
        <ImageUpload files={value2} onChange={handleChange2} maxCount={3} />
      </Block>
      <Block noTitlePadding title="SizeType">
        <ImageUpload files={value3} onChange={handleChange3} sizeType={['compressed']} />
      </Block>
      <Block noTitlePadding title="SourceType">
        <ImageUpload files={value4} onChange={handleChange4} sourceType={['camera']} />
      </Block>
      <Block noTitlePadding title="Deletable">
        <ImageUpload files={value5} onChange={handleChange5} deletable={false} />
      </Block>
      <Block noTitlePadding title="Disabled">
        <ImageUpload files={value6} onChange={handleChange6} disabled />
      </Block>
      <Block noTitlePadding title="Children">
        <ImageUpload files={value7} onChange={handleChange7} maxCount={1}>
          <Image mode="widthFix" src={fontUrl} style={{ width: '221px', height: '144px' }} />
        </ImageUpload>
      </Block>
    </Frame>
  );
};
