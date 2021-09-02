import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import BottomBar from './BottomBar';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerStyle={{
        width: '90%',
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={BottomBar} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
