import React from 'react';
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Profile from '../ProfileScreen/Profile';
import AsyncStorage from '@react-native-community/async-storage';
import { settings } from '../../../services/SettingsData';

const AccountSetting = ({ navigation }) => {
  const logOut = async () => {
    await AsyncStorage.clear();
    navigation.navigate('login')
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      <Profile />
        <SectionList
          style={styles.sectionslist}
        sections={settings}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => item === 'Log out'?logOut():navigation.navigate(item)}>
            <View style={styles.item}>
              <Text style={styles.title}>{item}</Text>
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
        />
        </SafeAreaView>
  );
};

export default AccountSetting;

const styles = StyleSheet.create({
  sectionslist: {
    marginTop:100,
  },
  item: {
    fontFamily: 'GoogleSans-Bold',
    padding: 15,
    backgroundColor: '#ffffff',
  },
  header: {
    fontFamily: 'GoogleSans-Bold',
    padding: 10,
    fontSize: 20,
    backgroundColor: '#f8f8f4',
  },
  title: {
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
  }
});
