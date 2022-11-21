import Head from 'next/head'
import { store } from '../store/store'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import {blogextTheme} from '../styles/theme'
import { ThemeProvider } from '@mui/material'
import 'react-toastify/dist/ReactToastify.css';
import StateProvider from '../layouts/provider'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <StateProvider>
        <ThemeProvider theme={blogextTheme}>
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
            <Component {...pageProps} />
          </ThemeProvider>
        </StateProvider>
    </Provider>
  )
}

export default MyApp