import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Sidebar from './components/Sidebar/Sidebar';

const Routes = props => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerPosition="right"
        drawerContent={prop => <Sidebar {...props} {...prop} />}>
        <Drawer.Screen name="Home">
          {prop => <Home {...props} {...prop} />}
        </Drawer.Screen>
        <Drawer.Screen name="Search">
          {prop => <Search {...props} {...prop} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
