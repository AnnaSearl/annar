import * as React from 'react';
import { View, Text, ScrollView } from 'remax/alipay';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';


export interface CascadeProps {
  name?: string;
  value: any[];
  options: any[];
  height?: string;
  className?: string;
  prompt?: (e: any) => string;
  onChange: (e: any) => void;
  onComplete?: (e: any, values?: any[]) => void;
}

let flag = false;
const Cascade = (props: CascadeProps) => {
  const { 
    name,
    value = [], 
    options = [], 
    height = '80vh', 
    className = '',
    prompt,
    onChange, 
    onComplete,
  } = props;

  const [showedOptions, setShowedOptions] = useState(options);
  const [sign, setSign] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  // useEffect(() => {
  //   if (options && options.length > 0) {
  //     setShowedOptions(options);
  //   }
  // }, [options]) // 无法使用此 useEffect，使用后会报错。

  useEffect(() => {
    if (sign && value.length > 0 && flag) {
      setSign(false);
      flag = false;
      const item = value[value.length - 1];
      onComplete?.({
        id: item.id,
        value: item.name,
      }, value);
    }
  }, [value, sign])

  const handleClick = async (i: any) => {
    let nextValue = [];
    const nextOption = {
      id: i.id,
      name: i.name,
      parentId: i.parentId,
    }
    if (value.length > 0 && value[value.length-1].parentId === i.parentId) {
      nextValue = [...value.slice(0, value.length-1), nextOption];
    } else {
      nextValue = [...value, nextOption];
    }
    onChange(nextValue);
    setScrollTop((top) => {
      return top === 0 ? 1 : 0; 
    });
    if (i.childrenNode) {
      setShowedOptions(i.childrenNode);
    }
    if (!i.childrenNode) {
      flag = true;
      setSign(true);
    }
  }

  const handleReChoose = (item: any, index: number) => {
    onChange(value.slice(0, index + 1));
    setShowedOptions(getMatchLevelOptions(item.id, options));
    setScrollTop((top) => {
      return top === 0 ? 1 : 0; 
    });
  }

  const getMatchLevelOptions = (id: string, data: any[]): any => {
    let r = null;
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      if (id === item.id) {
        r = data;
      } else if (item.childrenNode) {
        r = getMatchLevelOptions(id, item.childrenNode);
      }
      if (r) {
        return r;
      }
    }
    return null;
  }

  const h = value.length > 1 ? (90 * value.length + 40) - 30 : 130;

  return (
    <View
      className={classNames({
        [styles.cascade]: true,
        [className]: true,
      })}
      style={{
        height,
      }}
    >
      <View
        className={classNames({
          [styles.selectedOptions]: true,
          'class_selectedOptions': true,
        })}
      >
      {
        value.map((item, index) => (
          <View 
            key={item.id} 
            className={styles.step}
            onClick={() => {handleReChoose(item, index)}}
          >
            <View className={styles.line}>
              {
                (index === (value.length - 1))
                  ? null
                  : <View className={styles.dotLineActive} />
              }
              <Text className={styles.dot} style={{backgroundColor: '#1890FF'}} />
            </View>
            <View className={styles.container}>
              <View className={styles.content}>
                <View className={styles.main}>
                  <View className={styles.left}>
                    {item.name}
                  </View>
                  <View className={styles.right}>
                    <View className={styles.rightText}>
                      {prompt?.(index)}
                    </View>
                    <View className={styles.arrow}>
                      <Text
                        className={classNames({
                          [styles.icon]: true,
                          'iconfont': true,
                          'icon-right': true,
                        })}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        ))
      }
      </View>
      <View>
      <ScrollView
        scrollY
        className={styles.showedOptions}
        scrollTop={scrollTop}
        style={{
          height: `calc(${height} - ${h + 80}rpx)`,
        }}
      >
        <View className={styles.title}>{`选择${name}`}</View>
        {
          showedOptions.map((i) => (
            <View 
              key={i.id}
              className={styles.category}
              onClick={() => {
                handleClick(i)
              }}
            >
              {i.name}
            </View>
          ))
        }
      </ScrollView>
      </View>
    </View>
  );
};


export default Cascade;
