import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SearchPage from './SearchPage';
import HomePage from './HomePage';
import HomeComponent from './HomeComponent';

const HomeScreen = props => {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Search" component={SearchPage} />
        <Stack.Screen name="HomeComponent" component={HomeComponent} />
      </Stack.Navigator>
    </>
  );
};

export default HomeScreen;
