# 参考资料

### 包管理命令

npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]

alias: verison

### 加入组织

npm init --scope=v3p

### 相关介绍网页

[Rollup + TypeScript 编译类型声明文件](https://juejin.cn/post/7083862577578508324)
[从0到1搭建 Rollup + TypeScript 模板工程](https://blog.csdn.net/super_ying123/article/details/124139870)

### package 包导出总结

1. main
作为模块被别的程序导入时，模块的主入口，默认为根目录的 index.js 文件。

2. files
用于配置包发布时，所包含的内容，默认为[“*”]

3. type
nonde执行时的模块类型，commonjs 或 module 默认为 commonjs

4. exports
在模块引用时，替代 main 入口，mian 入口只能导出单个文件，

```js
"exports": {
  ".": {
    "import": "./dist/my-lib.js",
    "require": "./dist/my-lib.umd.cjs"
  }
}
```