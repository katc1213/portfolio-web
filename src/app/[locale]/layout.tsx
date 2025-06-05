import { ThemeProvider } from '@/src/app/[locale]/components/ThemeProvider'
import type { Metadata } from 'next'
import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  useMessages
} from 'next-intl'
import { Bitter, Raleway, Karla } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import Head from 'next/head'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

import './globals.css'

const bitter = Bitter({
  subsets: ['latin'],
  variable: '--bitter'
})
const raleway = Raleway({
  subsets: ['latin'],
  variable: '--raleway'
})
const karla = Karla({
  subsets: ['latin'],
  variable: '--karla'
})
export const metadata: Metadata = {
  title: 'Katherine Chang',
  description: 'Welcome to my portfolio!',
  icons: {
    icon: '/favicon.ico' // or '/favicon.ico' if using .ico
  }
}

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = useMessages()
  return (
    <html
      lang={locale}
      dir={locale === 'ar' || locale == 'fa' ? 'rtl' : 'ltr'}
      className={`${karla.variable} ${raleway.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <Head>
      <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>

      <body>
        <ThemeProvider
          enableSystem
          attribute='class'
          defaultTheme='dark'
          themes={[
            'light',
            'dark'
          ]}
        >
          <NextIntlClientProvider
            locale={locale}
            messages={messages as AbstractIntlMessages}
          >
            <NextTopLoader
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              easing='ease'
              speed={200}
              shadow='0 0 10pxrgba(104, 177, 108, 0.6),0 0 5pxrgba(104, 177, 108, 0.6)'
              color='var(--primary)'
              showSpinner={false}
            />
            <Header locale={locale} />
            <main className='mx-auto max-w-screen-2xl'>{children}</main>
            <Footer /> 
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
