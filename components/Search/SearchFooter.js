/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Footer, Input} from 'native-base';
import FA from 'react-native-vector-icons/FontAwesome';
const SearchFooter = ({navigation, handleChange, handleSearch, bgColor}) => {
  return (
    <Footer
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: bgColor,
        height: 60,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
      }}>
      <FA
        onPress={() => navigation.navigate('Home')}
        style={{
          fontSize: 22,
          padding: 5,
          margin: 5,
          color: '#fff',
        }}
        name="arrow-left"
      />
      <Input
        onChangeText={text => handleChange(text)}
        style={{
          backgroundColor: '#fff',
          borderRadius: 10,
          paddingLeft: 10,
          paddingRight: 10,
          height: 40,
        }}
        placeholder="cats"
      />
      <FA
        onPress={handleSearch}
        name="search"
        style={{
          fontSize: 22,
          padding: 5,
          margin: 5,
          color: '#fff',
        }}
      />
    </Footer>
  );
};

export default SearchFooter;
