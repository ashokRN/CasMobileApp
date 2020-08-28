import React, {useContext} from 'react';
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {settings} from '../../settings/SettingsData';
import {GlobalContext} from '../../services/GlobalContext';
import {globalStyle} from '../../services/GlobalStyles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useDarkMode } from 'react-native-dark-mode';

const AccountSetting = ({navigation}) => {
  const {State, StateDispatch} = React.useContext(GlobalContext);
  const {dark} = State;
  const { DarkBackground, LightBackground, Darktext, LightText } = globalStyle;

  const isDark = useDarkMode();

  const logOut = async () => {
    await AsyncStorage.clear();
    await StateDispatch({type:"LOGOUT", dark:isDark});
    navigation.navigate('login');
  };

  const SettingsIconsRender = (icon) => {
    switch (icon) {
      case 'Profile':
        return 'user';
      case 'Theme':
        return 'eye';
      case 'Location':
        return 'map-marker-alt';
      case 'About Us':
        return 'info';
      case 'Terms and Policy':
        return 'user-secret';
      case 'Log out':
        return 'sign-out-alt';
    }
  };
  return (
    <SafeAreaView
      style={[styles.container, dark ? DarkBackground : LightBackground]}>
      {/* <ProfileImage /> */}
      <SectionList
        style={styles.sectionslist}
        sections={settings}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              item === 'Log out' ? logOut() : navigation.navigate(item)
            }>
            <View
              style={[styles.item, dark ? DarkBackground : LightBackground]}>
              <Text style={styles.iconText}>
                <FontAwesome5 name={SettingsIconsRender(item)} size={18} color={'#ffa500'} />
                 {/* //dark?themes.dark.color:themes.light.color */}
              </Text>
              <Text style={[styles.title, dark ? Darktext : LightText]}>
                {item}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text
            style={[
              styles.header,
              dark ? [DarkBackground, Darktext] : [LightBackground, LightText],
            ]}>
            {title}
          </Text>
        )}
      />
    </SafeAreaView>
  );
};

export default AccountSetting;

const styles = StyleSheet.create({
  container: {flex: 1},
  sectionslist: {
    // marginTop: 100,
  },
  item: {
    flexDirection: 'row',
    fontFamily: 'GoogleSans-Bold',
    padding: 15,
    backgroundColor: '#ffffff',
  },
  header: {
    fontFamily: 'GoogleSans-Bold',
    padding: 10,
    fontSize: 20,
    fontWeight: '600',
    backgroundColor: '#f8f8f4',
  },
  title: {
    marginLeft: 10,
    fontFamily: 'GoogleSans-Bold',
    fontSize: 15,
    fontWeight: '600',
  },
  logoutBtn: {
    backgroundColor: '#FFA500',
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius: 5,
  },
  logoutBtnText: {
    color: 'white',
    textAlign: 'center',
  },
  iconText: {
    padding:2
  }
});
