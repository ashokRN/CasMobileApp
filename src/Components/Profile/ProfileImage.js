import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {GlobalContext} from '../../services/GlobalContext';
import {globalStyle} from '../../services/GlobalStyles';

const ProfileImage = () => {
  const {State, StateDispatch} = React.useContext(GlobalContext);
    const { user, active, dark, avatar } = State;
  const {
    DarkBackground,
    LightBackground,
    Darktext,
    LightText,
    onlineIndicator,
    offlineIndicator,
  } = globalStyle;
    return (
        <View
          style={[styles.container, dark ? DarkBackground : LightBackground]}>
          <View
            style={[
              styles.profileContainer,
              dark ? DarkBackground : LightBackground,
            ]}>
            <Image
              source={{uri: avatar}}
              style={{width: 100, height: 100, borderRadius: 150 / 2}}
            />
            <View
              style={[
                styles.activeIndicatior,
                active ? onlineIndicator : offlineIndicator,
            ]}>
            <Text style={{color:active?'#ffffff':'#000000'}}>{active?'Online':'Offline'}</Text>
              </View>
            <View style={styles.profileText}>
              <Text style={dark ? Darktext : LightText}>
                {user.ProfileName}
              </Text>
              <Text style={dark ? Darktext : LightText}>{user.Email}</Text>
            </View>
          </View>
        </View>
    )
}

export default ProfileImage

const styles = StyleSheet.create({
    container: {
      padding:10,
    },
  
    activeIndicatior: {
      // position: 'absolute',
      top: 10,
      // left: 205,
      // zIndex: 5,
      justifyContent: 'center',
      alignItems:'center',
      width: 50,
      height: 20,
      borderRadius: 20,
    },
    profileContainer: {
      flexDirection: 'column',
      borderColor: '#ffffff',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      padding: 10,
    },
    profileText: {
      alignItems: 'center',
      padding: 10,
      marginTop: 10,
      fontFamily: 'GoogleSans-Bold',
      fontSize: 15,
      fontWeight: '600',
    },
  });