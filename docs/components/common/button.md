# 按钮 Button

## 如何使用
```jsx
import { Button } from 'anna-remax-ui';

const App = () => {
  return <Button type="primary">确认</Button>
}

ReactDOM.render(<App />, document.body);
```


## API
### Button
|   属性   |                       说明                       |  类型   |   默认值    |
| -------- | ------------------------------------------------ | ------- | ----------- |
| type     | 类型，可选值为 ``primary`` ``ghost`` ``default`` | string  | ``default`` |
| size     | 尺寸，可选值为 ``small`` ``normal`` ``block``    | string  | ``normal``  |
| disabled | 是否被禁用                                       | boolean | false       |
| ...props | 其余继承所有原生 button 标签属性                 | -       | -           |

## 实例演示
```jsx
/*react*/
<script>
const { Button } = soui;

export default const App = () => {
  return <Button type="primary">确认</Button>
}
</script>
```

