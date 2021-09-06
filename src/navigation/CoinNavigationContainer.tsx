import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {setNaigationRef} from '../util/navigationRef';
import CoinList from '../screens/CoinList';
import CoinDetail from '../screens/CoinDetail';

type CoinStackParamList = {
  CoinList: undefined;
  CoinDetail: {currencyId: string; name: string};
};

const CoinStack = createNativeStackNavigator<CoinStackParamList>();

const CoinNavigationContainer = () => {
  return (
    <NavigationContainer ref={setNaigationRef}>
      <CoinStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {},
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
  );
};

export default CoinNavigationContainer;
