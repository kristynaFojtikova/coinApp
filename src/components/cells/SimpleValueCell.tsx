import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CellTitleWrapper from './CellTittleWrapper';

interface SimpleValueCellProps {
  value?: string;
  title: string;
}

const SimpleValueCell: React.FC<SimpleValueCellProps> = ({value, title}) => {
  return (
    <CellTitleWrapper title={title}>
      <View style={styles.contentContainer}>
        {!value && <Text></Text>}
        {value && <Text style={{...styles.value}}>{value}</Text>}
      </View>
    </CellTitleWrapper>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  value: {
    marginRight: 15,
    fontWeight: '600',
  },
  change: {
    marginLeft: 5,
  },
});

export default SimpleValueCell;
