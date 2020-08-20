import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const ProfileSetting = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Theme')}>
      <View>
        <Text>Profile Setting</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileSetting;
