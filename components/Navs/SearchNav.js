import React from 'react';
import {Fab, Icon} from 'native-base';
// import {Icon} from 'react-native-vector-icons/Icon';

const SearchNav = ({navigation, bgColor}) => {
  return (
    <Fab
      style={{
        backgroundColor: bgColor,
      }}
      position="bottomRight"
      // onPress={fn}
      onPress={() => navigation.navigate('Search')}>
      <Icon name="search" />
    </Fab>
  );
};

export default SearchNav;
