import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';

const Login = () => {
  const [regno, setRegno] = useState();
  const [password, setPassword] = useState();

  const loginSubmit = () => {
    Alert.alert(regno, password);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Reg No"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        value={regno || ''}
        onChangeText={(text) => setRegno(text)}
      />

      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        name={'password'}
        placeholder="Password"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        value={password || ''}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => loginSubmit()}>
        <Text style={styles.submitButtonText}> Submit </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    justifyContent: 'center',
    flex: 1,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});
