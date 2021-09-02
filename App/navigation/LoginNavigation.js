import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar, Text, View} from 'react-native';
import Login from './Welcome/Login';
import Signup from './Welcome/Signup';
import Recover from './Welcome/Recover';

const LoginStack = createStackNavigator();

const LoginNavigation = props => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="Login"
        component={Login}
        options={{
          header: () => null,
        }}
      />
      <LoginStack.Screen
        name="Recover"
        component={Recover}
        options={{
          header: () => null,
        }}
      />

      <LoginStack.Screen
        name="Signup"
        component={Signup}
        options={{
          header: () => null,
        }}
      />
    </LoginStack.Navigator>
  );
};

export default LoginNavigation;
