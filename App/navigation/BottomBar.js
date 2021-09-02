import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../Screens/Home';
import Status from '../Screens/Status';
import Profile from '../Screens/Profile';
import Notifications from '../Screens/Notifications';
import DrawerContent from './DrawerContent';
import styles from '../styles';
import IMAGE from '../assets/SVG';

export default function BottomBar() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Главная"
      backBehavior="history"
      tabBarOptions={{
        activeTintColor: '#DB372A',
        keyboardHidesTabBar: true,
        style: {height: 60, paddingVertical: 10, flex: 0},
        labelStyle: {marginBottom: 10, flex: 0},
        // tabStyle: {paddingVertical: 10},
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          const rn = route.name;

          if (rn === 'Главная') {
            iconName = focused ? IMAGE.HomeActiveIcon : IMAGE.HomeInactiveIcon;
          } else if (rn === 'Уведомления') {
            iconName = focused
              ? IMAGE.NotificationsActiveIcon
              : IMAGE.NotificationsInactiveIcon;
          } else if (rn === 'Статус') {
            iconName = focused
              ? IMAGE.StatusActiveIcon
              : IMAGE.StatusInactiveIcon;
          } else if (rn === 'Профиль') {
            iconName = focused
              ? IMAGE.ProfileActiveIcon
              : IMAGE.ProfileInactiveIcon;
          }
          return iconName;
        },
      })}>
      <Tab.Screen name="Главная" component={Home} />
      <Tab.Screen name="Уведомления" component={Notifications} />

      <Tab.Screen name="Статус" component={Status} />
      <Tab.Screen name="Профиль" component={Profile} />
    </Tab.Navigator>
  );
}

// /* <Image resizeMode='contain' source={require('')}/> */
