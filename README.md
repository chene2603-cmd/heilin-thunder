# 🌍 Lite Agent

一个轻量级的国际化网站模板，支持前端脚本和本地JSON内容。

## ✨ 特性

- 🌍 多语言支持（中英文自动路由）
- 📦 纯静态，SEO友好
- 🚀 内置前端脚本引擎
- 💾 本地JSON内容管理
- 🎨 Tailwind CSS 样式
- 🔧 类型安全（TypeScript）
- 🆓 免费Vercel部署

## 🚀 快速开始

1. 创建项目
# 使用我的优化命令
npx create-next-app@latest my-intl-site --typescript --tailwind --eslint --app --src-dir --no-src-dir
cd my-intl-site
npm install next-intl
2. 清理并准备
# 删除默认页面，保留必要文件
rm -rf src/app/*.tsx src/app/globals.css
mkdir -p src/app/[locale] src/messages src/lib
📁 项目结构
my-intl-site/
├── middleware.ts
├── next.config.ts
├── package.json
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── page.tsx
│   │   │   └── layout.tsx
│   │   └── layout.tsx
│   ├── i18n.ts
│   ├── lib/
│   │   └── content.ts
│   └── messages/
│       ├── en.json
│       └── zh.json
├── public/
│   ├── script.js
│   └── lite-agent.js
└── tailwind.config.ts
1. 创建项目

npx create-next-app@latest my-intl-site --typescript --tailwind --eslint --app

cd my-intl-site

2. 安装依赖

npm install next-intl

3. 用本模板文件替换默认文件

（复制上面的配置文件）

4. 运行开发服务器

npm run dev
访问 http://localhost:3000/en (英文) 或 http://localhost:3000/zh (中文)

## 📁 项目结构
my-intl-site/

├── src/

│   ├── app/[locale]/     # 多语言页面

│   ├── lib/              # 工具和内容

│   └── messages/         # 翻译文案

├── public/              # 静态文件和脚本

└── 配置文件
## 🔧 使用说明

### 添加新语言
1. 在 `src/messages/` 添加新的语言文件，如 `fr.json`
2. 在 `middleware.ts` 中添加语言代码
3. 在 `src/lib/content.ts` 中为每个字段添加翻译

### 修改内容
- 文案：编辑 `src/messages/` 中的JSON文件
- 结构化内容：编辑 `src/lib/content.ts`
- 脚本：编辑 `public/` 中的JS文件
- 样式：编辑 `tailwind.config.ts` 或 `globals.css`

### 添加新页面
1. 在 `src/app/[locale]/` 创建新页面，如 `about/page.tsx`
2. 更新导航链接
3. 添加对应的翻译文案

## 🚀 部署到 Vercel

1. 推送代码到 GitHub
bash

git init

git add .

git commit -m "Initial commit"

git branch -M main

git remote add origin https://github.com/yourname/my-intl-site.git 

git push -u origin main
2. 在 Vercel 中导入项目
   - 使用 Next.js 框架预设
   - 自动检测配置
   - 无需额外设置

3. 自动部署完成
   - 访问 `https://my-intl-site.vercel.app`
   - 支持自定义域名
   - 自动SSL证书

## 🎯 扩展功能

### 添加API路由
## 📄 许可证

MIT License - 免费用于个人和商业项目
🎯 使用说明

一键初始化命令
# 复制此命令运行
npx create-next-app@latest lite-agent-site --typescript --tailwind --eslint --app --no-src-dir && cd lite-agent-site && npm install next-intl && rm -rf app/* && mkdir -p app/[locale] app/api lib messages && curl -o README.md https://raw.githubusercontent.com/example/lite-agent/main/README.md
主要功能

多语言路由：自动检测浏览器语言，支持  /en  和  /zh 

内容管理： src/lib/content.ts  集中管理所有结构化内容

脚本支持： public/  目录下的脚本文件，支持纯前端逻辑

一键部署：GitHub + Vercel 自动化部署

完全免费：Vercel 提供免费托管、CDN、HTTPS

开发流程
# 1. 开发
npm run dev

# 2. 构建测试
npm run build && npm start

# 3. 部署
git add . && git commit -m "update" && git push origin main
# 自动部署到 Vercel
🎁 扩展建议

添加分析：使用 Vercel Analytics 或 Umami

添加搜索：使用 Algolia 或本地搜索

添加评论：使用 Giscus 或 Utterances

添加表单：使用 Formspree 或 Vercel Forms

添加数据库：使用 Vercel Postgres 或 Supabase

这个 Lite Agent 模板完全满足你的需求：

✅ 前端交互：内置演示脚本 + 自定义脚本支持

✅ 本地JSON： content.ts  统一管理结构化内容

✅ 多语言：完整的国际化解决方案

✅ 一键部署：GitHub + Vercel 自动化流程

✅ 完全免费：零成本运行