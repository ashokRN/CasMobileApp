import React, {useRef, useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  ActivityIndicator,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { GlobalContext } from '../../../services/GlobalContext';

const Loading = () => {
  const LogoAnime = useRef(new Animated.Value(0)).current;
  const [LoadingSpinner, setLoadingSpinner] = useState(false);
  const [globalState, setGlobalState] = useContext(GlobalContext);

  const { AppName, des } = globalState;

    const switchOfAuth = () => {
      Actions.push('login')
  };

  useEffect(() => {
    Animated.timing(LogoAnime, {
      toValue: 1,
      tension: 10,
      friction: 2,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
        setLoadingSpinner(true);
        if(LoadingSpinner === true) setTimeout(switchOfAuth, 1200);
    });
  }, [LoadingSpinner]);

  return (
    <View style={style.container}>
      <Animated.View
        style={{
          opacity: LogoAnime,
          transform: [
            {
              translateY: LogoAnime.interpolate({
                inputRange: [0, 1],
                outputRange: [80, 0],
              }),
            },
          ],
        }}>
        <Text style={style.logoText}>{AppName}</Text>
        <Text style={style.logoTextDes}>{des}</Text>
      </Animated.View>
    </View>
  );
};

export default Loading;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA500',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    width:220,
    height:40
  },

  logoText: {
    color: '#FFFFFF',
    fontFamily: 'GoogleSans-Bold',
    fontSize: 100,
    fontWeight: '300',
    justifyContent: 'center',
    alignSelf:'center'
  },
  logoTextDes: {
    color: '#FFFFFF',
    fontFamily: 'GoogleSans-Bold',
    fontSize: 20,
    fontWeight: '300',
    justifyContent: 'center',
    alignSelf:'center'
  }
});
