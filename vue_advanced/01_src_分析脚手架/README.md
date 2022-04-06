## 脚手架文件结构

	├── node_modules
	├── public（不要修改默认名字）
	│   ├── favicon.ico: 页签图标（不要修改默认名字）
	│   └── index.html: 主页面（不要修改默认名字）
	├── src（不要修改默认名字）
	│   ├── assets: 存放静态资源
	│   │   └── logo.png
	│   │── component: 存放组件
	│   │   └── HelloWorld.vue
	│   │── App.vue: 汇总所有组件
	│   │── main.js: 入口文件（不要修改默认名字）
	├── .gitignore: git版本管制忽略的配置
	├── babel.config.js: babel的配置文件，兼容es5以下的js代码
	├── vue.config.js: 全局 CLI 配置，https://cli.vuejs.org/zh/config/
	├── jsconfig.json: 是VSCode的配置文件，可用于配置跳转等
	├── package.json: 主要用来定义项目的基本信息和所依赖的包
	├── package-lock.json: 锁定所有模块的版本号，包括主模块和所有依赖子模块
	├── README.md: 应用描述文件

## 关于不同版本的Vue

1. vue.js与vue.runtime.xxx.js的区别：
    1. vue.js是完整版的Vue，包含：核心功能 + 模板解析器。
    2. vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。
2. 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template这个配置项，需要使用render函数接收到的createElement函数去指定具体内容。

## vue.config.js配置文件

1. 使用vue inspect > output.js可以查看到Vue脚手架的默认配置。
2. 使用vue.config.js可以对脚手架进行个性化定制，详情见：https://cli.vuejs.org/zh