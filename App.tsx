import React from 'react';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import {store, persistor} from './src/state';
import CoinNavigationContainer from './src/navigation/CoinNavigationContainer';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CoinNavigationContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
