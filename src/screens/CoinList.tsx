import React, {useEffect, useMemo} from 'react';
import {StyleSheet, FlatList, Alert, View} from 'react-native';
import CurrencyCell from '../components/cells/CurrencyCell';
import SearchBar from '../components/util/SearchBar';
import {useActions} from '../hooks/useActions';
import {useTypedSelector} from '../hooks/useTypedSelector';

const CoinList: React.FC = () => {
  const {fetchCurrencyList} = useActions();

  const {listData, loading, listSearch, error} = useTypedSelector(
    ({currencies}) => ({
      listData: currencies.listData,
      loading: currencies?.loading,
      error: currencies?.error,
      listSearch: currencies.listSearch,
    }),
  );

  const filteredData = useMemo(() => {
    const data =
      listSearch && listSearch.length > 0
        ? listData.filter(item => {
            const q = listSearch?.toLowerCase() || '';
            return (
              item.currencyName.toLowerCase().includes(q) ||
              item.symbol.toLowerCase().includes(q)
            );
          })
        : listData;
    return data;
  }, [listData, listSearch]);

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
      <SearchBar />
      <FlatList
        onRefresh={fetchCurrencyList}
        refreshing={loading}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        data={filteredData}
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
