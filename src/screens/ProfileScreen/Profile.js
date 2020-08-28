import React, {useContext} from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {GlobalContext} from '../../services/GlobalContext';
import {globalStyle} from '../../services/GlobalStyles';
import ProfileImage from '../../Components/Profile/ProfileImage';

const Profile = () => {
  const {State, StateDispatch} = React.useContext(GlobalContext);
  const {dark, user} = State;
  const {DarkBackground, LightBackground, Darktext, LightText} = globalStyle;

  return (
    <SafeAreaView style={[dark ? DarkBackground : LightBackground]}>
      <ScrollView>
        <ProfileImage />
        {Object.keys(user).map((key, i) => (
          <View
            key={i}
            style={[
              styles.profileDetailContainer,
              dark ? DarkBackground : LightBackground,
            ]}>
            <Text
              style={[styles.profileDetailHeader, dark ? Darktext : LightText]}>
              {key}
            </Text>
            <Text
              style={[styles.profileDetailText, dark ? Darktext : LightText]}>
              {user[key]?user[key]:`Set ${key}`}
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  profileDetailContainer: {
    fontFamily: 'GoogleSans-Bold',
    padding: 20,
    backgroundColor: '#ffffff',
    bottom: 20,
  },
  profileDetailHeader: {
    marginLeft: 10,
    fontFamily: 'GoogleSans-Bold',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 3,
  },
  profileDetailText: {
    top: 10,
    marginLeft: 10,
    letterSpacing: 3,
    fontFamily: 'GoogleSans-Bold',
    fontSize: 12,
    fontWeight: '600',
  },
});
