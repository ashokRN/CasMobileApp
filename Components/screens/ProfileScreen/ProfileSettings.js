import React from 'react';
import {View, Text, SectionList, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';

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


const Item = ({ title }) => (
  <TouchableOpacity onPress={()=>Actions.push(`${title}`)}>
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    </View>
    </TouchableOpacity>
);

const ProfileSettings = () => {
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => <Item title={item} />}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  );
};

export default ProfileSettings;

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
