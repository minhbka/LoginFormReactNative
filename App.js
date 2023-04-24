/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Login from './screens/Login';
import {SafeAreaView, Text, View} from 'react-native';
import Signup from './screens/Signup';
import EmailVerification from './screens/EmailVerification';
const App = () => {
  // return <Login />;
  // return <Signup />;
  return <EmailVerification />;
};

export default App;
