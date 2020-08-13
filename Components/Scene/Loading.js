import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  ActivityIndicator,
} from 'react-native';

import {Actions} from 'react-native-router-flux';

const Loading = () => {
  const LogoAnime = useRef(new Animated.Value(0)).current;
  const [LoadingSpinner, setLoadingSpinner] = useState(false);

    const switchOfAuth = () => {
      Actions.replace('auth')
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
  }, [LogoAnime]);

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
        <Text style={style.logoText}>CaS</Text>
        <ActivityIndicator size="large" color="#ffffff" />
      </Animated.View>
    </View>
  );
};

export default Loading;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5257F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
  },

  logoText: {
    color: '#FFFFFF',
    fontFamily: 'GoogleSans-Bold',
    fontSize: 100,
    marginTop: 29.1,
    fontWeight: '300',
  },
});
