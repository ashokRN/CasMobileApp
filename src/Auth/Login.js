import React, {useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import API from '../services/ApiService';
import {GlobalContext} from '../services/GlobalContext';
import {globalStyle} from '../services/GlobalStyles';

const Login = ({navigation}) => {
  const state = useContext(GlobalContext);
  const {dark} = state.State;

  const [regno, setRegno] = useState();
  const [password, setPassword] = useState();
  const {loadingDarkScreen, loadingLightScreen, lightBackground} = globalStyle;
  
  let textInput = React.useRef();
  let textInput2 = React.useRef();

  const tokenAuth = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        let response;
        try {
          response = await API.getUser(value);
        } catch (error) {
          navigation.navigate('login');
        }
        if (response) {
          let data = response.data;
          await state.StateDispatch({type:"LOGIN",payload:{user:data.user,token:value,active:true,Auth:true}});
          navigation.navigate('home');
        }
      } else {
        navigation.navigate('login');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loginSubmit = async () => {
    let response;
    try {
      response = await API.login(regno, password);
    } catch (error) {
      console.log(error.message);
    }
    if (response) {
      await AsyncStorage.setItem('token', response.data.token);
      tokenAuth();
    }
  };

  return (
    <React.Fragment>
      <View style={styles.container}>
        <View
          style={[
            styles.top,
            {
              backgroundColor: dark
                ? loadingDarkScreen.backgroundColor
                : loadingLightScreen.backgroundColor,
            },
          ]}></View>
        <View style={[styles.middle, {zIndex: dark ? 2 : 1}]}>
          <Text style={styles.textContainer}>You are ready to go</Text>

          <View
            style={[
              styles.formArea,
              {
                backgroundColor: dark
                  ? loadingDarkScreen.backgroundColor
                  : '#ffffff',
              },
            ]}>
            <Text
              style={[
                styles.textContainer,
                styles.signin,
                {color: dark ? '#ffa500' : '#000000'},
              ]}>
              Login
            </Text>
            <View style={styles.mainForm}>
              <View style={styles.formItems}>
                <TextInput
                  // autoFocus={true}
                  style={[
                    styles.Input,
                    {
                      borderColor: dark ? '#ffffff' : '#000000',
                      color: dark ? '#ffffff' : '#000000',
                    },
                  ]}
                  underlineColorAndroid="transparent"
                  placeholder="Registration No"
                  placeholderTextColor={dark ? '#ffffff' : '#000000'}
                  autoCapitalize="none"
                  ref={textInput}
                  onSubmitEditing={() => textInput2.current.focus()}
                  onChangeText={(text) => setRegno(text)}
                />
              </View>
              <View style={styles.formItems}>
                <TextInput
                  style={[
                    styles.Input,
                    {
                      borderColor: dark ? '#ffffff' : '#000000',
                      color: dark ? '#ffffff' : '#000000',
                    },
                  ]}
                  secureTextEntry={true}
                  underlineColorAndroid="transparent"
                  name={'password'}
                  ref={textInput2}
                  placeholder="Password"
                  placeholderTextColor={dark ? '#ffffff' : '#000000'}
                  autoCapitalize="none"
                  onChangeText={(text) => setPassword(text)}
                />
              </View>
              <TouchableOpacity
                style={styles.submitButton}
                onPress={loginSubmit}>
                <Text style={styles.submitButtonText}> Submit </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.bottom,
            {
              backgroundColor: dark
                ? loadingDarkScreen.backgroundColor
                : loadingLightScreen.backgroundColor,
            },
          ]}></View>
        <View style={styles.signup}>
          <Text style={styles.signupText}>If you don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('signup')}>
            <Text
              style={[
                styles.signupTextSignUp,
                {
                  color: dark
                    ? loadingDarkScreen.color
                    : loadingLightScreen.color,
                },
              ]}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </React.Fragment>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  top: {
    position: 'relative',
    backgroundColor: '#FFA500',
    paddingRight: 12.7,
    paddingLeft: 12.7,
    height: 250,
  },
  middle: {
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
    paddingLeft: 26.3,
    paddingRight: 26.3,
  },
  bottom: {
    position: 'relative',
    height: '100%',
    paddingRight: 12.7,
    paddingLeft: 12.7,
    backgroundColor: '#FFA500',
  },
  textContainer: {
    color: '#FCFDFF',
    fontFamily: 'GoogleSans-Bold',
    fontSize: 24,
    letterSpacing: 5,
    marginBottom: 30,
    position: 'relative',
    top: '20%',
    alignSelf: 'center',
  },
  formArea: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    top: '20%',
    paddingBottom: 40,
  },
  signin: {
    top: 10,
    fontFamily: 'GoogleSans-Bold',
    marginTop: 15,
  },
  formItems: {
    marginTop: 10,
    borderBottomColor: '#2D3057',
  },
  Input: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    letterSpacing: 5,
    marginLeft: 15,
    marginRight: 15,
    height: 50,
    borderColor: '#000000',
    borderWidth: 0,
    borderBottomWidth: 0.5,
    borderRadius: 5,
  },
  loginAs: {
    paddingLeft: 46.6,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  loginText: {
    color: '#2D3057',
    fontSize: 10,
    fontFamily: 'GoogleSans-Bold',
    fontWeight: 'bold',
  },

  submitButton: {
    top: 25,
    backgroundColor: '#FFA500',
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius: 5,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    letterSpacing: 5,
  },
  signup: {
    top: 550,
    zIndex: 3,
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  signupText: {
    color: '#ffffff',
    fontFamily: 'GoogleSans-Bold',
    fontSize: 15,
    letterSpacing: 3,
  },
  signupTextSignUp: {
    top: 25,
    color: '#ffffff',
    fontFamily: 'GoogleSans-Bold',
    fontSize: 20,
    letterSpacing: 3,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
