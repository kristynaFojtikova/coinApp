import React from 'react';
import {Text, View} from 'react-native';

interface CoinDetailProps {
  coinId: string;
}

const CoinDetail: React.FC<CoinDetailProps> = ({coinId}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Coin Detail</Text>
    </View>
  );
};

export default CoinDetail;
