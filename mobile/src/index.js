import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import './config/ReactotronConfig';

import Routes from './routes';

const App = () => (
  <NavigationContainer>
    <Routes />
  </NavigationContainer>
);

console.tron.log('Hello World');

export default App;
