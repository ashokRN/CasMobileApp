import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {GlobalContext} from '../../services/GlobalContext';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import TwitterTextView from 'react-native-twitter-textview';
import {storage} from '../../firebase/index';
import API from '../../services/ApiService';

const CreatePost = ({navigation}) => {
  const {State} = React.useContext(GlobalContext);
  const {avatar, dark, user, token} = State;
  const {ProfileName} = user;
  const [image, setImage] = useState({});
  const [link, setLink] = useState(false);
  const [fileUrl, setfileUrl] = useState(false);
  const [publicPost, setPublicPost] = useState(false);
  const [save, setSave] = useState(false);
  const [postContent, setPostContent] = useState({});

  const dummyImage = 'https://bit.ly/3i5owN4';

  const selectFile = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose file from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (res) => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        setImage(source);
        setfileUrl(true);
      }
    });
  };

  const postSent = async () => {
    try {
      if (fileUrl) {
        const {uri, fileName} = image;
        const response = await fetch(uri);
        const blob = await response.blob();
        const imageExtension = fileName.split('.')[
          fileName.split('.').length - 1
        ];
        const imageFileName = `${Math.round(
          Math.random() * Math.random() * 100000000000,
        )}.${imageExtension}`;
        const uploadImage = storage.ref(`post/${imageFileName}`).put(blob);
        uploadImage.on(
          'state_changed',
          (snapshot) => {},
          (err) => {
            console.log(err);
          },
          () => {
            storage
              .ref(`post/${imageFileName}`)
              .getDownloadURL()
              .then(async (url) => {
                let response;
                let postBody = {...postContent, url: url, mediaType: 'image'};
                try {
                  response = await API.createPost(token, postBody);
                  if (response.data.success === true) {
                    setImage('');
                    setLink(false);
                    setSave(false)
                    setPublicPost(false);
                    setPostContent('');
                    setfileUrl(false);
                    navigation.navigate('Home');
                  }
                } catch (error) {
                  console.log(error.message);
                }
              });
          },
        );
      } else {
        let response;
        try {
          response = await API.createPost(token, postContent);
          if (response.data.success === true) {
            setImage('');
            setLink(false);
            setSave(false)
            setPublicPost(false);
            setPostContent('');
            setfileUrl(false);
            navigation.navigate('Home');
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', padding: 8}}>
          <Image
            source={{uri: avatar}}
            style={{width: 50, height: 50, borderRadius: 150 / 2}}
          />
          <View style={{padding: 10, flexDirection: 'column'}}>
            <Text style={{letterSpacing: 2}}>{ProfileName}</Text>
          </View>
        </View>

        <View style={styles.imageContailer}>
          {!image.uri && (
            <TouchableOpacity
              style={styles.addImageButton}
              onPress={selectFile}>
              <Text style={{color: '#ffffff', letterSpacing: 1.5}}>
                <FontAwesome5Icon name={'image'} size={15} /> Add Image
              </Text>
            </TouchableOpacity>
          )}

          {image.uri && (
            <Image
              source={{uri: image.uri}}
              style={[{width: 320, height: 300}, styles.imagePreview]}
            />
          )}
        </View>
        <View style={styles.postContainer}>
          <View style={styles.postInput}>
            <TextInput
              style={styles.Input}
              autoFocus={true}
              underlineColorAndroid="transparent"
              numberOfLines={10}
              multiline={true}
              placeholder="Write something or add a hashtag"
              placeholderTextColor={'#000000'}
              autoCapitalize="none"
              onChangeText={(text) =>
                setPostContent({...postContent, postText: text})
              }>
              <TwitterTextView
                style={{color: '#000000', letterSpacing: 1.5}}
                hashtagStyle={{color: '#ffa500', fontWeight: 'bold'}}
                mentionStyle={{color: '#55b246', fontWeight: 'bold'}}>
                {postContent.postText}
              </TwitterTextView>
            </TextInput>
          </View>
          {link && (
            <View style={styles.LinkInputContainer}>
              <TextInput
                style={styles.LinkInput}
                underlineColorAndroid="transparent"
                placeholder="Add Link"
                multiline={true}
                placeholderTextColor={'#000000'}
                autoCapitalize="none"
                onChangeText={(text) =>
                  setPostContent({...postContent, linkUrl: text})
                }
              />
            </View>
          )}

          <View style={styles.optionButtonContainer}>
            <TouchableOpacity
              style={[
                styles.optionsButton,
                link ? styles.activeColor : styles.inactiveColor,
              ]}
              onPress={() => {
                setLink(!link);
                setPostContent({...postContent, link: !link});
              }}>
              <Text style={styles.optionsButtonContent}>
                <FontAwesome5Icon name={'link'} size={15} />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.optionsButton,
                publicPost ? styles.activeColor : styles.inactiveColor,
              ]}
              onPress={() => {
                setPublicPost(!publicPost);
                setPostContent({...postContent, publicPost: !publicPost});
              }}>
              <Text style={styles.optionsButtonContent}>
                <FontAwesome5Icon name={'globe-asia'} size={15} />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.optionsButton,
                save ? styles.activeColor : styles.inactiveColor,
              ]}
              onPress={() => {
                setSave(!save);
                setPostContent({...postContent, savePost: !save});
              }}>
              <Text style={styles.optionsButtonContent}>
                <FontAwesome5Icon name={'bookmark'} size={15} />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.postButtonCircle}
              onPress={postSent}>
              <Text style={{color: '#ffffff'}}>
                <FontAwesome5Icon name={'paper-plane'} size={20} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default CreatePost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  imagePreview: {
    borderRadius: 20,
  },
  imageContailer: {
    top: 5,
    padding: 10,
    alignItems: 'center',
  },
  postContainer: {
    top: 10,
    padding: 10,
  },
  postInput: {
    padding: 5,
  },
  Input: {
    height: 100,
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom: 12,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
  },
  optionButtonContainer: {
    top: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionsButton: {
    width: 50,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  optionsButtonContent: {
    color: '#ffffff',
  },
  LinkInputContainer: {
    top: 15,
    padding: 5,
  },
  LinkInput: {
    color: 'blue',
  },
  activeColor: {
    backgroundColor: '#ffa500',
  },
  inactiveColor: {
    backgroundColor: '#cdcdcd',
  },
  postButtonCircle: {
    width: 80,
    height: 80,
    backgroundColor: '#ffa500',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150 / 2,
  },
  addImageButton: {
    flexDirection: 'row',
    width: 140,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150 / 2,
    backgroundColor: '#ffa500',
  },
});
