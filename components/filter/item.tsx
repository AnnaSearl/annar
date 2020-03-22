import * as React from 'react';
import { View, Text, ScrollView } from 'remax/alipay';
import styles from './item.module.scss';


export interface ItemProps {
  open?: boolean;
  label?: string;
  height?: string;
  onClick?: (open: boolean) => void;
  children?: React.ReactNode;
}

const Item = (props: ItemProps) => {

  const { 
    open, 
    label, 
    height, 
    onClick, 
    children,
  } = props;

  const handleClick = () => {
    onClick?.(!open);
  }

  return (
    <View className={styles.item}>
      <View 
        className={styles.label}
        onClick={handleClick}
      >
        <Text className={styles.text}>
          {label}
        </Text>
        {
          open
            ? <View className={styles.chevronUp} />
            : <View className={styles.chevronDown} />
        }
      </View>
      <ScrollView
        scrollY
        className={styles.value}
        style={{
          height: open ? height : 0,
        }}
      >
        {children}
      </ScrollView>
    </View>
  )
}

export default Item;