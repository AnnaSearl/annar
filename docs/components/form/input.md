# 输入框 Input

## 如何使用
```jsx
import { Input } from 'anna-remax-ui';

const App = () =>  {
  return <Input placeholder="yourname" onChange={(value) => console.log(value)} />
}

ReactDOM.render(<App />, document.body);
```


## API
### Input
|     属性     |              说明               |   类型   | 默认值 |
| ------------ | ------------------------------- | -------- | ------ |
| icon         | 图标名                          | string   | -      |
| error        | 是否标记错误                    | boolean  | false  |
| addon        | 右侧附加信息                    | node     | -      |
| onClickAddon | 点击 addon 时调用               | function | -      |
| ...props     | 其余继承所有原生 input 标签属性 | -        | -      |

### InputPassword
|   属性   |              说明               |  类型   | 默认值 |
| -------- | ------------------------------- | ------- | ------ |
| icon     | 图标名                          | string  | -      |
| error    | 是否标记错误                    | boolean | false  |
| ...props | 其余继承所有原生 input 标签属性 | -       | -      |


## 实例演示
```jsx
/*react*/
<script>
const { Input } = soui
const { InputPassword } = Input

export default const App = () =>  {
  return <Input placeholder="yourname" onChange={(value) => console.log(value)} />
}
</script>
```

