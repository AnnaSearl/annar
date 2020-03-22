import * as React from 'react';
import { View } from 'remax/alipay';
import classNames from 'classnames';
import styles from './index.module.scss';

export interface SkeletonParagraphProps {
  rows?: number;
}

export interface SkeletonProps {
  title?: boolean;
  active?: boolean;
  avatar?: boolean;
  loading?: boolean;
  image?: boolean;
  paragraph?: SkeletonParagraphProps;
  children?: React.ReactNode;
}

const Skeleton = (props: SkeletonProps) => {

  const { 
    title = true,
    active, 
    avatar, 
    loading,
    image,
    paragraph = {},
    children,
  } = props;

  const [loadingEnd, setLoadingEnd] = React.useState(false);
  const [renderStart, setRenderStart] = React.useState(false);

  React.useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setLoadingEnd(true);
      }, 300)
    }
  }, [loading])

  React.useEffect(() => {
    if (loadingEnd) {
      setTimeout(() => {
        setRenderStart(true);
      }, 100)
    }
  }, [loadingEnd])

  const isLoading = loading === undefined ? true : loading;
  const rows = React.useMemo(() => paragraph.rows ? [...new Array(paragraph.rows).keys()] : [], [paragraph]);

  if (!loadingEnd) {
    return (
      <View className={styles.skeleton}>
        {
          <View
            className={classNames({
              [styles.skeletonContainer]: true,
              [styles.skeletonContainerActive]: !isLoading,
            })}
          >
            {
              image
                ? <View 
                    className={classNames({
                      [styles.image]: true,
                      [styles.active]: active,
                    })}
                  />
                : null
            }
            {
              avatar 
                ? <View 
                    className={styles.avatar}
                  >
                    <View
                      className={classNames({
                        [styles.left]: true,
                        [styles.active]: active,
                      })}
                    />
                    <View className={styles.right}>
                      <View className={classNames({
                          [styles.text]: true,
                          [styles.active]: active,
                        })} 
                      />
                      <View className={classNames({
                          [styles.text]: true,
                          [styles.active]: active,
                        })} 
                      />
                    </View>
                  </View>
                : null
            }
            {
              title 
                ? <View 
                    className={classNames({
                      [styles.title]: true,
                      [styles.active]: active,
                    })}
                  />
                : null
            }
            {
              rows.map((item) => (
                <View
                  key={item}
                  className={classNames({
                    [styles.row]: true,
                    [styles.active]: active,
                  })}
                />
              ))
            }
          </View>
        }
      </View>
    )
  }
  
  return (
    <View className={styles.skeleton}>
      <View
        className={classNames({
          [styles.childrenContainer]: true,
          [styles.childrenContainerActive]: renderStart,
        })}
      >
        {children}
      </View>
    </View>
  )
};

export default Skeleton;