import '@/styles/globals.scss'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import RootLayout from '@/components/layout';
import { persistor, store } from "src/slices/storeCart";

export default function App({ Component, pageProps }) {
  return (
     <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RootLayout>
           <Component {...pageProps} />
          </RootLayout>    
        </PersistGate>
        </Provider>
     </>
  );
}
