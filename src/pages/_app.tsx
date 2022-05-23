import 'styles/style.scss'
import { useRouter } from 'next/router'


function App({ Component, pageProps }) {
  const router = useRouter()
  return <Component key={router.asPath} {...pageProps} />
}
export default App
