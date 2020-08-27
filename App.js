/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import GlobalContext from './src/services/GlobalContext';
import Routes from './src/routes/Navigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <GlobalContext>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
    </GlobalContext>
  );
};

export default App;
