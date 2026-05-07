// ...原有导入
import Script from 'next/script'

export default function LocaleLayout({ children, params }) {
  return (
    <html lang={params.locale}>
      <head>
        {process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL && (
          <Script
            src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy="afterInteractive"
          />
        )}
      </head>
      <body>{children}</body>
    </html>
  )
}