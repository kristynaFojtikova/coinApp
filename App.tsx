import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import CoinList from './src/screens/CoinList';
import CoinDetail from './src/screens/CoinDetail';
import {store, persistor} from './src/state';
import {setNaigationRef} from './src/util/navigationRef';

type CoinStackParamList = {
  CoinList: undefined;
  CoinDetail: {currencyId: string; name: string};
};

const CoinStack = createNativeStackNavigator<CoinStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={setNaigationRef}>
          <CoinStack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: 'black',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}>
            <CoinStack.Screen
              name="CoinList"
              component={CoinList}
              options={{
                title: 'CoinApp',
              }}
            />
            <CoinStack.Screen
              name="CoinDetail"
              component={CoinDetail}
              options={({route}) => ({
                title: route.params.name,
                headerBackTitle: '',
              })}
            />
          </CoinStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
