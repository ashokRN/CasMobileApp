import React from 'react';
import {Router, Scene, ActionConst, Stack} from 'react-native-router-flux';
import Loading from '../Components/screens/LoadingScreen/Loading';
import Login from '../Components/screens/Auth/Login'
import Signup from '../Components/screens/Auth/Signup'
import Dashboard from '../Components/screens/HomeScreen/index';
import Home from '../Components/screens/HomeScreen/Home';

const Routes = () => (
  <Router>
    <Stack key="root" type="replace" hideNavBar>
      <Scene
        key={'loading'}
        component={Loading}
        type={ActionConst.RESET}
        initial
      />
      <Scene key={'login'} component={Login} />
      <Scene key={'signup'} component={Signup} />
      <Scene key={'home'} component={Dashboard} />
      <Scene key={'main'} component={Home} />
    </Stack>
  </Router>
);
export default Routes;
