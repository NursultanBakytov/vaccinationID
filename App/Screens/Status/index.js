import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import StatusPage from './StatusPage';

const StatusScreen = () => {
  const Stack = createStackNavigator();

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="StatusPage" component={StatusPage} />
      </Stack.Navigator>
    </>
  );
};

export default StatusScreen;
