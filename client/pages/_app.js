import Head from 'next/head'
import { CssBaseline } from '@mui/material'
import { store } from '../store/store'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <Provider store={store}>
      <CssBaseline>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          />
          {getLayout(<Component {...pageProps} />)}
      </CssBaseline>
    </Provider>
  )
  
}

export default MyApp