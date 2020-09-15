import * as React from 'react';
import {
  Image,
  StyleSheet,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './ProfileNavigation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {GlobalContext} from '../services/GlobalContext';
import {globalStyle} from '../services/GlobalStyles';
import Home from '../screens/HomeScreen/Home';
import Inboxs from '../screens/InboxsScreen/Inbox';
import FeesNavigation from './FeesNavigation';
import CreatePost from '../Components/Post/CreatePost';

const Tab = createBottomTabNavigator();

const HomeNavigation = ({navigation}) => {

  const {State } = React.useContext(GlobalContext);
  const {avatar, dark} = State;
  
  const {
    darkTabLogoBorder,
    lightTabLogoBorder,
    darkTabBackground,
    lightTabBackground,
    darkTabActiveColor,
    lightTabActiveColor,
    darkTabInActiveColor,
    lightTabInActiveColor
  } = globalStyle;


  const darkthemeStyles = {
    backgroundColor: dark
      ? darkTabBackground.backgroundColor
      : lightTabBackground.backgroundColor,
  };

  const lightthemeStyles = {
    backgroundColor: dark
      ? darkTabBackground.backgroundColor
      : lightTabBackground.backgroundColor,
  };
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        tabStyle: {
          // marginBottom: dark ? 5 : 0,
          // marginTop: dark ? 5 : 0,
        },
        showLabel: false,
        activeTintColor: dark
          ? darkTabActiveColor.color
          : lightTabActiveColor.color,
        inactiveTintColor: dark
          ? darkTabInActiveColor.color
          : lightTabInActiveColor.color,
        style: dark ? darkthemeStyles : lightthemeStyles,
      }}
      screenOptions={({route}) => ({
        tabBarVisible:route.name === 'Post'? false : true,
        tabBarIcon: ({color}) => {
          const icons = {
            Home: 'home',
            Feed: 'rss-square',
            Post:'plus-circle',
            Notification: 'envelope',
          };
          if (route.name === 'Profile') {
            return (
              <Image
                style={[
                  styles.profileTabLogo,
                  dark ? darkTabLogoBorder : lightTabLogoBorder,
                ]}
                source={{uri: avatar}}
              />
            );
          }
          return (
            <FontAwesome5 name={icons[route.name]} color={color} size={20} />
          );
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Feed" component={FeesNavigation} />
      <Tab.Screen name="Post" component={CreatePost} />
      <Tab.Screen name="Notification" component={Inboxs} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({
  profileTabLogo: {
    width: 30,
    height: 30,
    borderRadius: 150 / 2,
    borderWidth: 1.5,
  },
});
