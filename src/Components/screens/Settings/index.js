import React from 'react';
import AccountSetting from './AccountSetting';
import LocationSetting from './LocationSetting';
import ThemeSetting from './ThemeSetting';
import About from './About';
import Terms from './TermsAndPolicy';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileSetting from './ProfileSetting';

const SettingStack = createStackNavigator();

const Settings = () => {
  return (
    <SettingStack.Navigator initialRouteName="setting">
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

