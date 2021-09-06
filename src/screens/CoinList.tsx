import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useActions} from '../hooks/useActions';
import {useTypedSelector} from '../hooks/useTypedSelector';

const CoinList: React.FC = () => {
  const {fetchCurrencyList} = useActions();
  const {listData, loading, error} = useTypedSelector(state => ({
    listData: state.currencies?.listData,
    loading: state.currencies?.loading,
    error: state.currencies?.error,
  }));

  useEffect(() => {
    fetchCurrencyList();
  }, [fetchCurrencyList]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Coin List</Text>
    </View>
  );
};

export default CoinList;
