import React, {useState, useRef, useEffect} from 'react';
import {View, Text, Animated, Easing, TouchableOpacity} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const LoadingProgress = ({navigation, route}) => {
  const postButton = useRef(new Animated.Value(0)).current;
  const rotate = useRef(new Animated.Value(0)).current;
  const [rotateAnime, setRotateAnime] = useState(false);

  useEffect(() => {
    setTimeout(() => startShake(), 500);
  }, [rotateAnime]);

  const startShake = () => {
    Animated.sequence([
      Animated.timing(rotate, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(rotate, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(rotate, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(rotate, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setTimeout(() => animation(), 200);
    });
  };

  const animation = () => {
    Animated.timing(postButton, {
      toValue: 1,
      tension: 10,
      friction: 1,
      duration: 100,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start(() => {
      setTimeout(() => {
        if (route.params.nav === 'home') {
          navigation.navigate('home', {screen: 'Home'});
        }
        if(route.params.nav === 'Profile'){
          navigation.navigate('home', {screen: 'Profile',initial: true});
        }
      }, 1000);
    });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffa500',
      }}>
      <TouchableOpacity
        style={{
          width: 150,
          height: 150,
          backgroundColor: '#ffffff',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 150 / 2,
        }}>
        <Animated.View
          style={{
            transform: [
              {
                translateX: rotate,
              },
            ],
          }}>
          <Animated.View
            style={{
              transform: [
                {
                  translateY: postButton.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -80],
                  }),
                },
              ],
            }}>
            <Animated.View
              style={{
                transform: [
                  {
                    translateX: postButton.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 80],
                    }),
                  },
                ],
              }}>
              <Text style={{color: '#ffa500'}}>
                <FontAwesome5Icon name={route.params.icon} size={50} />
              </Text>
            </Animated.View>
          </Animated.View>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default LoadingProgress;
