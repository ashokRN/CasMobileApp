import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const orange = '#91A1BD';

const Notifications = () => {
  const Neumorph = ({children, size, style}) => {
    return (
      <View style={styles.topShadow}>
        <View style={styles.bottomShadow}>
          <View
            style={[
              styles.inner ,
              {
                width: size || 40,
                height: size || 40,
                borderRadius: size / 2 || 40 / 2,
              },
              style,
            ]}>
            {children}
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={{alignSelf: 'stretch'}}>
        <View style={{marginHorizontal: 32, marginTop: 32}}>
          <View style={styles.topContainer}>
            <Neumorph>
              <FontAwesome5 name={'cog'} size={18} color={'#ffffff'} />
            </Neumorph>

            <View>
              <Text style={styles.playing}>PLAYING NOW</Text> 
            </View>

            <Neumorph>
              <FontAwesome5 name={'ellipsis-h'} size={18} color={'#ffffff'} />
            </Neumorph>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inner: {
    backgroundColor: orange,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E2ECFD',
    borderWidth: 1,
  },
  topShadow: {
    shadowOffset: {
      width: -6,
      height: -6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#FBFFFF',
  },
  bottomShadow: {
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#B7C4DD',
  },
  playing: {
    color: orange,
    fontWeight: '800',
  },
});
