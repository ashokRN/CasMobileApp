import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../ProfileScreen/Profile';
import Settings from '../SettingsScreen/index';
const Tab = createBottomTabNavigator();

// const Stack = createStackNavigator();

// const getHeaderTitle = (route) =>{
//   const routeName = route.state ? route.state.routes[route.state.index].name : 'Home';

//   switch (routeName) {
//     case 'Home':
//       return 'Home';
//     case 'Feed':
//       return 'Feed';
//     case 'Settings':
//       return 'Settings'
//   }
// }

// const TabScreen = ({navigation,route}) => {
//   // navigation.setOptions({headerTitle:getHeaderTitle(route)})
//   return (
    
//   );
// };

const Home = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Profile}
        options={{tabBarLabel: 'Home'}}
      />
      <Tab.Screen name="Feed" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default Home;
