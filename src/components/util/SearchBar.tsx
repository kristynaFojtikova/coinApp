import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  Platform,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

import {useActions} from '../../hooks/useActions';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import Colors from '../../styles/Colors';

const SearchBar = () => {
  const {listSearch, visible} = useTypedSelector(({currencies}) => ({
    listSearch: currencies.listSearch,
    visible: currencies.searchBarVisible,
  }));
  const [searchInput, setSearchInput] = useState<string>(listSearch || '');

  const {updateListSearch} = useActions();

  useEffect(() => {
    const timeout = setTimeout(() => {
      updateListSearch(searchInput);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [searchInput, updateListSearch]);

  useEffect(() => {
    if (!visible) {
      setSearchInput('');
    }
  }, [visible]);

  const containerStyle = visible
    ? styles.container
    : {...styles.container, ...styles.collapsed};
  return (
    <View style={containerStyle}>
      {visible && (
        <>
          <TextInput
            value={searchInput}
            style={styles.input}
            placeholder="Search coins..."
            onChangeText={string => setSearchInput(string)}
            placeholderTextColor={'white'}
          />
          <TouchableOpacity
            onPress={() => {
              setSearchInput('');
            }}>
            <Text style={{color: Colors.lightFont}}>Clear</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingHorizontal: 25,
    backgroundColor: Colors.blackAplpha,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  collapsed: {
    height: 0,
    padding: 0,
  },
  input: {
    marginRight: 10,
    color: Colors.lightFont,
    flex: 1,
    ...Platform.select({
      android: {},
      ios: {
        paddingVertical: 10,
      },
    }),
  },
});

export default SearchBar;
