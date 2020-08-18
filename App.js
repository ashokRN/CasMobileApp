/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import GlobalContext from './services/GlobalContext';
import Routes from './routes/Nav';


const App = () => {
  return (
    <GlobalContext>
      <Routes />
    </GlobalContext>
  );
};

export default App;
