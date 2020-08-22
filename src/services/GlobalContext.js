import React from 'react';

const State = {
  AppName: 'CAS',
  des: 'College of Arts & Science',
  dark: false,
  avatar: 'https://bit.ly/3l9V5v2',
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
