import React from 'react';
import {reducer} from './StateManagement';

const initialState = {};

export const GlobalContext = React.createContext({});

const Store = ({children}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  console.log(state, "globalState");

  return (
    <GlobalContext.Provider value={{State: state, StateDispatch: dispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Store;
