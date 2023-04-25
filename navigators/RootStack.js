import React from 'react';
import {colors} from '../components/colors';
const {primary, secondary, accent, darkGray} = colors;

// React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import EmailVerification from '../screens/EmailVerification';
import ForgotPassword from '../screens/ForgotPassword';
import ResetPassword from '../screens/ResetPassword';
import DashBoard from '../screens/Dashboard';

import Avatar from '../components/Button/Avatar';
const Stack = createNativeStackNavigator();
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: accent,
          headerStyle: {
            height: 100,
            backgroundColor: secondary,
            borderBottomWidth: 0,
            shadowColor: 'transparent',
            shadowOpacity: 0,
            elevation: 0,
          },
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
          headerRightContainerStyle: {
            paddingRight: 25,
          },
        }}
        initialRouteName="Dashboard">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen
          name="EmailVerification"
          component={EmailVerification}
          options={{headerTitle: 'Email Verification'}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerTitle: 'Forgot Password'}}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{headerTitle: 'Reset Password'}}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashBoard}
          options={{
            headerStyle: {
              height: 100,
              backgroundColor: darkGray,
              borderBottomWidth: 0,
              shadowColor: 'transparent',
              shadowOpacity: 0,
              elevation: 0,
            },
            headerRight: () => <Avatar />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
