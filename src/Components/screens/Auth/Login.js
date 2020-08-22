import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import API from '../../../services/ApiService';
import {GlobalContext} from '../../../services/GlobalContext';

const Login = ({navigation}) => {
  const [regno, setRegno] = useState();
  const [password, setPassword] = useState();
  const [globalState, setGlobalState] = React.useContext(GlobalContext);
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
          console.log(error.message);
        }
        if (response) {
          let data = response.data;
          setGlobalState({
            ...globalState,
            token: value,
            user: {
              ProfileName: data.user.profileId,
              Name: data.user.name,
              Email: data.user.email,
              Phone: data.user.phone,
              DOB: data.user.dob,
              RegistrationNo: data.user.regNo,
              Department: data.user.department,
              Course: data.user.course,
              Graduate: data.user.graduate,
            },
            active: true,
            Auth: true,
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
        <View style={styles.top}></View>
        <View style={styles.middle}>
          <Text style={styles.textContainer}>You are ready to go</Text>

          <View style={styles.formArea}>
            <Text style={[styles.textContainer, styles.signin]}>Login</Text>
            <View style={styles.mainForm}>
              <View style={styles.formItems}>
                <TextInput
                  // autoFocus={true}
                  style={styles.Input}
                  underlineColorAndroid="transparent"
                  placeholder="Email"
                  keyboardType="email-address"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  ref={textInput}
                  onSubmitEditing={() => textInput2.current.focus()}
                  onChangeText={(text) => setRegno(text)}
                />
              </View>
              <View style={styles.formItems}>
                <TextInput
                  style={styles.Input}
                  secureTextEntry={true}
                  underlineColorAndroid="transparent"
                  name={'password'}
                  ref={textInput2}
                  placeholder="Password"
                  placeholderTextColor="#000000"
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
        <View style={styles.bottom}></View>
        <View style={styles.signup}>
          <Text style={styles.signupText}>If you don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('signup')}>
            <Text style={styles.signupTextSignUp}>Sign Up</Text>
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
