/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/routes/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import Store from './src/services/GlobalContext';

import HomeScreen from './src/sample/HomeScreen';

const App = () => {
  return (
    <Store>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Store>
  );
};

export default App;
