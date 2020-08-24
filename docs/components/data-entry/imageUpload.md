---
title: ImageUpload
order: 22
---

## ImageUpload

Demo:

<code src="./image-upload/index.tsx" />

## API

#### ImageUpload

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| files | 图片文件数组 | `ImageProps[]` \| `string[]` | `[]` |
| multiple | 是否开启图片多选 | boolean | `false` |
| multipleCount | 开启图片多选时最多能选择的图片数 | number | `99` |
| maxCount | 最多可以选择的图片张数 | number | - |
| sizeType | 所选的图片的尺寸 | string[] | - |
| sourceType | 选择图片的来源 | string[] | - |
| deletable | 是否展示删除按钮 | boolean | `true` |
| disabled | 是否禁用 | boolean | `false` |
| children | 自定义新增区块的内容 | ReactNode | - |
| onChange | files 值发生变化触发的回调函数 | (e:` ImageProps[]` \| `string[]`) => void | - |


#### ImageProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| key | 此项必须设置（其值在整个选项范围内唯一） | string | - |
| url | 图片url | string | - |

