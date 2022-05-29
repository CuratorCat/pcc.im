import 'styles/style.scss'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />

        <meta name="description" content="show your ens profile" />
        <meta name="keywords" content="pcc.im, ens" />
        <title>pcc.im</title>

        <meta name="application-name" content="pcc.im" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="pcc.im" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#251C45" />

        <link rel="apple-touch-icon" href="/icons/icon-512x512.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icons/icon-512x512.png" />

        <link rel="manifest" href="/manifest.json" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="pcc.im" />
        <meta property="og:description" content="show your ens profile" />
        <meta property="og:site_name" content="pcc.im" />
        <meta property="og:url" content="https://pcc.im" />
        <meta property="og:image" content="https://pcc.im//icons/icon-512x512.png" />
      </Head>
      <Component key={router.asPath} {...pageProps} />
    </>
  )
}
export default App
