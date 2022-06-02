import { useRouter } from 'next/router'
import { provider } from 'provider'

// hack to open websocket connection by reload page after ws connection is closed
export default function HackWS() {
  const router = useRouter()
  if (process.env.useWebSocket) {
    setTimeout(() => {
      // @ts-ignore
      console.log('websocket.readyState', provider.websocket.readyState)

      // @ts-ignore, state 1 = open
      if (provider.websocket.readyState != 1) {
        console.log('@quick-hack: reload to reopen ws connection by reload page')
        router.reload()
      }
    }, 5000) // wait 5 seconds
  }
}
