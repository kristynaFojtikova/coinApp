import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CoinList from './src/screens/CoinList';
import CoinDetail from './src/screens/CoinDetail';
import {Provider} from 'react-redux';
import {store} from './src/state';

type CoinStackParamList = {
  CoinList: undefined;
  CoinDetail: {coinId: string};
};

const CoinStack = createNativeStackNavigator<CoinStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <CoinStack.Navigator>
          <CoinStack.Screen name="CoinList" component={CoinList} />
          <CoinStack.Screen
            name="CoinDetail"
            component={CoinDetail}
            initialParams={{
              coinId: 'Test',
            }}
          />
        </CoinStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
