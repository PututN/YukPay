import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from "../redux/store" 
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
  <>
  <Provider store={store}>
    <PersistGate persistor = {persistor}>
    <Component {...pageProps} />
    </PersistGate>
  </Provider>
  </>
  )
}
