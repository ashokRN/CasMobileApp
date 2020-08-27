import React from 'react';
import {View,Text} from 'react-native';
import { globalStyle } from '../../services/GlobalStyles';

const Title = (props) => {

    const { logoContainer, logoText, StaticColor } = globalStyle;

    return (
      <View style={logoContainer}>
        <Text style={[logoText, StaticColor]}>
          {props.title}
        </Text>
      </View>
    );
  };

  export default Title