import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Settings from './Settings';
import Tariffs from './Tariffs';
import About from './About';
import Support from './Support';
import Exit from './Exit';
import ProfilePage from './ProfilePage';

const ProfileScreen = () => {
  const Stack = createStackNavigator();

  return (
    <>
      <Stack.Navigator
        initialRouteName="Settings"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Tariffs" component={Tariffs} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Support" component={Support} />
        <Stack.Screen name="Exit" component={Exit} />
      </Stack.Navigator>
    </>
  );
};

export default ProfileScreen;
