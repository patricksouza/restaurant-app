import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {SearchBar} from '@rneui/themed';
import {SearchBarComponentProps} from '../../../utils/types';

const SearchBarGeneric: React.FunctionComponent<
  SearchBarComponentProps
> = props => {
  const [search, setSearch] = useState('');

  const updateSearch = (searchData: string) => {
    setSearch(searchData);
    props.getSearchValue(searchData);
  };

  return (
    <View style={styles.view}>
      <SearchBar
        containerStyle={{backgroundColor: 'none'}}
        platform="ios"
        placeholder="Pesquisar..."
        onChangeText={updateSearch}
        value={search}
        cancelButtonTitle="Limpar"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 5,
    backgroundColor: 'none',
  },
});

export default SearchBarGeneric;
