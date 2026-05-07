import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const locales = ['en', 'zh']  // 你的语言列表
const baseUrl = 'https://你的域名'

const pages = ['', 'about', 'contact']  // 你的实际页面路由

function generateSitemap(locale) {
  const urls = pages
    .map((page) => {
      const path = page ? `/${page}` : ''
      return `<url><loc>${baseUrl}/${locale}${path}</loc><changefreq>weekly</changefreq></url>`
    })
    .join('\n')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

  writeFileSync(join(__dirname, '..', 'public', `sitemap-${locale}.xml`), sitemap)
}

locales.forEach(generateSitemap)