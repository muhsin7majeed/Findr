import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Footer, Icon, Input} from 'native-base';
import FA from 'react-native-vector-icons/FontAwesome';
const SearchFooter = ({navigation, handleChange, handleSearch}) => {
  return (
    <Footer style={styles.footer}>
      <FA
        onPress={() => navigation.navigate('Home')}
        style={styles.icon}
        name="arrow-left"
      />
      <Input
        onChangeText={text => handleChange(text)}
        style={styles.input}
        placeholder="cats"
      />
      <FA onPress={handleSearch} name="search" style={styles.icon} />
    </Footer>
  );
};

const styles = StyleSheet.create({
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#0066FF',
    height: 60,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    height: 40,
  },
  icon: {
    fontSize: 22,
    // marginRight: 5,
    padding: 5,
    margin: 5,
    color: '#fff',
  },
});

export default SearchFooter;
