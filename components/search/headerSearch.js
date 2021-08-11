import React, { useState, useEffect } from 'react';
import {
  TextInput, View, StyleSheet, KeyboardAvoidingView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
const HeaderSearch = (props) => {
  const [focusInput, setFocusInput] = useState('#D5D9DB');
  const [keySearch, setKeySearch] = useState('');
  const onFocusInput = () => {
    setFocusInput('red');
  };
  const { keySearchOk } = props;
  useEffect(() => {
    keySearchOk(keySearch)
  }, [keySearch])
  const onBlurInput = () => {
    setFocusInput('#D5D9DB');
  };

  const onchangeText = (text) => {
    setKeySearch(text)
  }
  const styles = StyleSheet.create({
    Input: {
      borderColor: focusInput,
      borderWidth: 1,
      backgroundColor: '#DEE1E3',
      padding: 10,
      paddingStart: 20,
      borderRadius: 16,
    },
    positionParent: {
      position: 'relative',
      padding: 20,
    },
    positionSearch: {
      position: 'absolute',
      right: 10,
      bottom: 12,
      color: '#6D8DC9'
    },
  });

  return (
    <View>
      <KeyboardAvoidingView style={styles.positionParent} keyboardVerticalOffset={100} behavior="position">
        <TextInput
          returnKeyType="next"
          onFocus={onFocusInput}
          style={styles.Input}
          onBlur={onBlurInput}
          onChangeText={onchangeText}
          placeholderTextSize={14}
          placeholderTextColor="#7F878E"
          placeholder="Từ khóa tìm kiếm"
        />
        <Ionicons style={styles.positionSearch} name="search" size={16} />
      </KeyboardAvoidingView>
    </View>
  );
};


export default HeaderSearch;
