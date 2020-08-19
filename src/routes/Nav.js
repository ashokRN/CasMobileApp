import React from 'react';
import Loading from '../Components/screens/LoadingScreen/Loading';
import Login from '../Components/screens/Auth/Login'
import Signup from '../Components/screens/Auth/Signup'
import Auth from '../Components/screens/HomeScreen/index';
import Home from '../Components/screens/HomeScreen/Home';
import Header from '../Components/Header/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="loading">
      <Stack.Screen name='loading' component={Loading} options={{ headerShown: false }} />
      <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
      <Stack.Screen name='signup' component={Signup} options={{ headerShown: false }} />
      <Stack.Screen name='main' component={Auth} options={{ headerShown: false }} />
      <Stack.Screen name='home' component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
);
export default Routes;
