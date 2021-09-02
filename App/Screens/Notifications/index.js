import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NotificationsPage from './NotificationsPage';

const NotificationsScreen = () => {
  const Stack = createStackNavigator();

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="NotificationsPage" component={NotificationsPage} />
      </Stack.Navigator>
    </>
  );
};
export default NotificationsScreen;
