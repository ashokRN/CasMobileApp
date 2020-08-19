import React from 'react';
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Profile from '../ProfileScreen/Profile';

const DATA = [
  {
    title: 'Account',
    data: ['Profile', 'Theme', 'Location'],
  },
  {
    title: 'More',
    data: ['About Us', 'Terms and Policy'],
  },
];

const AccountSetting = ({navigation}) => {
  return (
    <React.Fragment>
      <Profile />
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate(item)}>
            <View style={styles.item}>
              <Text style={styles.title}>{item}</Text>
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </React.Fragment>
  );
};

export default AccountSetting;

const styles = StyleSheet.create({
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
});
