import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
interface CellTitleWrapperProps {
  title: string;
}

const CellTitleWrapper: React.FC<CellTitleWrapperProps> = ({
  children,
  title,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontWeight: '800',
  },
});

export default CellTitleWrapper;
