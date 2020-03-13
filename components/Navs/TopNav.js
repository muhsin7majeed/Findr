import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'native-base';

const TopNav = ({navigation, title = 'Findr'}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#0066FF',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold'}}>
        {title}
      </Text>
      <Icon
        onPress={() => navigation.toggleDrawer()}
        style={{color: '#fff'}}
        name="menu"
      />
    </View>
  );
};

export default TopNav;
