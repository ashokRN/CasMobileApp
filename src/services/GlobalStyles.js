const {StyleSheet} = require('react-native');
const {themes} = require('../settings/Themes.js');

const {light, dark, Indicators, logoTheme, logoBorder,StableColor} = themes;

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
  darkTabBackground: {
    backgroundColor: dark.backgroudColor,
  },
  lightTabBackground: {
    backgroundColor: light.backgroudColor,
  },
  darkTabActiveColor: {
    color: dark.activeColor,
  },
  lightTabActiveColor: {
    color: light.activeColor,
  },
  darkTabInActiveColor: {
    color: dark.inactiveColor,
  },
  lightTabInActiveColor: {
    color: light.inactiveColor,
  },
  settingHeaderText: {
    top: 5,
    fontFamily: 'GoogleSans-Bold',
    padding: 10,
    fontSize: 20,
    backgroundColor: '#f8f8f4',
  },
  onlineIndicator: {
    backgroundColor: Indicators.onlineIndicator,
  },
  offlineIndicator: {
    backgroundColor: Indicators.offlineIndicator,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    flexDirection:'row'
  },
  logoText: {
    top: 2,
    alignSelf:'center',
    fontFamily: 'GoogleSans-Bold',
    fontSize: 15,
    letterSpacing: 10,
    lineHeight: 40,
  },
  darkLogoColor: {
    color: logoTheme.dark,
  },
  lightLogoColor: {
    color: logoTheme.light,
  },
  darkTabLogoBorder: {
    borderColor: logoBorder.dark,
  },
  lightTabLogoBorder: {
    borderColor: logoBorder.light,
  },
  StaticColor: {
    color:StableColor
  },
  loadingDarkScreen: {
    backgroundColor: dark.backgroudColor,
    color:dark.lodingLogoColor
  },
  loadingLightScreen: {
    backgroundColor: light.backgroudColor,
    color: light.lodingLogoColor,
  },
  lightBackground: {
    color:light.lightBackground
  }
});
