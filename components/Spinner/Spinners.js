/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Spinner} from 'native-base';

const Spinners = () => {
  return (
    <View
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Spinner />
    </View>
  );
};

export default Spinners;
