import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {GlobalContext} from '../../services/GlobalContext';
import {globalStyle} from '../../services/GlobalStyles';

const window = Dimensions.get('window');

const SemeFee = (props) => {
  const {State, StateDispatch} = React.useContext(GlobalContext);
  const {avatar, dark} = State;
  const {DarkBackground, LightBackground, Darktext, LightText} = globalStyle;
  const {height, width} = window;
  const textColor = {
    color: dark ? Darktext.color : LightText.color
}
  return (
    <View
      style={[
        styles.feeInnerContainer,
        dark ? DarkBackground : LightBackground,
      ]}>
      <View
        style={[styles.feesHeader, dark ? DarkBackground : LightBackground]}>
        <Text
          style={{
            letterSpacing: 1,
            color: dark ? Darktext.color : LightText.color,
          }}>
          Semester - {props.semster}
        </Text>
      </View>
      <View
        style={[
          styles.feesTextContainer,
          dark ? DarkBackground : LightBackground,
        ]}>
        <View>
          <Text style={textColor}>
            Fees
          </Text>
        </View>
        <View>
          <Text style={textColor}>
            20000
          </Text>
        </View>
        <View>
          <Text style={textColor}>
            00
          </Text>
        </View>
      </View>

      <View
        style={[
          styles.feesTextContainer,
          dark ? DarkBackground : LightBackground,
        ]}>
        <View>
          <Text style={textColor}>
            Paid
          </Text>
        </View>
        <View>
          <Text style={textColor}>
            15000
          </Text>
        </View>
        <View>
          <Text style={textColor}>
            00
          </Text>
        </View>
      </View>

      <View
        style={[
          styles.feesTextContainer,
          dark ? DarkBackground : LightBackground,
        ]}>
        <View>
          <Text style={textColor}>
            Bal
          </Text>
        </View>
        <View>
          <Text style={textColor}>
            5000
          </Text>
        </View>
        <View>
          <Text style={textColor}>
            00
          </Text>
        </View>
      </View>

      <View
        style={[
          styles.feesTextContainer,
          dark ? DarkBackground : LightBackground,
        ]}>
        <View>
          <Text style={textColor}>
            Fine
          </Text>
        </View>
        <View>
          <Text style={textColor}>
            600
          </Text>
        </View>
        <View>
          <Text style={textColor}>
            00
          </Text>
        </View>
      </View>

      <View
        style={[
          {
            top: 10,
            justifyContent: 'center',
            alignItems: 'flex-end',
            padding: 10,
            borderTopColor: dark ? Darktext.color : LightText.color,
            borderTopWidth: 1,
          },
          dark ? DarkBackground : LightBackground,
        ]}>
        <Text style={textColor}>
          5000
        </Text>
      </View>
    </View>
  );
};

export default SemeFee;

const styles = StyleSheet.create({
  feeInnerContainer: {
    margin: 10,
    padding: 35,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  feesHeader: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  feesFileds: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'space-between',
  },
  feesTextContainer: {
    top: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  feesTextInnerContainer: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
   
});
