// import { DOMAIN_MAPPING } from '@framework/domain-mapping'
// import { getDomain } from '@framework/utils'
import { NextResponse } from 'next/server'

export function middleware(req) {
  const { nextUrl } = req
  // const { hostname } = nextUrl
  const url = nextUrl.clone()
  const { pathname, search } = url

  const domain = 'demo.de'
//   const { domain } = getDomain(process.env.CUSTOM_DOMAIN || hostname)
//   const { defaultLocale, allowedLocales } = DOMAIN_MAPPING[domain]
//   let locale = defaultLocale

// //   if (
// //     allowedLocales.includes(req.cookies['NEXT_LOCALE']) &&
// //     allowedLocales.includes(url.locale)
// //   ) {
// //     locale = url.locale !== 'default' ? url.locale : req.cookies['NEXT_LOCALE']
// //   } else if (allowedLocales.includes(req.cookies['NEXT_LOCALE'])) {
// //     locale = req.cookies['NEXT_LOCALE']
// //   } else if (allowedLocales.includes(url.locale)) {
// //     locale = url.locale
// //   }

// //   // Prevent security issues – users should not be able to canonically access
// //   // the pages/sites folder and its respective contents.
// //   if (
// //     pathname.includes('/_sites') &&
// //     !pathname.includes('/404') &&
// //     !pathname.includes('/500')
// //   ) {
// //     url.locale = locale
// //     url.pathname = `/_sites/${domain}/404`
// //     return NextResponse.redirect(url).cookie('NEXT_LOCALE', locale)
// //   }

// //   if (
// //     pathname.includes('/404') // redirect 404 page
// //   ) {
// //     if (!allowedLocales.includes(url.locale)) {
// //       url.locale = locale
// //       return NextResponse.redirect(url).cookie('NEXT_LOCALE', locale)
// //     } else {
// //       return NextResponse.rewrite(`/${locale}/_sites/${domain}/404`).cookie(
// //         'NEXT_LOCALE',
// //         locale
// //       )
// //     }
// //   } else if (
// //     pathname.includes('/500') // redirect 500 page
// //   ) {
// //     if (!allowedLocales.includes(url.locale)) {
// //       url.locale = locale
// //       return NextResponse.redirect(url).cookie('NEXT_LOCALE', locale)
// //     } else {
// //       return NextResponse.rewrite(`/${locale}/_sites/${domain}/500`).cookie(
// //         'NEXT_LOCALE',
// //         locale
// //       )
// //     }
// //   } else if (
// //     !pathname.includes('.') && // exclude all files in the public folder
// //     !pathname.startsWith('/api') // exclude all API routes
// //   ) {
// //     if (!allowedLocales.includes(url.locale) && pathname !== '/') {
// //       // Redirect to default locale if someone tries
// //       // to access not allowed locale for current site
// //       url.locale = locale

// //       return NextResponse.redirect(url).cookie('NEXT_LOCALE', locale)
// //     } else {
// //       // rewrite to the current hostname under the
// //       // pages/_sites folder for the respective locale
// //       return NextResponse.rewrite(
// //         `/${locale}/_sites/${domain}${pathname}${search}`
// //       ).cookie('NEXT_LOCALE', locale)
// //     }
// //   } else {
// //     return NextResponse.next().cookie('NEXT_LOCALE', locale)
// //   }
  if (
    !pathname.includes('.') && // exclude all files in the public folder
    !pathname.startsWith('/api') // exclude all API routes
  ) {
    url.pathname = `/_sites/${domain}${pathname}${search}`
    return NextResponse.rewrite(url).cookie('NEXT_LOCALE', url.locale)
  }
}
