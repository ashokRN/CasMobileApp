import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const sampleData = [
  {
    _id: '09097',
    name: 'Elecity',
    total: 54000,
    Avg: '59',
    color: '#ffa500',
  },
  {
    _id: '02767',
    name: 'Normal',
    total: 64000,
    Avg: '79',
    color: 'green',
  },
  {
    _id: '08797',
    name: 'Koji',
    total: 4000,
    Avg: '69',
    color: '#00a1aa',
  },
  {
    _id: '09797',
    name: 'Kogggpji',
    total: 4000,
    Avg: '69',
    color: 'blue',
  },
  {
    _id: '29797',
    name: 'KojFio_rio',
    total: 7000,
    Avg: '09',
    color: 'red',
  },
];

const homeList = () => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          width: 170,
          height: 50,
          backgroundColor: item.color,
          margin: 5,
          elevation: 2.5,
          borderRadius: 10,
        }}
        onPress={() => console.log(item)}>
        <View
          style={{
            flex: 1,
            // padding: 15,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View>
            <Text
              style={{
                color: '#000',
                fontSize: 13,
                fontWeight: 'bold',
              }}>
              {item.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={sampleData}
      renderItem={renderItem}
      keyExtractor={(item) => `${item._id}`}
      numColumns={2}
      key={(item) => `${item._id}`}
    />
  );
};

const listData = () => {
  const listRender = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: item.color,
          height: 80,
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 10,
          marginHorizontal: 5,
          borderRadius: 10,
          elevation: 9,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
          <Text style={{color: '#000', fontSize: 13, fontWeight: 'bold'}}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={sampleData}
      renderItem={listRender}
      keyExtractor={(item) => `${item._id}`}
    />
  );
};

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10,
      }}>
      {homeList()}
      {listData()}
    </View>
  );
};

export default HomeScreen;
