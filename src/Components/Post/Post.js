import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {GlobalContext} from '../../services/GlobalContext';
import {globalStyle} from '../../services/GlobalStyles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const window = Dimensions.get('window');

const Post = (props) => {
  const {State, StateDispatch} = React.useContext(GlobalContext);
  const {avatar, dark} = State;
  const {DarkBackground, LightBackground} = globalStyle;
  const {height, width} = window;
  const count = 10;

  return (
    <View style={styles.postCard}>
      <View style={[styles.homeProfileContainer]}>
        <Image
          source={{uri: props.posterImage}}
          style={styles.homeProfileRoundedImage}
        />
        <View style={styles.homeProfileTextContainer}>
          <Text style={styles.homeProfileNameText}>{props.posterName}</Text>
          <Text style={styles.homeProfileTimeText}>
            {props.postTime}&nbsp;.&nbsp;
            <FontAwesome5 name={'globe-asia'} />
          </Text>
        </View>
      </View>
      <View style={{width: width}}>
        <Image
          source={{uri: props.contentImage}}
          style={[styles.postContent, {width: width, height: 300}]}
        />
      </View>
      <View style={[styles.activityContainer]}>
        <View style={[styles.activityIconContainer]}>
          <Text>like</Text>
        </View>
        <View style={[styles.activityIconContainer]}>
          <Text>comment</Text>
        </View>
        <View style={[styles.activityIconContainer]}>
          <Text>share</Text>
        </View>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  postCard: {
    flex: 1,
    marginTop: 0.5,
    backgroundColor: '#ffffff',
  },
  postContainer: {
    backgroundColor: '#000000',
  },
  homeProfileContainer: {
    flexDirection: 'row',
    borderColor: '#ffffff',
    alignItems: 'center',
    padding: 10,
  },
  homeProfileRoundedImage: {
    width: 40,
    height: 40,
    borderRadius: 150 / 2,
  },
  homeProfileNameText: {
    fontSize: 15,
    letterSpacing: 5,
    marginLeft: 10,
    alignContent: 'space-between',
  },
  homeProfileTextContainer: {
    flexDirection: 'column',
    marginBottom: 15,
  },
  homeProfileTimeText: {
    fontSize: 10,
    letterSpacing: 1,
    marginLeft: 10,
  },
  activityContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  activityIconContainer: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
