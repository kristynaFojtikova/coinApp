import React from 'react';
import {TouchableOpacity, LayoutAnimation} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {setNavigationRef} from '../util/navigationRef';
import CoinList from '../screens/CoinList';
import CoinDetail from '../screens/CoinDetail';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronUp, faSearch} from '@fortawesome/free-solid-svg-icons';
import {useActions} from '../hooks/useActions';
import {useTypedSelector} from '../hooks/useTypedSelector';

type CoinStackParamList = {
  CoinList: undefined;
  CoinDetail: {currencyId: string; name: string};
};

const CoinStack = createNativeStackNavigator<CoinStackParamList>();

const CoinNavigationContainer = () => {
  const {toggleListSearchVisibility, updateListSearch} = useActions();
  const {searchBarVisible} = useTypedSelector(state => ({
    searchBarVisible: state.currencies.searchBarVisible,
  }));
  return (
    <NavigationContainer ref={setNavigationRef}>
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
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  LayoutAnimation.configureNext(
                    LayoutAnimation.Presets.easeInEaseOut,
                  );
                  if (searchBarVisible) {
                    updateListSearch('');
                  }
                  toggleListSearchVisibility();
                }}>
                <FontAwesomeIcon
                  icon={searchBarVisible ? faChevronUp : faSearch}
                />
              </TouchableOpacity>
            ),
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
