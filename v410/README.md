# v410 Vue3项目

## 环境依赖
- Node.js (推荐v22.x)
- npm 或 yarn
- Vue.js v3.5.13
- TypeScript v5.8.0
- Vite v6.2.4

## 主要依赖库
```json
{
  "dependencies": {
    "lodash-es": "^4.17.21",
    "pinia": "^3.0.1",
    "vue": "^3.5.13",
    "vue-router": "^4.5.0"
  }
}
```

## 项目设置
```bash
# 安装依赖
npm install

# 开发环境运行
npm run dev

# 构建生产版本
npm run build

# 运行单元测试
npm run test:unit

# 代码格式化
npm run format
```

## 项目结构
```
v410/
├── public/                 # 静态资源目录
│   └── favicon.ico
├── src/                   # 源代码目录
│   ├── assets/           # 资源文件
│   │   ├── base.css
│   │   ├── layout.css
│   │   ├── main.css
│   │   └── logo.svg
│   ├── components/       # 组件目录
│   │   ├── HelloWorld.vue
│   │   ├── TheWelcome.vue
│   │   ├── WelcomeItem.vue
│   │   └── icons/       # 图标组件
│   │       ├── IconCommunity.vue
│   │       ├── IconDocumentation.vue
│   │       ├── IconEcosystem.vue
│   │       ├── IconSupport.vue
│   │       └── IconTooling.vue
│   ├── router/          # 路由配置
│   │   └── index.ts
│   ├── stores/          # Pinia状态管理
│   │   └── counter.ts
│   ├── views/           # 页面视图组件
│   │   ├── AboutView.vue
│   │   ├── Home.vue
│   │   ├── HomeView.vue
│   │   ├── LeftSidebar.vue
│   │   ├── RightSidebar.vue
│   │   ├── p1.vue
│   │   ├── p2.vue
│   │   └── p3.vue
│   ├── App.vue          # 根组件
│   ├── APP2.vue         # 备用根组件
│   ├── APP3.vue         # 备用根组件
│   └── main.ts          # 应用入口文件
├── index.html           # HTML模板
├── env.d.ts            # 环境变量类型声明
├── tsconfig.json       # TypeScript配置
├── vite.config.ts      # Vite配置
└── vitest.config.ts    # Vitest测试配置
```

## 组件说明
本项目组件开发参考了Vue官方文档的最佳实践：

- **布局组件**
  - `LeftSidebar.vue`: 左侧边栏组件
  - `RightSidebar.vue`: 右侧边栏组件

- **页面组件**
  - `Home.vue`: 主页面组件
  - `AboutView.vue`: 关于页面
  - `p1.vue`/`p2.vue`/`p3.vue`: 子页面组件

- **通用组件**
  - `HelloWorld.vue`: 示例组件
  - `TheWelcome.vue`: 欢迎组件
  - `WelcomeItem.vue`: 欢迎页面子组件

## 技术栈说明
- **Vue 3**: 使用组合式API开发
- **TypeScript**: 提供类型支持
- **Vite**: 现代前端构建工具
- **Vue Router**: 路由管理
- **Pinia**: 状态管理
- **Vitest**: 单元测试框架
