import 'styles/style.scss'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'
import HeadGlobal from 'components/HeadGlobal'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <>
      <HeadGlobal />
      <Component key={router.asPath} {...pageProps} />
    </>
  )
}

