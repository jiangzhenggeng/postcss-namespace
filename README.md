# postcss-namespace

一个 PostCSS 插件，用于给css添加作用域

## 使用

### 例子

```js
module.exports = {
  'plugins': {
    // ...
    // 给css添加命名空间插件
    'postcss-namespace': {
      getNameSpace(inputFile) {
        return '.A'
      }
    }
  }
}
```

输入
```css
.b { height:10px; }
@media screen and(min-width: 1440px){ .rule { font-size: 16em } }
```
输出
```css
.A .b { height:10px; }
@media screen and(min-width: 1440px){ .A .rule { font-size: 16em } }
```
## 许可证

[MIT](https://opensource.org/licenses/MIT)
