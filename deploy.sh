#!/bin/bash

# Lite Agent 一键部署脚本
echo "🚀 开始部署 Lite Agent..."

# 检查 Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js 未安装，请先安装 Node.js"
    exit 1
fi

# 安装依赖
echo "📦 安装依赖..."
npm install

# 构建
echo "🔨 构建项目..."
npm run build

echo ""
echo "✅ 构建完成！"
echo ""
echo "📁 项目结构："
echo "  • src/app/[locale]/       - 多语言页面"
echo "  • src/lib/content.ts      - 内容数据"
echo "  • src/messages/           - 多语言文案"
echo "  • public/                 - 静态文件与脚本"
echo ""
echo "🌍 本地运行："
echo "  npm run dev"
echo ""
echo "🚀 部署到 Vercel："
echo "  1. 推送到 GitHub: git push origin main"
echo "  2. 访问 https://vercel.com"
echo "  3. 导入项目 → 自动部署"
echo ""
echo "📱 访问地址："
echo "  • 中文版: http://localhost:3000/zh"
echo "  • English: http://localhost:3000/en"