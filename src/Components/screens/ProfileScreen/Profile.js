import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {GlobalContext} from '../../../services/GlobalContext';
import { globalStyle } from '../../../services/GlobalStyles';

const Profile = () => {

  const [globalState, setGlobalState] = useContext(GlobalContext);
  const { name, email, active, dark } = globalState;
  const { DarkBackground, LightBackground, Darktext, LightText } = globalStyle;
  
  return (
        <View style={[styles.container,dark?DarkBackground:LightBackground]}>
          <View style={[styles.profileContainer,dark?DarkBackground:LightBackground]}>
            <Image
              source={{uri: 'https://bit.ly/32eXxYy'}}
              style={{width: 100, height: 100, borderRadius: 150 / 2}}
            />
            <View
              style={[
                styles.activeIndicatior,
                active
                  ? styles.activeIndicatiorOnlineColor
                  : styles.activeIndicatiorOfflineColor,
              ]}></View>
            <View style={styles.profileText}>
              <Text style={dark?Darktext:LightText}>{name.toUpperCase()}</Text>
              <Text style={dark?Darktext:LightText}>{email}</Text>
            </View>
          </View>
        </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activeIndicatior: {
    position: 'absolute',
    top: 130,
    left: 125,
    zIndex: 5,
    width: 15,
    height: 15,
    borderRadius: 20,
  },
  activeIndicatiorOnlineColor: {
    backgroundColor: '#FFA500',
  },
  activeIndicatiorOfflineColor: {
    backgroundColor: '#d3d3d3',
  },

  profileContainer: {
    flexDirection: 'row',
    borderColor: '#ffffff',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    padding: 50,
  },
  profileText: {
    padding: 10,
    marginTop: 20,
    fontFamily: 'GoogleSans-Bold',
    fontSize: 15,
    fontWeight: '600',
  },
});
