import React, {useEffect} from 'react';
import {StyleSheet, View, FlatList, Alert} from 'react-native';
import CurrencyCell from '../components/cells/CurrencyCell';
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

  useEffect(() => {
    if (error) {
      Alert.alert('Error', error);
    }
  }, [error]);

  return (
    <View>
      <FlatList
        onRefresh={fetchCurrencyList}
        refreshing={loading}
        style={styles.container}
        data={listData}
        renderItem={({item}) => <CurrencyCell currencyGlimpse={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  contentContainer: {},
});

export default CoinList;
