// 版本选择：本地版self 或 外网版all（仅显示上传到github的部分）
const version = "all"; // self all

/**
 * 侧边栏：可以利用sidebar-generator.html生成
 */
const sidebar4self = {
  "/algorithm-pending/": ["0-参考资料与学习方法-private", "1.0-C++基础-pending", "1.1-算法复杂度分析", "2.0-JS算法笔记"],
  "/backend-pending/java/": ["0.0-java_base", "1.0-springboot_base", "2.0-database"],
  "/backend-pending/python/": ["0.0-python_base", "0.1-python-mysql", "1.0-python-spider", "2.0-python-AI"],
  "/common-sense-pending/drawing/": ["0.0-live2d&photoshop"],
  "/common-sense-pending/economics/": ["0-待整理的经济学知识", "1.0-经济学原理-曼昆"],
  "/common-sense-pending/education/": ["n.0-慕课网体系课教学研究-private"],
  "/common-sense-pending/language/": ["0-Chinese", "1-English", "2-Japanese"],
  "/common-sense-pending/law/": ["1-中国法律体系"],
  "/common-sense-pending/psychology/": ["0-动机心理学", "1-情绪心理学"],
  "/demos/": ["1-html-css-js-pending", "A-world-0-private", "A-world-1-private", "vuepress-blog", "z0-问答工具-pending", "z1-阅读工具-pending", "z2-记录工具-pending", "z3-实践工具-pending", "z4-helper-private", "z4-talk-pending", "原生web-pending", "页面模仿-pending"],
  "/frontend-pending/vue框架/": ["0.0-vue基础", "1.0-vue2源码解析", "2.0-vue3源码解析"],
  "/frontend-pending/原生/": ["0.0-web_base", "1.0-HTML_base", "2.0-CSS_base", "2.1-CSS_布局", "2.2-CSS_实践-private", "2.x-CSS_base-old", "3.0-JS_base", "3.1-ES6_base", "3.n-JS_库-pending", "4.0-typescript", "5.0-svg"],
  "/server-pending/": ["0.0-服务器系统&虚拟机-pending", "0.1-linux命令", "0.2-域名与ssl证书-private", "0.n-问题收集-pending", "1.0-server配置LNMP-old", "1.1-建站流程-private", "2.0-进程&pm2", "3.0-数据库设计基础-old", "3.1-PHP操作mysql数据库-old", "3.2-YII基础-old", "4.0-部署-pending", "4.1-docker-private", "4.2-jenkins-pending"],
  "/tools-pending/": ["0.0-系统环境", "0.1-mac使用技巧", "1.0-vscode", "2.0-git-private", "3.0-chrome-pending", "n-通用工具-private"],
  "/": [""],
};

/**
 * 顶部导航栏：自行调整
 */
const nav4self = [
  { text: "算法", type: "-pending", link: "/algorithm-pending/" },
  {
    text: "前端",
    type: "-pending",
    items: [
      { text: "原生", link: "/frontend-pending/原生/" },
      { text: "vue框架", link: "/frontend-pending/vue框架/" },
    ],
  },
  {
    text: "后端",
    type: "-pending",
    items: [
      { text: "java", link: "/backend-pending/java/" },
      { text: "python", link: "/backend-pending/python/" },
    ],
  },
  {
    text: "常识",
    type: "-pending",
    items: [
      { text: "绘画", link: "/common-sense-pending/drawing/" },
      { text: "经济", link: "/common-sense-pending/economics/" },
      { text: "教育", link: "/common-sense-pending/education/" },
      { text: "语言", link: "/common-sense-pending/language/" },
      { text: "法律", link: "/common-sense-pending/law/" },
      { text: "心理学", link: "/common-sense-pending/psychology/" },
    ],
  },
  { text: "Demos", link: "/demos/" },
  { text: "服务器", type: "-pending", link: "/server-pending/" },
  { text: "工具", type: "-pending", link: "/tools-pending/" },
];

/**
 * 构建本地或外网
 */
let reg4self = /-private|-old|-pending/; // 隐藏含有标记的目录或文件
let sidebar4all = {};
for (let key in sidebar4self) {
  sidebar4all[key] = sidebar4self[key].filter((title) => !reg4self.test(title));
}
let nav4all = nav4self.filter((item) => !reg4self.test(item.type));
const sidebar = version === "self" ? sidebar4self : sidebar4all;
const nav = version === "self" ? nav4self : nav4all;
const port = version === "self" ? 8012 : 8080;

/**
 * 基础配置：https://vuepress.vuejs.org/zh/config/
 */
module.exports = {
  port: port,
  title: "zBlog",
  description: "",
  // 主题配置：图标、首页、导航栏、侧边栏 https://vuepress.vuejs.org/zh/theme/default-theme-config.html
  themeConfig: {
    nav: nav,
    sidebarDepth: 4, // 侧边栏可以显示到####的标题
    sidebar: sidebar,
  },
};
