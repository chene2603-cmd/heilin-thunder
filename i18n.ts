import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  // 从请求中获取语言，如果获取不到则默认使用 'en'
  let locale = await requestLocale;
  if (!locale) {
    locale = 'en';
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});