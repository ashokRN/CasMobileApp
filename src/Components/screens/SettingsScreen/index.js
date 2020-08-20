import React from 'react';
import AccountSetting from './AccountSetting';
import LocationSetting from './LocationSetting';
import ThemeSetting from './ThemeSetting';
import About from './About';
import Terms from './TermsAndPolicy';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';
import ProfileSetting from './ProfileSetting';
import { Easing } from 'react-native-reanimated';

const SettingStack = createStackNavigator();

const Settings = () => {

  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 50,
      mass: 3,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  const closeConfig = {
    animation: 'timing',
    config: {
      duration: 500,
      easing:Easing.linear
    }
  }

  return (
    <SettingStack.Navigator initialRouteName="setting" screenOptions={
      {
        headerShown: false ,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        ...TransitionPresets.FadeFromBottomAndroid
        // cardStyleInterpolator:CardStyleInterpolators.forFadeFromBottomAndroid
        // transitionSpec: {
        //   open: config,
        //   close:closeConfig
        // }
      }
    }
      headerMode="float"
      animation = "fade"

    >
      <SettingStack.Screen name='settings' component={AccountSetting} options={{headerShown:false}}  />
      <SettingStack.Screen name='Profile' component={ProfileSetting} />
      <SettingStack.Screen name='Theme' title="Theme" component={ThemeSetting} />
      <SettingStack.Screen name='Location' title="Location" component={LocationSetting} />
      <SettingStack.Screen name='About Us' title="About Us" component={About} />
      <SettingStack.Screen name='Terms and Policy' title="Terms and Policy" component={Terms} />
    </SettingStack.Navigator>    
  )
}

export default Settings

