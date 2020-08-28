import React, {useContext, useEffect} from 'react';
import Loading from '../screens/LoadingScreen/Loading';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import HomePage from '../routes/HomeNavigations';
import AccountSetting from '../screens/SettingsScreen/AccountSetting';
import LocationSetting from '../screens/SettingsScreen/LocationSetting';
import ThemeSetting from '../screens/SettingsScreen/ThemeSetting';
import ProfileSetting from '../screens/SettingsScreen/ProfileSetting';
import About from '../screens/SettingsScreen/About';
import Terms from '../screens/SettingsScreen/TermsAndPolicy';
import {createStackNavigator,} from '@react-navigation/stack';
import {GlobalContext} from '../services/GlobalContext';
import {globalStyle} from '../services/GlobalStyles';
import { useDarkMode } from 'react-native-dark-mode'
import TitleLogo from '../Components/Logo/Title';
import Logo from '../Components/Logo/Logo';

const Stack = createStackNavigator();

const Routes = () => {

  const {State, StateDispatch}= useContext(GlobalContext);
  const {dark, Auth} = State;
  
  const { DarkBackground, LightBackground, Darktext, LightText, StaticColor } = globalStyle;

  const isDark = useDarkMode();

  useEffect(() => {
    if (isDark === true) {
      StateDispatch({ type:"DARK", dark: isDark });
    }
    if (isDark === false) {
      StateDispatch({ type:"DARK", dark: isDark });
    }
  },[isDark])

  
  return (
    <React.Fragment>
      {Auth ? (
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{
            headerStyle: {
              backgroundColor: dark
                ? DarkBackground.backgroundColor
                : LightBackground.backgroundColor,
            },
            headerTintColor: dark ? Darktext.color : LightText.color,
          }}>
          <Stack.Screen
            name="home"
            component={HomePage}
            options={{
              headerLeft: (props) => <Logo name={'autoprefixer'} style={{left: 15}} size={25} color={StaticColor.color} />,
              headerTitle: (props) => <TitleLogo title={'Any Where'} />,
              headerStyle: {
                backgroundColor: dark
                  ? DarkBackground.backgroundColor
                  : LightBackground.backgroundColor,
              },
              headerTitleStyle: {
                fontSize: 25,
                fontWeight: 'bold',
                letterSpacing: 10,
              },
              headerRight: (props) => 
              <Logo 
                  style={{right: 25, top: 3}}
                  screen={'settings'} 
                  name={'cog'} 
                  size={20} 
                  color={StaticColor.color} />,
              headerTitleAlign:'center'
            }}
          />
          {/* <Stack.Screen
            name="login"
            component={Login}
            options={{headerShown: false}}
          /> */}
          <Stack.Screen
            name="signup"
            component={Signup}
            options={{headerShown: false}}
          />
          <Stack.Screen name="settings" component={AccountSetting} />
          <Stack.Screen name="Profile" component={ProfileSetting} />
          <Stack.Screen name="Theme" title="Theme" component={ThemeSetting} />
          <Stack.Screen
            name="Location"
            title="Location"
            component={LocationSetting}
          />
          <Stack.Screen name="About Us" title="About Us" component={About} />
          <Stack.Screen
            name="Terms and Policy"
            title="Terms and Policy"
            component={Terms}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="loading">
          <Stack.Screen
            name="loading"
            component={Loading}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="signup"
            component={Signup}
            options={{headerShown: false}}
            />
        </Stack.Navigator>
      )}
    </React.Fragment>
  );
};
export default Routes;
