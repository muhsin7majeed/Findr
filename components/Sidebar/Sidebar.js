/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from 'native-base';

const Sidebar = ({textColor, bgColor, bgShade, theme, toggleTheme}) => {
  return (
    <View style={{backgroundColor: bgColor, height: '100%'}}>
      <View style={{padding: 10}}>
        <Text
          style={{
            fontSize: 32,
            textAlign: 'center',
            fontWeight: 'bold',
            color: textColor,
          }}>
          Findr
        </Text>
        <Text style={{color: textColor, textAlign: 'center'}}>
          Made with <Icon name="heart" style={{color: 'red', fontSize: 15}} />
        </Text>
        <Text style={{opacity: 0.5, color: textColor, textAlign: 'center'}}>
          api provided by Pexels, Unsplash, Pixabay.
        </Text>
      </View>
      <View style={{backgroundColor: bgShade, padding: 10}}>
        <TouchableOpacity
          onPress={toggleTheme}
          style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: bgShade,
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
          }}>
          <Text style={{color: textColor, fontSize: 18}}>Dark Theme</Text>
          <Icon style={{color: theme ? 'yellow' : '#fff'}} name="bulb" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Sidebar;
