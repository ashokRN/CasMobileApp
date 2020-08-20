import React, {useRef, useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { GlobalContext } from '../../../services/GlobalContext';
import API from '../../../services/ApiService';

const Loading = ({navigation}) => {
  const LogoAnime = useRef(new Animated.Value(0)).current;
  const [LoadingSpinner, setLoadingSpinner] = useState(false);
  const [globalState, setGlobalState] = useContext(GlobalContext);

  const { AppName, des } = globalState;
  
  const tokenAuth = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        let response;
        try {
          response = await API.getUser(value);
        } catch (error) {
          console.log(error.message);
        }
        if (response) {
          let data = response.data;
          setGlobalState({
            ...globalState,
            token: value,
            name: data.user.name,
            email: data.user.email,
            phone: data.user.phone,
            active: true,
            Auth:true,
          });
          navigation.navigate('home');
        } 
      } else {
        navigation.navigate('login');
      }
    } catch (error) {
      console.log(error);
    }
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
      if (LoadingSpinner === true) setTimeout(() => tokenAuth(), 1200);
    })
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
