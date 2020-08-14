/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Router, Scene, ActionConst} from 'react-native-router-flux';
import Login from './Components/Login/Login';
import Loading from './Components/Scene/Loading';
import Auth from './Components/Scene/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import GlobalContext from './services/GlobalContext';

const App = () => {
  return (
    <GlobalContext>
      <Router>
        <Scene key="root" hideNavBar>
          <Scene
            key={'loading'}
            component={Loading}
            type={ActionConst.RESET}
            initial
          />
          <Scene key={'auth'} component={Auth} />
          <Scene key={'signup'} component={Dashboard} />
        </Scene>
      </Router>
    </GlobalContext>
  );
};

export default App;
