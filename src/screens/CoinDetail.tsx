import React, {useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView, RefreshControl} from 'react-native';
import FormattedValueCell from '../components/cells/FomattedValueCell';

import MovingValueCell from '../components/cells/MovingValueCell';
import SimpleValueCell from '../components/cells/SimpleValueCell';
import CoinIcon from '../components/util/CoinIcon';
import {useActions} from '../hooks/useActions';
import {useTypedSelector} from '../hooks/useTypedSelector';

const CoinDetail: React.FC = () => {
  const {loading, error, currencyId, currencyDetail, currencyGlimpse} =
    useTypedSelector(state => ({
      currencyId: state.currencies?.selectedCurrencyId,
      currencyDetail: state.currencies?.selectedCurrencyDetail,
      loading: state.currencies?.loading,
      error: state.currencies?.error,
      currencyGlimpse: state.currencies?.listData.find(
        currency => currency.id === state.currencies?.selectedCurrencyId,
      ),
    }));

  const {fetchCurrencyDetail} = useActions();

  useEffect(() => {
    if (currencyId) {
      fetchCurrencyDetail(currencyId);
    }
  }, [currencyId, fetchCurrencyDetail]);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={loading || false}
          onRefresh={() => {
            fetchCurrencyDetail(currencyId || '');
          }}
        />
      }>
      <View style={styles.row}>
        <CoinIcon icon={currencyGlimpse?.icon || '#'} />
        <Text style={styles.symbol}>{currencyGlimpse?.symbol}</Text>
      </View>
      <SimpleValueCell
        value={`${currencyGlimpse?.currencyName}`}
        title="Name"
      />
      <SimpleValueCell value={`${currencyGlimpse?.rank}`} title="Rank" />
      <FormattedValueCell
        value={currencyDetail?.circulatingSupply}
        title="Circulating supply"
        suffix={` ${currencyGlimpse?.symbol}`}
      />
      <FormattedValueCell
        value={currencyDetail?.totalSupply}
        title="Total supply"
        suffix={` ${currencyGlimpse?.symbol}`}
      />
      <FormattedValueCell
        value={currencyDetail?.maxSupply}
        title="Max supply"
        suffix={` ${currencyGlimpse?.symbol}`}
      />
      <MovingValueCell title="Open" value={currencyDetail?.open} />
      <MovingValueCell title="Average" value={currencyDetail?.average} />
      <MovingValueCell title="Close" value={currencyDetail?.close} />
      <MovingValueCell title="Low" value={currencyDetail?.low} />
      <MovingValueCell title="High" value={currencyDetail?.high} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  symbol: {
    fontWeight: '800',
    fontSize: 24,
  },
});

export default CoinDetail;
