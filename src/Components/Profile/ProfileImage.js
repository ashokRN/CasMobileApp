import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {GlobalContext} from '../../services/GlobalContext';
import {globalStyle} from '../../services/GlobalStyles';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const ProfileImage = (props) => {
  const {State, StateDispatch} = React.useContext(GlobalContext);
  const {user, active, dark, avatar} = State;
  const {
    DarkBackground,
    LightBackground,
    Darktext,
    LightText,
    onlineIndicator,
    offlineIndicator,
  } = globalStyle;
  return (
    <View style={[styles.container, dark ? DarkBackground : LightBackground]}>
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
          <TouchableOpacity
            style={{flexDirection: 'row',width:45,justifyContent:'center',alignItems:'center'}} onPress={props.nav}>
            <Text style={{color: active ? '#ffffff' : '#000000'}}>Edit</Text>
            <FontAwesome5Icon
              name={'pen'}
              size={10}
              style={{ left: 5}}
              color={'#ffffff'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.profileText}>
          <Text style={dark ? Darktext : LightText}>{user.profileName}</Text>
          <Text style={dark ? Darktext : LightText}>{user.email}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileImage;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  activeIndicatior: {
    // position: 'absolute',
    top: 10,
    // left: 205,
    // zIndex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 30,
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
