import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import  {store,persistor}    from './Redux/Store/configureStore'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
     <PersistGate persistor={persistor}>
      <App />
      </PersistGate>
  </Provider>
);


