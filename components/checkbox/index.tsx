import * as React from 'react';
import classNames from 'classnames';
import { View } from 'remax/alipay';
import styles from './index.module.scss';


export interface CheckboxProps {
  label?: React.ReactNode;
  checked?: boolean;
  value?: string;
  extra?: React.ReactNode;
  style?: React.CSSProperties;
  onChange?: (e: any, v?: any) => void;
}

const Checkbox = (props: CheckboxProps) => {

  const {
    label,
    checked,
    value,
    extra,
    style,
    onChange,
  } = props;

  const handleClick = () => {
    onChange?.(!checked, value);
  }

  return (
    <View 
      className={styles.checkbox}
      style={style}
    >
      <View 
        className={styles.container}
        onClick={handleClick}
      >
        <View
          className={classNames({
            [styles.icon]: true,
            'iconfont': true,
            'icon-round': !checked,
            'icon-roundcheckfill': checked,
          })}
          style={{
            color: checked ? "#1890FF" : "#999",
          }}
        />
        <View className={styles.label}>{label}</View>
      </View>
      <View className={styles.extra}>
        {extra}
      </View>
    </View>
  )
};

export interface GroupProps {
  value?: string;
  children?: React.ReactNode;
  direction?: string;
  onChange?: (e: any) => void;
}

const getCheckboxs = (
  children: React.ReactNode,
  value?: string,
  onChange?: ((e: any, v: any) => void)
) => {
  const checkboxs = React.Children.map(children, (checkbox: any) => {
    const newCheckbox = checkbox;
    let checked = false;
    if (newCheckbox && newCheckbox.props) {
      if (
        (newCheckbox.props.value || newCheckbox.props.value === 0) 
        && newCheckbox.props.value === value) {
        checked = true;
      } else {
        checked = false;
      }
      return <Checkbox {...newCheckbox.props} checked={checked} onChange={onChange} />;
    }
    return newCheckbox;
  })

  return checkboxs;
}

Checkbox.Group = (props: GroupProps) => {

  const {
    value,
    children,
    direction = "row",
    onChange,
  } = props;

  const checkboxs = getCheckboxs(children, value, onChange);

  return (
    <View 
      className={styles.group}
      style={{
        display: "flex",
        flexDirection: direction,
      } as React.CSSProperties}
    >
      {checkboxs}
    </View>
  )
}

export default Checkbox;

// 注意不要加 React.memo，会导致保错。
