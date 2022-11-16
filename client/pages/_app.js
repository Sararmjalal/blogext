import Head from 'next/head'
import { CssBaseline } from '@mui/material'


function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
      <CssBaseline>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        { getLayout(<Component {...pageProps} />)}
      </CssBaseline>
  )
  
}

export default MyApp