import Head from 'next/head'
import { CssBaseline } from '@mui/material'
import { store } from '../store/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <Provider store={store}>
      <CssBaseline>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        { getLayout(<Component {...pageProps} />)}
      </CssBaseline>
    </Provider>
  )
  
}

export default MyApp