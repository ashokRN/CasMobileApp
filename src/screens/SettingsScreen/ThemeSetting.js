import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {ScrollView, Switch} from 'react-native-gesture-handler';
import {GlobalContext} from '../../services/GlobalContext';
import {globalStyle} from '../../services/GlobalStyles';

const ThemeSetting = () => {
  const {State, StateDispatch} = React.useContext(GlobalContext);
  const {dark} = State;
  const {DarkBackground, Darktext, LightBackground, LightText,settingHeaderText} = globalStyle;
  const toggleSwitch = () => StateDispatch({type:"DARK", dark: !dark});

  return (
    <SafeAreaView
      style={[styles.container, dark ? DarkBackground : LightBackground]}>
      <ScrollView>
        <Text style={[settingHeaderText,dark ? [DarkBackground ,Darktext]: [LightBackground,LightText]]}>Theme</Text>
        <View style={[styles.optionContainer,dark ? DarkBackground : LightBackground]}>
          <Text style={[styles.optionText,dark ? Darktext : LightText]}>Dark theme</Text>
          <Switch
            style={styles.switchBtn}
            trackColor={{false: '#767577', true: '#ffa500'}}
            thumbColor={dark ? '#f4f3f4' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={dark}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ThemeSetting;

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
    top:20,
    fontFamily: 'GoogleSans-Bold',
    fontSize: 15,
    fontWeight: '600',
  },
});
