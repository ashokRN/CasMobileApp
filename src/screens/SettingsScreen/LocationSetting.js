import React from 'react';
import { Text, SafeAreaView, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {GlobalContext} from '../../services/GlobalContext';
import {globalStyle} from '../../services/GlobalStyles';
const LocationSetting = () => {
  const {State, StateDispatch} = React.useContext(GlobalContext);
  const {dark} = State;
  const {DarkBackground, Darktext, LightBackground, LightText,settingHeaderText} = globalStyle;

  return (
    <SafeAreaView
      style={[styles.container, dark ? DarkBackground : LightBackground]}>
      <ScrollView>
        <Text
          style={[
            settingHeaderText,
            dark ? [DarkBackground, Darktext] : [LightBackground, LightText],
          ]}>
          Location
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LocationSetting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  optionContainer: {
    fontFamily: 'GoogleSans-Bold',
    padding: 15,
    backgroundColor: '#ffffff',
  },
  optionText: {
    fontFamily: 'GoogleSans-Bold',
    fontSize: 15,
    fontWeight: '600',
  },
});
