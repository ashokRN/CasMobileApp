import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export const Message = ({children}) => {
  return <View style={styles.notifiContainer}>{children}</View>;
};

export const InboxMessage = ({children,period}) => {
  return (
    <React.Fragment>
      <Text style={styles.notificationSpliter}>{period}</Text>
      {children}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  notifiContainer: {
    marginTop: 10,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  notificationSpliter: {
    fontSize: 12,
    padding: 8,
    top: 10,
    marginBottom: 10,
    letterSpacing: 1.5,
  },
});
