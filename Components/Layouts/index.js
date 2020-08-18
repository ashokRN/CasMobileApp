import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {GlobalContext} from '../../services/GlobalContext';
import Axios from 'axios';
import Home from './Home/Home';
import {Actions} from 'react-native-router-flux';

const Dashboard = () => {
  const [globalState, setGlobalState] = useContext(GlobalContext);

  const profie = async () => {
    try {
      const response = await Axios.get('http://192.168.1.9:3000/api/user/get', {
        headers: {
          Authorization: `${globalState.token}`,
        },
      });
      let data = response.data;
      setGlobalState({
        ...globalState,
        name: data.user.name,
        email: data.user.email,
        phone: data.user.phone,
        active: true,
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  console.log(globalState, 'GlobalState');

  React.useEffect(() => {
    profie();
  }, []);

  return <View style={styles.container}>{Actions.replace('main')}</View>;
};

export default Dashboard;

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
