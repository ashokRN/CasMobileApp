import React, { useReducer, useContext } from 'react';
import {ScrollView,Text, SafeAreaView, StyleSheet,View,TouchableOpacity} from 'react-native';
import {GlobalContext} from '../../services/GlobalContext';
import {globalStyle} from '../../services/GlobalStyles';
import { GlobalReducer } from '../../services/StateManagement';

const About = () => {
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
          About
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;

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
