import '@/styles/globals.scss'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import RootLayout from '@/components/layout';
import { persistor, store } from "src/slices/storeCart";
import { useState } from 'react';
export default function App({ Component, pageProps }) {
   const [isOpen, setIsOpen] = useState(false);

  return (
     <>
        <Provider store={store}>
           <PersistGate persistor={persistor}>
              <RootLayout isOpen={isOpen} setIsOpen={setIsOpen}>
                 <Component
                    {...pageProps}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                 />
              </RootLayout>
           </PersistGate>
        </Provider>
     </>
  );
}
