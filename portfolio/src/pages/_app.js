import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={'${inter.variable} font-sans bg-light w-full min-h-screen'}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
  </>
  );
}
