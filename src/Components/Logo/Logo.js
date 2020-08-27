import React from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const Logo = (props) => {
  const navigation = useNavigation();
    return (
      <TouchableOpacity  style={props.style} onPress={() => navigation.navigate(props.screen)}>
        <FontAwesome5Icon
          name={props.name}
          size={props.size}
          color={props.color}
        />
      </TouchableOpacity>
    )
  }

export default Logo