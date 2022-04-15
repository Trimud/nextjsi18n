/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')

const nextConfig = {
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    // localesToIgnore: ['default'],
  },
  trailingSlash: false,
  reactStrictMode: true,
}

module.exports = nextTranslate(nextConfig)
