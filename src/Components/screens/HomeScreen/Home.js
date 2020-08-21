import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../ProfileScreen/Profile';
import Settings from '../SettingsScreen/index';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {themes} from '../../../services/settings/Themes';
import {GlobalContext} from '../../../services/GlobalContext';

const Tab = createBottomTabNavigator();

const Home = () => {
  const [globalState, setGlobalState] = React.useContext(GlobalContext);
  const {dark} = globalState;

  const darkthemeStyles = {
    backgroundColor: dark
      ? themes.dark.backgroudColor
      : themes.light.backgroudColor,
  };

  const lightthemeStyles = {
    alignSelf: 'center',
    backgroundColor: dark
      ? themes.dark.backgroudColor
      : themes.light.backgroudColor,
    borderRadius: 20,
    bottom: 15,
    width: 340,
  };
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        tabStyle: {
          marginBottom: dark ? 5 : 0,
          marginTop: dark ? 5 : 0,
        },
        showLabel: false,
        activeTintColor: dark
          ? themes.dark.activeColor
          : themes.light.activeColor,
        inactiveTintColor: dark
          ? themes.dark.inactiveColor
          : themes.light.inactiveColor,
        style: dark?darkthemeStyles:lightthemeStyles,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          const icons = {
            Home: 'home',
            Feed: 'rss-square',
            Notification: 'envelope',
            Settings: 'cog',
          };
          return (
            <FontAwesome5 name={icons[route.name]} color={color} size={20} />
          );
        },
      })}>
      <Tab.Screen name="Home" component={Profile} />
      <Tab.Screen name="Feed" component={Profile} />
      <Tab.Screen name="Notification" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default Home;
