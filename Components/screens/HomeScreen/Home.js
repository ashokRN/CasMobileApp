import * as React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../ProfileScreen/Profile';
import {GlobalContext} from '../../../services/GlobalContext';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Profile} />
        <Tab.Screen name="Feed" component={Profile} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Settings" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Home;
