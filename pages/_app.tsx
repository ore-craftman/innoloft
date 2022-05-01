import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout'
import { store } from '../state/store'
import { Provider } from 'react-redux'

interface PropSchema {
  Component: any
  pageProps: any
}

function MyApp({ Component, pageProps }: PropSchema) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
