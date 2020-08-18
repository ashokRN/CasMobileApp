import React from 'react';
import {Router, Scene, ActionConst, Stack} from 'react-native-router-flux';
import Login from '../Components/Scene/Login';
import Signup from '../Components/Scene/Signup';
import Dashboard from '../Components/Layouts';
import Home from '../Components/Layouts/Home/Home';
import Loading from '../Components/Scene/Loading';
import SingleProfieSetting from '../Components/Layouts/Profile/SingleProfieSetting';

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
      <Scene key={'Profile'} title='Profile' component={SingleProfieSetting} />
    </Stack>
  </Router>
);
export default Routes;
