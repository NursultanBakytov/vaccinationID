import React, {useEffect} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';

import DrawerNavigation from './navigation/DrawerNavigation';
import Splash from './navigation/Splash';
import {store} from './Store';
import LoginNavigation from './navigation/LoginNavigation';
import BottomBar from './navigation/BottomBar';
const App = () => {
  const Stack = createStackNavigator();

  const MyTheme = {
    ...DefaultTheme,

    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  };
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Drawer"
            component={BottomBar}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginNavigation}
            options={{
              header: () => null,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
