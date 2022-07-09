# vuepress-blog

## 简介
本demo是基于vuepress搭建的博客系统，按照官网文档的说明即可简单地实现顶部导航栏、侧边菜单栏以及匹配md文件标题内容的搜索功能。然后可以部署到CloudBase以支持外网访问。

## 前置技能
- 命令行基础操作
- markdown基础语法
- JavaScript基础知识
- git与github基础使用

## 项目初始化
1. 创建并进入一个新目录 `mkdir my-blog && cd my-blog`
2. `npm init`
3. `npm install -D vuepress`
4. 创建首页的内容，约定要放docs/README.md中  
```sh
mkdir docs && echo '# Hello VuePress' > docs/README.md
```
5. 在生成的package.json文件中添加以下脚本
```json
"scripts": {
  "dev": "vuepress dev docs",
  "build": "vuepress build docs",
},
```
6. 本地部署 `npm run dev` 然后访问 `http://localhost:8080/` 即可看到效果

## 添加内容
文章内容需要放在docs文件夹下，例如
```
.
├── docs
│   ├── .vuepress
│   │   └── config.js（配置文件）
│   │
│   ├── algorithm
│   │   ├── 1.0-C++基础.md（对应路由/algorithm/1.0-C++基础.html）
│   │   └── README.md（对应路由/algorithm/）
│   │
│   ├── web
│   │   │
│   │   ├── html
│   │   │   ├── 1.0-HTML_base.md（对应路由/web/html/1.0-HTML_base.html）
│   │   │   └── README.md（对应路由/web/html/）
│   │   │
│   │   ├── css
│   │   │   ├── 2.0-CSS_base.md（对应路由/web/css/2.0-CSS_base.html）
│   │   │   └── README.md（对应路由/web/css/）
│   │   │
│   │   ├── js
│   │   │   ├── 3.0-JS_base.md（对应路由/web/js/3.0-JS_base.html）
│   │   │   └── README.md（对应路由/web/js/）
│   │   │
│   │   └── README.md（对应路由/web/）
│   │
│   └── README.md（首页，对应路由/）
│ 
└── package.json
```
可以自行添加需要的目录和文件，然后在文件添加内容，最后重新部署并查看效果

## 修改首页
默认的主题提供了一个简洁的首页布局，可以通过修改docs/README.md使用，例如
```md
---
home: true
heroText: Hero 标题
tagline: Hero 副标题
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```
重新部署可以查看效果

## 添加功能
在.vuepress/config.js中配置，例如
```js
// 基础配置：https://vuepress.vuejs.org/zh/config/
module.exports = {
  title: 'zBlog',
  description: '',
  // 主题配置：https://vuepress.vuejs.org/zh/theme/default-theme-config.html
  themeConfig: {
    // 导航栏
    nav: [
      { text: '算法', link: '/algorithm/' },
      {
        text: 'WEB',
        ariaLabel: 'WEB技术',
        items: [
          { text: 'HTML', link: '/web/html/' },
          { text: 'CSS', link: '/web/css/' },
          { text: 'JS', link: '/web/js/' }
        ]
      },
    ],
    // 侧边栏
    sidebarDepth: 3, // 侧边栏可以显示到###的标题
    sidebar: {
      '/algorithm/': [
        '1.0-C++基础',
      ],
      '/web/html/': [
        '1.0-HTML_base',
      ],
      '/web/css/': [
        '2.0-CSS_base',
      ],
      '/web/js/': [
        '3.0-JS_base',
      ],
      // 最后匹配首页
      '/': [
        '', /* /README.md */
      ]
    }
  }
}
```
配置后重新部署即可看到效果，其中搜索框默认自带，不用配置

## 外网访问
部署到外网的方式有很多：自己搭建服务器、云服务、GitHub Pages等，这里用的是腾讯云的CloudBase，因为相对简单。具体步骤如下

### 上传项目
先在代码托管平台gitee或github新建仓库，然后在本地项目根目录
```sh
git init
git add .
git commit -m "init"
```
注意是否有配置.gitignore，如果没有需要自行添加，例如
```
# mac
.DS_Store

# Dependency directories
node_modules/

# vuepress build output
.vuepress/dist
```
然后将本地项目与远程仓库同步
```
git remote add origin 仓库地址
git push -u origin master
```
上述过程也可以使用类似github desktop的工具完成


### 配置CloudBase
1. 登陆[腾讯云](https://cloud.tencent.com/)
2. 控制台 - 搜索CloudBase - 新建
3. 应用模板 - 代码导入 - 来源地址填`仓库地址` - 应用目录空着 - 部署分支填`master`
4. 环境信息 - 按个人需要填写即可
5. 应用配置 - 应用名称自定义 - 应用框架选`VuePress` - 构建命令`npm run dev` - 产物目录`docs/.vuepress/dist` - 部署目录`/`
6. 新建完成后会生成一个卡片 - 点击卡片可以查看刚才新建的资源环境 - 左侧菜单栏拉到最下方 - 点击我的应用
7. 可以查看刚才新建的应用，部署成功后可以便可以支持外网访问

### 更新博客
1. 本地修改代码
2. 更新到代码托管平台
3. cloudBase应用重新部署

## 书写文章
- 基于mardown语法
- 扩展markdown语法
  - 表格
  ```
  |  id  |  source-code  |  online-demo  |
  | :--  |  :---------:  |  ----------:  |        (定义单元格的对齐方式)
  |  01  |    [源码](xxx) |   [在线演示](xxx)   |
  ```