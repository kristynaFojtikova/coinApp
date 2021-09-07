import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  Platform,
  View,
  TouchableOpacity,
} from 'react-native';
import {faTimes, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {useActions} from '../../hooks/useActions';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import Colors from '../../styles/Colors';

const SearchBar = () => {
  const {listSearch} = useTypedSelector(({currencies}) => ({
    listSearch: currencies.listSearch,
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

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput
          value={searchInput}
          style={styles.input}
          placeholder="Search coins..."
          onChangeText={string => setSearchInput(string)}
          placeholderTextColor={'grey'}
        />
        <TouchableOpacity
          onPress={() => {
            setSearchInput('');
          }}>
          <FontAwesomeIcon icon={faTimesCircle} size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: Colors.lightGrey,
  },
  innerContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.lightFont,
    borderRadius: 10,
    paddingHorizontal: 15,
    ...Platform.select({
      android: {},
      ios: {
        paddingVertical: 10,
      },
    }),
  },
  input: {
    marginRight: 10,
    color: Colors.darkFont,
    flex: 1,
  },
});

export default SearchBar;
