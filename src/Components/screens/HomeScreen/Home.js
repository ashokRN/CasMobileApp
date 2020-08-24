import * as React from 'react';
import {
  Image,
  StyleSheet,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../ProfileScreen/Profile';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {GlobalContext} from '../../../services/GlobalContext';
import {globalStyle} from '../../../services/GlobalStyles';
import HomePosts from './HomePosts';
import Inboxs from '../InboxsScreen/Inbox';
import Attenace from '../AttenaceScreen/Attenace'

const Tab = createBottomTabNavigator();

const Home = ({navigation}) => {
  const [globalState, setGlobalState] = React.useContext(GlobalContext);
  const {dark, avatar} = globalState;
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
    alignSelf: 'center',
    backgroundColor: dark
      ? darkTabBackground.backgroundColor
      : lightTabBackground.backgroundColor,
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
          ? darkTabActiveColor.color
          : lightTabActiveColor.color,
        inactiveTintColor: dark
          ? darkTabInActiveColor.color
          : lightTabInActiveColor.color,
        style: dark ? darkthemeStyles : lightthemeStyles,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          const icons = {
            Home: 'home',
            Feed: 'rss-square',
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
      <Tab.Screen name="Home" component={HomePosts} />
      <Tab.Screen name="Feed" component={Attenace} />
      <Tab.Screen name="Notification" component={Inboxs} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({
  profileTabLogo: {
    width: 30,
    height: 30,
    borderRadius: 150 / 2,
    borderWidth: 1.5,
  },
});
