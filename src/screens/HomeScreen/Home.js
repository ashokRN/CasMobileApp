import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {GlobalContext} from '../../services/GlobalContext';
import {globalStyle} from '../../services/GlobalStyles';
import Post from '../../Components/Post/Post';

const HomePosts = () => {
  
  const {State, StateDispatch}= useContext(GlobalContext);
  const {avatar, dark} = State;

  const {DarkBackground, LightBackground} = globalStyle;

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.homeMainContainer}>
          <Post
            posterImage={avatar}
            posterName={'Ashok'}
            postTime={'4h'}
            contentImage={avatar}
          />
          <Post
            posterImage={avatar}
            posterName={'Ashok'}
            postTime={'4h'}
            contentImage={avatar}
          />
          <Post
            posterImage={avatar}
            posterName={'Ashok'}
            postTime={'4h'}
            contentImage={avatar}
          />
          <Post
            posterImage={avatar}
            posterName={'Ashok'}
            postTime={'4h'}
            contentImage={avatar}
          />
          <Post
            posterImage={avatar}
            posterName={'Ashok'}
            postTime={'4h'}
            contentImage={avatar}
          />
          <Post
            posterImage={avatar}
            posterName={'Ashok'}
            postTime={'4h'}
            contentImage={avatar}
          />
          <Post
            posterImage={avatar}
            posterName={'Ashok'}
            postTime={'4h'}
            contentImage={avatar}
          />
          <Post
            posterImage={avatar}
            posterName={'Ashok'}
            postTime={'4h'}
            contentImage={avatar}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePosts;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  homeMainContainer: {
    paddingBottom: 15,
    flexDirection: 'column',
  },
});
