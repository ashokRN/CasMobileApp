import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {GlobalContext} from '../../../services/GlobalContext';
import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const Auth = ({navigation}) => {
  const [globalState, setGlobalState] = React.useContext(GlobalContext);
  let id = 'id';
  const profie = async () => {
    try {
      const token = AsyncStorage.getItem('token', async (err, token) => {
        if (err) return err;
        const response = await Axios.get(
          'http://192.168.1.9:3000/api/user/get',
          {
            headers: {
              Authorization: `${token}`,
            },
          },
        );
        let data = response.data;
        setGlobalState({
          ...globalState,
          name: data.user.name,
          email: data.user.email,
          phone: data.user.phone,
          active: true,
        });
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  console.log(globalState, 'GlobalState');

  React.useEffect(() => {
    profie();
  }, [id]);
  const pushHome = () => navigation.navigate('home');
  return (
    <View style={styles.container}>
      {globalState.name ? pushHome() : () => navigation.navigate('loading')}
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    color: '#FFA500',
    fontFamily: 'GoogleSans-Bold',
    fontSize: 24,
    marginBottom: 30,
    position: 'relative',
    alignSelf: 'center',
  },
});
