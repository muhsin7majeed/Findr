/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'native-base';

const TopNav = ({navigation, title = 'Findr', textColor, bgColor}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: bgColor,
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20, color: textColor, fontWeight: 'bold'}}>
        {title}
      </Text>
      <Icon
        onPress={() => navigation.toggleDrawer()}
        style={{color: textColor}}
        name="menu"
      />
    </View>
  );
};

export default TopNav;
