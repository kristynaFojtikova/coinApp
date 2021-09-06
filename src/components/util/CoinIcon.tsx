import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface CoinIconProps {
  icon?: string;
  size?: 'small' | 'medium';
}

const CoinIcon: React.FC<CoinIconProps> = ({icon = '§', size = 'medium'}) => {
  const [color, setColor] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
    setLoading(false);
  }, []);

  const containerStyle =
    size === 'small'
      ? {...styles.containerSmall, backgroundColor: `#${color}`}
      : {...styles.container, backgroundColor: `#${color}`};

  const iconStyle = size === 'small' ? styles.iconSmall : styles.icon;

  if (loading) {
    return null;
  }

  return (
    <View style={containerStyle}>
      <Text style={iconStyle}>{icon}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: 45,
    borderRadius: 22.5,
    marginRight: 15,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerSmall: {
    height: 38,
    width: 38,
    borderRadius: 19,
    marginRight: 19,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'center',
  },
  iconSmall: {
    fontWeight: '500',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default CoinIcon;
