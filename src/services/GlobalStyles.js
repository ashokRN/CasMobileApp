const {StyleSheet} = require('react-native');
const { themes } = require('./settings/Themes.js');

const { light, dark } = themes;

export const globalStyle = StyleSheet.create({
  Darktext: {
    color: dark.text,
    letterSpacing: 1.5,
  },
  DarkBackground: {
    backgroundColor: dark.darkBackground,
  },
  LightText: {
    color: light.text,
    letterSpacing: 1.5,
  },
  LightBackground: {
    backgroundColor: light.lightBackground,
  },
  settingHeaderText: {
    top: 5,
    fontFamily: 'GoogleSans-Bold',
    padding: 10,
    fontSize: 20,
    backgroundColor: '#f8f8f4',
  },
});
