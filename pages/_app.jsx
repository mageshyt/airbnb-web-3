import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'
import { NotificationProvider } from 'web3uikit'

const progress = new ProgressBar({
  size: 4,
  color: '#FE595E',
  className: 'z-50',
  delay: 100,
})
Router.events.on('routeChangeStart', progress.start)

Router.events.on('routeChangeComplete', progress.finish)
function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_APP_ID}
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
    >
      <NotificationProvider>
        <Component {...pageProps} />
      </NotificationProvider>
    </MoralisProvider>
  )
}

export default MyApp
