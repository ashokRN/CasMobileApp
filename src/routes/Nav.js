import React, {useContext, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Loading from '../Components/screens/LoadingScreen/Loading';
import Login from '../Components/screens/Auth/Login';
import Signup from '../Components/screens/Auth/Signup';
import Home from '../Components/screens/HomeScreen/Home';
import AccountSetting from '../Components/screens/SettingsScreen/AccountSetting';
import LocationSetting from '../Components/screens/SettingsScreen/LocationSetting';
import ThemeSetting from '../Components/screens/SettingsScreen/ThemeSetting';
import ProfileSetting from '../Components/screens/SettingsScreen/ProfileSetting';
import About from '../Components/screens/SettingsScreen/About';
import Terms from '../Components/screens/SettingsScreen/TermsAndPolicy';
import {createStackNavigator,} from '@react-navigation/stack';
import {GlobalContext} from '../services/GlobalContext';
import {globalStyle} from '../services/GlobalStyles';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { useDarkMode } from 'react-native-dark-mode'

const Stack = createStackNavigator();

const Routes = () => {
  const [globalState, setGlobalState] = useContext(GlobalContext);

  const {Auth, dark} = globalState;
  const {
    DarkBackground,
    LightBackground,
    logoContainer,
    logoText,
    Darktext,
    LightText,
    StaticColor
  } = globalStyle;

  const isDark = useDarkMode();

  useEffect(() => {
    if (isDark === true) {
      setGlobalState({ ...globalState, dark: isDark });
    }
    if (isDark === false) {
      setGlobalState({ ...globalState, dark: isDark });
    }
  },[isDark])

  

  const SettingIcon = () => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity
        style={{right: 25, top: 3}}
        onPress={() => navigation.navigate('settings')}>
        <FontAwesome5Icon
          name={'cog'}
          size={20}
          color={StaticColor.color}
        />
      </TouchableOpacity>
    );
  };

  const AppLogo = () => {
    return (
      <TouchableOpacity style={{left:25}}>
        <FontAwesome5Icon
          name={'autoprefixer'}
          size={25}
          color={StaticColor.color}
        />
      </TouchableOpacity>
    )
  }

  const TitleLogo = () => {
    return (
      <View style={logoContainer}>
        <Text style={[logoText, StaticColor]}>
          Any Where
        </Text>
      </View>
    );
  };

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
            component={Home}
            options={{
              headerLeft: (props) => <AppLogo {...props} />,
              headerTitle: (props) => <TitleLogo {...props} />,
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
              headerRight: (props) => <SettingIcon {...props} />,
              headerTitleAlign:'center'
            }}
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
