import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import NumberFormat from 'react-number-format';
import CellTitleWrapper from './CellTittleWrapper';

interface SimpleValueCellProps {
  value?: number;
  title: string;
  prefix?: string;
  suffix?: string;
}

const FormattedValueCell: React.FC<SimpleValueCellProps> = ({
  value,
  title,
  prefix,
  suffix,
}) => {
  return (
    <CellTitleWrapper title={title}>
      <View style={styles.contentContainer}>
        {!value && <Text></Text>}
        {value && (
          <NumberFormat
            value={value}
            displayType={'text'}
            thousandSeparator={true}
            prefix={prefix}
            suffix={suffix}
            renderText={value => <Text>{value}</Text>}
          />
        )}
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
});

export default FormattedValueCell;
