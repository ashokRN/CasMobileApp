import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import {GlobalContext} from '../../../services/GlobalContext';
import {ScrollView} from 'react-native-gesture-handler';

const Profile = () => {
  const [globalState, setGlobalState] = useContext(GlobalContext);
  const {name, email, phone, active} = globalState;
  console.log(globalState, 'cold');
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.profileContainer}>
            <Image
              source={{uri: 'https://bit.ly/2Q3l2hD'}}
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
              <Text>{name.toUpperCase()}</Text>
              <Text>{email}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    backgroundColor: '#00FF00',
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
