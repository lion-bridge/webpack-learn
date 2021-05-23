## 基本语法
动态import(),允许代码执行时加载模块，基本语法（支持async-await）
```js
// test.js
export default (num) => num
export const sum = (a,b) => a+b

import('./test.js).then(({default, sum}) => {
    default(1);
    sum(2,3)
})
```
## `import()`内联注释
[内联注释api，介绍如何使用内联注释](https://webpack.docschina.org/api/module-methods/#magic-comments)

