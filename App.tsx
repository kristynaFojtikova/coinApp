import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CoinList from './src/screens/CoinList';
import CoinDetail from './src/screens/CoinDetail';
import {Provider} from 'react-redux';
import {store} from './src/state';
import {setNaigationRef} from './src/util/navigationRef';

type CoinStackParamList = {
  CoinList: undefined;
  CoinDetail: {currencyId: string; name: string};
};

const CoinStack = createNativeStackNavigator<CoinStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={setNaigationRef}>
        <CoinStack.Navigator>
          <CoinStack.Screen
            name="CoinList"
            component={CoinList}
            options={{title: 'Coin App'}}
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
    </Provider>
  );
};

export default App;
