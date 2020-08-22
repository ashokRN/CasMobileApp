import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';

const HomePosts = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.postCard}>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
              </View>
              <View style={styles.postCard}>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
              </View>
              <View style={styles.postCard}>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
              </View>
              <View style={styles.postCard}>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
              </View>
              <View style={styles.postCard}>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
              </View>
              <View style={styles.postCard}>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
              </View>
              <View style={styles.postCard}>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
                  <Text>Hello</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePosts;

const styles = StyleSheet.create({
    container: {
        padding: 2,
        // top:10,
    },
  postCard: {
      flex: 1,
      marginTop:2,
      padding:10,
      backgroundColor: '#ffa500',
    //   borderTopLeftRadius:10,
    //   borderRadius:10
  },
});
