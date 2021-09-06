import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCaretSquareUp,
  faCaretSquareDown,
} from '@fortawesome/free-solid-svg-icons';
import Colors from '../../styles/Colors';
import CellTitleWrapper from './CellTittleWrapper';
import {MovingValue} from '../../state';

interface MovingValueProps {
  value?: MovingValue;
  title: string;
}

const MovingValueCell: React.FC<MovingValueProps> = ({value, title}) => {
  const content = () => {
    if (!value) {
      return <Text></Text>;
    }
    const positive = value[1] > 0;
    const icon = positive ? faCaretSquareUp : faCaretSquareDown;
    const color = positive ? Colors.green : Colors.red;
    return (
      <>
        <Text style={{...styles.value}}>${value[2095].toFixed(2)}</Text>
        <FontAwesomeIcon icon={icon} size={20} color={color} />
        <Text style={{...styles.change, color: color}}>
          {positive ? '+' : ''}
          {value[1].toFixed(2)}
        </Text>
      </>
    );
  };

  return (
    <CellTitleWrapper title={title}>
      <View style={styles.contentContainer}>{content()}</View>
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

export default MovingValueCell;
