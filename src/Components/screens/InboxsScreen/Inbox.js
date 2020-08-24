import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Dimensions, ScrollView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const Inboxs = () => {
  return (
      <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.notifiMainContainer}>
          
        <Text style={styles.notificationSpliter}>New</Text>
        <View style={styles.notifiContainer}>
          <Text>
              Hello! Ashok A 
              paragraph is a series of related sentences developing
              a central idea, called the topic. Hello! Ashok A paragraph is a series of related sentences developing
              a central idea, called the topic. Hello! Ashok A paragraph is a series of related sentences developing
              a central idea, called the topic.
          </Text>
          </View>

          
          <Text style={styles.notificationSpliter}>This Week</Text>
        <View style={styles.notifiContainer}>
          <Text>
            Hello! Ashok A paragraph is a series of related sentences developing
            a central idea, called the topic.
          </Text>
          </View>

          <View style={styles.notifiContainer}>
          <Text>
            Hello! Ashok A paragraph is a series of related sentences developing
            a central idea, called the topic.
          </Text>
          </View>

          <Text style={styles.notificationSpliter}>This Month</Text>
        <View style={styles.notifiContainer}>
          <Text>
            Hello! Ashok A paragraph is a series of related sentences developing
            a central idea, called the topic.
          </Text>
          </View>

          <View style={styles.notifiContainer}>
          <Text>
            Hello! Ashok A paragraph is a series of related sentences developing
            a central idea, called the topic.
          </Text>
          </View>

          <Text style={styles.notificationSpliter}>Earlier</Text>

        <View style={styles.notifiContainer}>
          <Text>
            Hello! Ashok A paragraph is a series of related sentences developing.
          </Text>
        </View>

        <View style={styles.notifiContainer}>
          <Text>
            Hello! Ashok A paragraph is a series of related sentences developing
            a central idea, called the topic.
          </Text>
          </View>

        <View style={styles.notifiContainer}>
          <Text>
            Hello! Ashok A paragraph is a series of related sentences developing
            a central idea, called the topic.
          </Text>
          </View>
          </View>
          </ScrollView>
      </SafeAreaView>
  );
};

export default Inboxs;

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  notifiContainer: {
    marginTop: 10,
    padding: 20,
      backgroundColor: '#ffffff',
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 3,
  },
  notifiMainContainer: {
    padding:5,
    paddingBottom: 40,
    flexDirection:'column'
  },
  notificationSpliter: {
    fontSize: 12,
    padding: 8,
    top: 10,
    marginBottom: 10,
    letterSpacing:1.5
  }
});
