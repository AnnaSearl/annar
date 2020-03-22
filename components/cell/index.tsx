import * as React from 'react';
import { View, Text } from 'remax/alipay';
import styles from './index.module.scss';

export interface ItemProps {
  label?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  valueStyle?: React.CSSProperties;
  childrenNodes?: any[];
  verticality?: boolean;
}

const Cell = (props: ItemProps) => {
  
  const { 
    label, 
    style, 
    labelStyle, 
    valueStyle, 
    children,
    childrenNodes,
    verticality,
  } = props;

  if (verticality) {
    return (
      <View className={styles.cell} style={style}>
        <View className={styles.verticalityContainer}>
          {
            label 
              ? <View className={styles.label} style={labelStyle}>
                  {label}
                </View>
              : null
          }
          <View className={styles.value} style={valueStyle}>
            {children}
          </View>
        </View>
      </View>
    )
  }

  return (
    <View className={styles.cell} style={style}>
      <View className={styles.container}>
        <Text className={styles.label} style={labelStyle}>
          {label}
        </Text>
        <View className={styles.value} style={valueStyle}>
          {(children || children === 0) ? children : '-'}
        </View>
      </View>
      {
        childrenNodes 
        ? <View className={styles.childrenNodes}>
            {
              childrenNodes.map((item, index) => (
                <View
                  key={index}
                  className={styles.childrenNode}
                >
                  <View 
                    className={styles.childrenNodeContainer}
                  >
                    <View
                      className={styles.childrenNodeLabel}
                    >
                      {item.label}
                    </View>
                    <View
                      className={styles.childrenNodeValue}
                    >
                      {item.value}
                    </View>
                  </View>
                  <View className={styles.line} />
                </View>
              ))
            }
          </View>
        : null
      }
      
    </View>
  )
}

export default Cell;
