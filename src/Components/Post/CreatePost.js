import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
  TextInput,
  ScrollView,
  Picker,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {GlobalContext} from '../../services/GlobalContext';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import TwitterTextView from 'react-native-twitter-textview';
import { storage } from '../../firebase/index';

const CreatePost = () => {
  const {State} = React.useContext(GlobalContext);
  const {avatar, dark, user} = State;
  const {ProfileName} = user;
  const [image, setImage] = useState({});
  const [link, setLink] = useState(false);
  const [publicPost, setPublicPost] = useState(false);
  const [save, setSave] = useState(false);
  const [postContent, setPostContent] = useState({public: false, save: false});

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
      // console.log('Response = ', res);

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
      }
    });
  };

  const postSent = async () => {
    const response = await fetch(image.uri);
    const blob = await response.blob();
    const uploadImage = storage.ref(`post/${image.fileName}`).put(blob);
    uploadImage.on(
      "state_changed",
      snapshot => {},
      err =>{
        console.log(err);
      },
      () =>{
        storage.ref(`post/${image.fileName}`).getDownloadURL()
        .then(url =>{
          console.log(url,'Hello');
        })
      }
    )
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
          {/* <Image
            source={{
              uri: 'data:image/jpeg;base64,' + image.data,
            }}
            style={{ width: 100, height: 100 }}
          /> */}
          {!image.uri && (
            <TouchableOpacity style={styles.addImageButton} onPress={selectFile}>
              <Text style={{color: '#ffffff',letterSpacing:1.5}}>
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

          {/* <Image
            source={{
              uri: dummyImage
            }}
            style={[{ width: 100, height: 100 },styles.imagePreview]}
          /> */}

          {/* <Image
            source={{uri: dummyImage}}
            style={[{width: 320, height: 300}, styles.imagePreview]}
          /> */}
        </View>
        {/* <Text style={{ alignItems: 'center' }}>
            {image.uri}
          </Text> */}
        <View style={styles.postContainer}>
          <View style={styles.postInput}>
            <TextInput
              // autoFocus={true}
              style={styles.Input}
              underlineColorAndroid="transparent"
              numberOfLines={10}
              multiline={true}
              placeholder="Write something or add a hashtag"
              placeholderTextColor={'#000000'}
              autoCapitalize="none"
              //   ref={}
              //   onSubmitEditing={() => textInput2.current.focus()}
              onChangeText={(text) =>
                setPostContent({...postContent, postText: text})
              }>
                
              <TwitterTextView
                style={{color: '#000000',letterSpacing:1.5}}
                hashtagStyle={{color: '#ffa500',fontWeight:'bold'}}
                mentionStyle={{color: '#55b246',fontWeight:'bold'}}>
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
                //   ref={}
                //   onSubmitEditing={() => textInput2.current.focus()}
                onChangeText={(text) =>
                  setPostContent({...postContent, postLink: text})
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
              onPress={() => setLink(!link)}>
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
                setPostContent({...postContent, public: !publicPost});
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
                setPostContent({...postContent, save: !save});
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
          {/* <View style={styles.postButtonContainer}>
            <TouchableOpacity style={styles.postButtonCircle}>
              <Text style={{color: '#ffffff'}}>
                <FontAwesome5Icon name={'paper-plane'} size={20} />
              </Text>
            </TouchableOpacity>
          </View> */}
        </View>

        {/* <TouchableOpacity onPress={selectFile} style={styles.button} >
              <Text style={styles.buttonText}>Select File</Text>
          </TouchableOpacity>        */}
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
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
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
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
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

// export default class CreatePost extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       resourcePath: {},
//     };
//   }

//   selectFile = () => {
//     let options = {
//       title: 'Select Image',
//       customButtons: [
//         {
//           name: 'customOptionKey',
//           title: 'Choose file from Custom Option'
//         },
//       ],
//       storageOptions: {
//         skipBackup: true,
//         path: 'images',
//       },
//     };

//     ImagePicker.showImagePicker(options, res => {
//       console.log('Response = ', res);

//       if (res.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (res.error) {
//         console.log('ImagePicker Error: ', res.error);
//       } else if (res.customButton) {
//         console.log('User tapped custom button: ', res.customButton);
//         alert(res.customButton);
//       } else {
//         let source = res;
//         this.setState({
//             resourcePath:source
//         })
//       }
//     });
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.container}>
//           <Image
//             source={{
//               uri: 'data:image/jpeg;base64,' + this.state.resourcePath.data,
//             }}
//             style={{ width: 100, height: 100 }}
//           />
//           <Image
//             source={{ uri: this.state.resourcePath.uri }}
//             style={{ width: 200, height: 200 }}
//           />
//           <Text style={{ alignItems: 'center' }}>
//             {this.state.resourcePath.uri}
//           </Text>

//           <TouchableOpacity onPress={this.selectFile} style={styles.button}  >
//               <Text style={styles.buttonText}>Select File</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }
