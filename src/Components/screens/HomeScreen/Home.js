import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../ProfileScreen/Profile';
import Settings from '../Settings/index';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
      <Tab.Navigator initialRouteName="Home" >
        <Tab.Screen name="Home" component={Profile}  />
        <Tab.Screen name="Feed" component={Profile} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    
  );
};

export default Home;
