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
import Routes from './src/routes/Nav';


const App = () => {
  return (
    <GlobalContext>
      <Routes />
    </GlobalContext>
  );
};

export default App;
