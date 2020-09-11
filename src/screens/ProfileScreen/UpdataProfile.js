import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {GlobalContext} from '../../services/GlobalContext';
import {globalStyle} from '../../services/GlobalStyles';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {storage} from '../../firebase/index';
import API from '../../services/ApiService';

const UpdataProfile = ({navigation:{navigate,goBack}}) => {
  const {State, StateDispatch} = useContext(GlobalContext);
  const [editInput, setEditInput] = useState();
  const [image, setImage] = useState('');
  const {dark, user, avatar, token} = State;
  const {email} = user;
  const {DarkBackground, LightBackground, Darktext, LightText} = globalStyle;

  console.log(user,'User');

  const updateHandler = async () => {
    let bodyData;
    let response;
    if (image) bodyData = {...editInput, profilePic: image};
    else bodyData = editInput;
    try {
      response = await API.updateUser(token, bodyData);
      let data = response.data;
      if (data.success === true) {
        goBack();
        if (data.status.nModified > 0) {
          await StateDispatch({
            type: 'UPDATE_PROFILE',
            payload: {...user, ...bodyData},
          });
          navigate('loadingProcress', {
            nav: 'Profile',
            icon: 'user'
          });
        }
        if(data.status.nModified === 0){
          goBack();
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeText = (key, val) => {
    setEditInput({...editInput, [key]: val});
  };

  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const profilePicUpdate = async (source = {}) => {
    const {uri, fileName} = source;
    const response = await fetch(uri);
    const blob = await response.blob();
    const imageExtension = fileName.split('.')[fileName.split('.').length - 1];
    const imageFileName = `${email}.${imageExtension}`;

    let exisitingImage;

    try {
      exisitingImage = await storage.ref(`profile/${imageFileName}`).get();
      if (exisitingImage) {
        const removePic = await storage
          .ref(`profile/${imageFileName}`)
          .delete();
      }
    } catch (err) {}

    if (!exisitingImage) {
      const uploadImage = storage.ref(`profile/${imageFileName}`).put(blob);
      uploadImage.on(
        'state_changed',
        (snapshot) => {},
        (err) => {
          console.log(err);
        },
        () => {
          storage
            .ref(`profile/${imageFileName}`)
            .getDownloadURL()
            .then(async (url) => {
              setImage(url);
            });
        },
      );
    }
  };

  const selectImage = () => {
    let options = {
      title: 'Select Image',
      customButtons: [],
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
        profilePicUpdate(source);
      }
    });
  };

  return (
    <SafeAreaView style={[dark ? DarkBackground : LightBackground]}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 30,
            justifyContent: 'center',
            alignContent: 'space-around',
          }}>
          <TouchableOpacity
            onPress={() => goBack()}
            style={{
              width: 280,
              height: 30,
            }}>
            <FontAwesome5Icon
              name={'times'}
              size={20}
              color={dark ? '#ffffff' : '#000000'}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={updateHandler}>
            <FontAwesome5Icon
              name={'check'}
              size={20}
              color={dark ? '#ffffff' : '#000000'}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'column',
            paddingBottom: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{uri: image !== '' ? image : avatar}}
            style={{width: 130, height: 130, borderRadius: 150 / 2}}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#ffa500',
              top: 10,
              width: 90,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}
            onPress={selectImage}>
            <Text style={{color: '#ffffff'}}>change pic</Text>
          </TouchableOpacity>
        </View>
        {Object.keys(user).map((key, i) => (
          <View
            key={i}
            style={[
              styles.editDetailContainer,
              dark ? DarkBackground : LightBackground,
            ]}>
            <Text
              style={[styles.editDetailHeader, dark ? Darktext : LightText]}>
              {capitalize(key)}
            </Text>
            <TextInput
              style={[
                styles.Input,
                dark ? {borderColor: '#ffffff'} : {borderColor: '#000000'},
                ['regNo', 'department', 'course', 'graduate'].includes(key) ===
                true
                  ? dark
                    ? {borderColor: '#2d2d2d'}
                    : {borderColor: '#ffffff'}
                  : {},
              ]}
              underlineColorAndroid="transparent"
              placeholderTextColor={'#ffffff'}
              autoCapitalize="none"
              editable={
                ['regNo', 'department', 'course', 'graduate'].includes(key) ===
                true
                  ? false
                  : true
              }
              onChangeText={(text) => onChangeText(key, text)}>
              <Text
                style={[styles.editDetailText, dark ? Darktext : LightText]}>
                {user[key] ? user[key] : `Set ${key}`}
              </Text>
            </TextInput>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpdataProfile;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  editDetailContainer: {
    top: 1,
    fontFamily: 'GoogleSans-Bold',
    padding: 20,
    backgroundColor: '#ffffff',
    bottom: 20,
  },
  editDetailHeader: {
    marginLeft: 13,
    fontFamily: 'GoogleSans-Bold',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 3,
  },
  editDetailText: {
    top: 10,
    marginLeft: 10,
    letterSpacing: 3,
    fontFamily: 'GoogleSans-Bold',
    fontSize: 12,
    fontWeight: '600',
  },
  Input: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    letterSpacing: 5,
    marginLeft: 10,
    marginRight: 15,
    height: 50,
    borderBottomWidth: 0.5,
    borderRadius: 5,
  },
});
