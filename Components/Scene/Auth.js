import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';

import API from '../../services/ApiService';
import {GlobalContext} from '../../services/GlobalContext';

const Login = () => {
  const [regno, setRegno] = useState();
  const [password, setPassword] = useState();
  const [globalState, setGlobalState] = React.useContext(GlobalContext);
  let token = AsyncStorage.getItem('token');

  // React.useEffect(() => {
  //   Alert.alert(token);
  //   if (token) {
  //     Actions.replace('signup');
  //   }
  // })

  const loginSubmit = async () => {
    try {
      const response = await axios.post(
        'http://192.168.1.9:3000/api/user/login',
        {
          email: regno,
          password: password,
        },
      );

      AsyncStorage.setItem('token', response.data.token);

      let token = AsyncStorage.getItem('token', (err, result) => {
        if (err) return err;
        if (result) {
          setGlobalState({token: result});
          Actions.replace('signup');
        }
      });
    } catch (error) {
      // handle error
      Alert.alert(error.message);
    }
  };

  return (
    <React.Fragment>
      {token !== null || token !== '' || token !== undefined  ? (
        <View style={styles.container}>
          <View style={styles.top}></View>

          <View style={styles.middle}>
            <Text style={styles.textContainer}>You are ready to go</Text>

            <View style={styles.formArea}>
              <Text style={[styles.textContainer, styles.signin]}>Login</Text>
              <View style={styles.mainForm}>
                <View style={styles.formItems}>
                  <TextInput
                    style={styles.Input}
                    underlineColorAndroid="transparent"
                    placeholder="Email"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    value={regno || ''}
                    onChangeText={(text) => setRegno(text)}
                  />
                </View>
                <View style={styles.formItems}>
                  <TextInput
                    style={styles.Input}
                    underlineColorAndroid="transparent"
                    name={'password'}
                    placeholder="Password"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    value={password || ''}
                    onChangeText={(text) => setPassword(text)}
                  />
                </View>
                <TouchableOpacity
                  style={styles.submitButton}
                  onPress={() => loginSubmit()}>
                  <Text style={styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.bottom}></View>
          <View style={styles.signup}>
            <Text style={styles.signupText}>If you don't have an account?</Text>
            <TouchableOpacity onPress={() => Actions.replace('signup')}>
              <Text style={styles.signupTextSignUp}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        Actions.replace('signup')
      )}
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
    zIndex: 2,
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
    color: '#2D3057',
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
    top: 10,
    backgroundColor: '#FFA500',
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius: 5,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
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
  },
  signupTextSignUp: {
    top: 5,
    color: '#ffffff',
    fontFamily: 'GoogleSans-Bold',
    fontSize: 20,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
