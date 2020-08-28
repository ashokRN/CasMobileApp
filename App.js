/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
// import GlobalContext from './src/services/GlobalContext';
import Routes from './src/routes/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import  Store  from './src/services/GlobalContext';

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
