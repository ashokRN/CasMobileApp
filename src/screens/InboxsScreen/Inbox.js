import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {InboxMessage, Message} from '../../Components/InboxMessage/InboxMessage';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const Inboxs = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.notifiMainContainer}>

          <InboxMessage period={'New'}>
            <Message>
            <Text>
              Hello! Ashok A paragraph is a series of related sentences
              developing a central idea, called the topic.
            </Text>
            </Message>
            <Message>
            <Text>
              Hello! Ashok A paragraph is a series of related sentences
              developing a central idea, called the topic.
            </Text>
            </Message>
          </InboxMessage>

          <InboxMessage period={'This Week'}>
            <Message>
            <Text>
              Hello! Ashok A paragraph is a series of related sentences
              developing a central idea, called the topic.
            </Text>
            </Message>
            <Message>
            <Text>
              Hello! Ashok A paragraph is a series of related sentences
              developing a central idea, called the topic.
            </Text>
            </Message>
          </InboxMessage>
          <InboxMessage period={'This Month'}>
            <Message>
              <Text>Hello</Text>
            </Message>
          </InboxMessage>
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
  notifiMainContainer: {
    padding: 5,
    paddingBottom: 40,
    flexDirection: 'column',
  },
});
