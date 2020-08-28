import React, {useContext} from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView, Text} from 'react-native';
import {GlobalContext} from '../../services/GlobalContext';
import {globalStyle} from '../../services/GlobalStyles';
import Post from '../../Components/Post/Post';

const HomePosts = () => {
  const {State, StateDispatch} = useContext(GlobalContext);
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
            urlType={'video'}
            url={'https://bit.ly/2Ey21BK'}
          />
          <Post
            posterImage={avatar}
            posterName={'Ashok'}
            postTime={'4h'}
            postText={
              'Congress MP and business H.Vasanthakumar died of COVID-19 at a private hospital in Chennai on Friday'
            }
            // url={avatar}
          />
          <Post
            posterImage={avatar}
            posterName={'Ashok'}
            postTime={'4h'}
            url={avatar}
          />
          <Post
            posterImage={avatar}
            posterName={'Ashok'}
            postTime={'4h'}
            urlType={'video'}
            url={'https://bit.ly/2EzAYpN'}
          />
          <Post
            posterImage={avatar}
            posterName={'Ashok'}
            postTime={'4h'}
            url={avatar}
          />
          <Post
            posterImage={avatar}
            posterName={'Ashok'}
            postTime={'4h'}
            urlType={'video'}
            url={'https://bit.ly/34H6ZqL'}
          />
          <Post
            posterImage={avatar}
            posterName={'Ashok'}
            postTime={'4h'}
            url={avatar}
          />
          {/* <Post
            posterImage={avatar}
            posterName={'Ashok'}
            postTime={'4h'}
            urlType={'video'}
            url={"https://bit.ly/2ELCLaR"}
          /> */}
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
