import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import {GlobalContext} from '../../../services/GlobalContext';
import {globalStyle} from '../../../services/GlobalStyles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const HomePosts = () => {
  const [globalState, setGlobalState] = useContext(GlobalContext);
  const {avatar, dark} = globalState;
  const {DarkBackground, LightBackground} = globalStyle;
  const {height, width} = window;
  const activityContainerWidth = width / 3;
  console.log(width, 'Width', height, 'Height');
  console.log('width/3', activityContainerWidth);
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {/* postCard */}
        <View style={styles.postCard}>
          <View style={[styles.homeProfileContainer]}>
            <Image
              source={{uri: avatar}}
              style={styles.homeProfileRoundedImage}
            />
            <View style={styles.homeProfileTextContainer}>
              <Text style={styles.homeProfileNameText}>Ashok</Text>
              <Text style={styles.homeProfileTimeText}>
                7d&nbsp;.&nbsp;
                <FontAwesome5 name={'globe-asia'} />
              </Text>
            </View>
          </View>
          {/* //postContentContainer */}
          <View style={{width: width}}>
            <Image
              source={{uri: avatar}}
              style={[styles.postContent, {width: width, height: 500}]}
            />
          </View>
          <View style={[styles.activityContainer, {width: width}]}>
            <View
              style={[
                {width: activityContainerWidth},
                styles.activityIconContainer,
              ]}>
              <Text>like</Text>
            </View>
            <View
              style={[
                {width: activityContainerWidth},
                styles.activityIconContainer,
              ]}>
              <Text>comment</Text>
            </View>
            <View
              style={[
                {width: activityContainerWidth},
                styles.activityIconContainer,
              ]}>
              <Text>share</Text>
            </View>
          </View>
        </View>

        {/* //2 */}
        <View style={styles.postCard}>
          <View style={[styles.homeProfileContainer]}>
            <Image
              source={{uri: avatar}}
              style={styles.homeProfileRoundedImage}
            />
            <View style={styles.homeProfileTextContainer}>
              <Text style={styles.homeProfileNameText}>Ashok</Text>
              <Text style={styles.homeProfileTimeText}>
                7d&nbsp;.&nbsp;
                <FontAwesome5 name={'globe-asia'} />
              </Text>
            </View>
          </View>
          {/* //postContentContainer */}
          <View style={{width: width}}>
            <Image
              source={{uri: avatar}}
              style={[styles.postContent, {width: width, height: 300}]}
            />
          </View>
          <View style={[styles.activityContainer, {width: width}]}>
            <View
              style={[
                {width: activityContainerWidth},
                styles.activityIconContainer,
              ]}>
              <Text>like</Text>
            </View>
            <View
              style={[
                {width: activityContainerWidth},
                styles.activityIconContainer,
              ]}>
              <Text>comment</Text>
            </View>
            <View
              style={[
                {width: activityContainerWidth},
                styles.activityIconContainer,
              ]}>
              <Text>share</Text>
            </View>
          </View>
        </View>
        {/* //3 */}
        <View style={styles.postCard}>
          <View style={[styles.homeProfileContainer]}>
            <Image
              source={{uri: avatar}}
              style={styles.homeProfileRoundedImage}
            />
            <View style={styles.homeProfileTextContainer}>
              <Text style={styles.homeProfileNameText}>Ashok</Text>
              <Text style={styles.homeProfileTimeText}>
                7d&nbsp;.&nbsp;
                <FontAwesome5 name={'globe-asia'} />
              </Text>
            </View>
          </View>
          {/* //postContentContainer */}
          <View style={{width: width}}>
            <Image
              source={{uri: avatar}}
              style={[styles.postContent, {width: width, height: 300}]}
            />
          </View>
          <View style={[styles.activityContainer, {width: width}]}>
            <View
              style={[
                {width: activityContainerWidth},
                styles.activityIconContainer,
              ]}>
              <Text>like</Text>
            </View>
            <View
              style={[
                {width: activityContainerWidth},
                styles.activityIconContainer,
              ]}>
              <Text>comment</Text>
            </View>
            <View
              style={[
                {width: activityContainerWidth},
                styles.activityIconContainer,
              ]}>
              <Text>share</Text>
            </View>
          </View>
        </View>
        {/* //4 */}
        <View style={styles.postCard}>
          <View style={[styles.homeProfileContainer]}>
            <Image
              source={{uri: avatar}}
              style={styles.homeProfileRoundedImage}
            />
            <View style={styles.homeProfileTextContainer}>
              <Text style={styles.homeProfileNameText}>Ashok</Text>
              <Text style={styles.homeProfileTimeText}>
                7d&nbsp;.&nbsp;
                <FontAwesome5 name={'globe-asia'} />
              </Text>
            </View>
          </View>
          {/* //postContentContainer */}
          <View style={{width: width}}>
            <Image
              source={{uri: avatar}}
              style={[styles.postContent, {width: width, height: 300}]}
            />
          </View>
          <View style={[styles.activityContainer, {width: width}]}>
            <View
              style={[
                {width: activityContainerWidth},
                styles.activityIconContainer,
              ]}>
              <Text>like</Text>
            </View>
            <View
              style={[
                {width: activityContainerWidth},
                styles.activityIconContainer,
              ]}>
              <Text>comment</Text>
            </View>
            <View
              style={[
                {width: activityContainerWidth},
                styles.activityIconContainer,
              ]}>
              <Text>share</Text>
            </View>
          </View>
        </View>
        {/* //5 */}
        <View style={styles.postCard}>
          <View style={[styles.homeProfileContainer]}>
            <Image
              source={{uri: avatar}}
              style={styles.homeProfileRoundedImage}
            />
            <View style={styles.homeProfileTextContainer}>
              <Text style={styles.homeProfileNameText}>Ashok</Text>
              <Text style={styles.homeProfileTimeText}>
                7d&nbsp;.&nbsp;
                <FontAwesome5 name={'globe-asia'} />
              </Text>
            </View>
          </View>
          {/* //postContentContainer */}
          <View style={{width: width}}>
            <Image
              source={{uri: avatar}}
              style={[styles.postContent, {width: width, height: 300}]}
            />
          </View>
          <View style={[styles.activityContainer, {width: width}]}>
            <View
              style={[
                {width: activityContainerWidth},
                styles.activityIconContainer,
              ]}>
              <Text>like</Text>
            </View>
            <View
              style={[
                {width: activityContainerWidth},
                styles.activityIconContainer,
              ]}>
              <Text>comment</Text>
            </View>
            <View
              style={[
                {width: activityContainerWidth},
                styles.activityIconContainer,
              ]}>
              <Text>share</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePosts;

const styles = StyleSheet.create({
  container: {
    // padding: 15,
    // top:10,
    flexDirection: 'column',
  },
  postCard: {
    flex: 1,
    marginTop: 0.5,
    // padding: 6,
    // height: 300,
    // borderBottomColor: '#000000',
    // borderWidth: 1,
    backgroundColor: '#ffffff',
    //   borderTopLeftRadius:10,
    // borderRadius:20
  },
  postContainer: {
    backgroundColor: '#000000',
  },
  // postContent: {
  //   width:'100%',
  // },
  homeProfileContainer: {
    flexDirection: 'row',
    borderColor: '#ffffff',
    alignItems: 'center',
    // backgroundColor: '#ffffff',
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
    // marginBottom:5
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
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'baseline',
  },
  activityIconContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems:'center'
  }
});
