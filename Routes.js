import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Icon} from 'native-base';
import Home from './components/Home/Home';
import Search from './components/Search/Search';

const Routes = () => {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerPosition="right">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Search" component={Search} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
