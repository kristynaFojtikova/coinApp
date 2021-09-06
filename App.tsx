import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CoinList from './src/screens/CoinList';
import CoinDetail from './src/screens/CoinDetail';

type CoinStackParamList = {
  CoinList: undefined;
  CoinDetail: {coinId: string};
};

const CoinStack = createNativeStackNavigator<CoinStackParamList>();

const App = () => {
  return (
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
  );
};

export default App;
