import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {GlobalContext} from '../../services/GlobalContext';
import {globalStyle} from '../../services/GlobalStyles';
import Post from '../../Components/Post/Post';
import API from '../../services/ApiService';

const HomePosts = () => {
  const {State, StateDispatch} = useContext(GlobalContext);
  const {avatar, dark, token} = State;

  const {DarkBackground, LightBackground} = globalStyle;

  const [posts, setPosts] = useState();
  const [refreshPost, setRefreshPost] = useState(false);

  const getAllPosts = async () => {
    let reponse;
    try {
      reponse = await API.getAllPosts(token);
      if (reponse) {
        setPosts(reponse.data.posts);
        if(refreshPost === true) {
          setRefreshPost(false)
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, [refreshPost]);

  const postRender = ({item}) => {
    return (
      <Post
        posterImage={item.poster.profilePic}
        posterName={item.poster.name}
        postTime={'4h'}
        urlType={item.mediaType}
        postText={item.postText ? item.postText : null}
        url={item.postMediaUrl}
      />
    );
  };

  return (
    <React.Fragment>
      <FlatList
          data={posts}
          onRefresh={()=> setRefreshPost(true)}
          refreshing={refreshPost}
          renderItem={postRender}
          keyExtractor={(item) => item._id}
        />
    </React.Fragment>
  );
};

export default HomePosts;
