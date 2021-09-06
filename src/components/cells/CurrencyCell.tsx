import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronCircleRight} from '@fortawesome/free-solid-svg-icons';
import {CurrencyGlimpse} from '../../state';
import {useActions} from '../../hooks/useActions';
import CoinIcon from '../util/CoinIcon';

interface CurrencyCellProps {
  currencyGlimpse: CurrencyGlimpse;
}

const CurrencyCell: React.FC<CurrencyCellProps> = ({currencyGlimpse}) => {
  const {selectCurrencyAction} = useActions();

  const onPress = () => {
    selectCurrencyAction(currencyGlimpse.id, currencyGlimpse.currencyName);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <CoinIcon icon={currencyGlimpse.icon || '#'} size="small" />
      <Text style={styles.symbol}>{currencyGlimpse.symbol}</Text>
      <Text style={styles.name}>{currencyGlimpse.currencyName}</Text>
      <FontAwesomeIcon icon={faChevronCircleRight} size={20} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  symbol: {
    fontWeight: '700',
    width: '25%',
    paddingHorizontal: 15,
    paddingRight: 15,
  },
  name: {
    flex: 1,
    paddingRight: 15,
  },
});

function areEqual(
  {currencyGlimpse: prevGlimpse},
  {currencyGlimpse: nextGlimpse},
) {
  return prevGlimpse.id === nextGlimpse.id;
}
export default React.memo(CurrencyCell, areEqual);
