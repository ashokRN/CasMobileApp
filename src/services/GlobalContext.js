import React from 'react';
import API from './ApiService';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';


const State = {
  AppName: 'CAS',
  des: 'College of Arts & Science',
  dark: false,
  avatar: 'https://bit.ly/3l9V5v2',
  Auth:false,
  active:false
};

export const GlobalContext = React.createContext(State);

export default ({children}) => {
    const [globalState, setGlobalState] = React.useState(State);
    
  return (
    <GlobalContext.Provider value={[globalState, setGlobalState]}>
      {children}
    </GlobalContext.Provider>
  );
};
