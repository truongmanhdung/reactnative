import React, { useState } from 'react';
import { render } from 'react-dom';
import { View, Text } from 'react-native';
import FilterSearchMe from './filterSearchMe';
import HeaderSearch from './headerSearch';
import HistorySearch from './historySearch';

const SearchHome = (props) => {
    const [keySearch, setKeySearch] = useState('');
    onKeySearch = (text) => {
        setKeySearch(text)
    }
    return (
        <View>
            <HeaderSearch keySearchOk={onKeySearch} />
            {/* <HistorySearch /> */}
            <FilterSearchMe keySearch={keySearch} />
        </View>
    )
};

export default SearchHome;
