import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import driver from '../../src/assests/driverData';

import locations from '../../src/assests/locations';

const renderItem = ({item}) => {
  return (
    <View style={{flexDirection: 'row', margin: 10}}>
      <Image style={styles.driverImg} source={item.img} />
      <View
        style={{
          textAlign: 'center',
          backgroundColor: '#CDC7C4',
          marginLeft: 30,
          width: '75%',

          padding: 10,
          borderRadius: 10,
          shadowColor: '#CDC7C4',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.3,
          shadowRadius: 3.65,

          elevation: 5,
        }}>
        <Text>ID :{item.id}</Text>
        <Text>Driver Name:{item.name}</Text>
        <Text>Driver location:{item.location}</Text>
      </View>
    </View>
  );
};

export default function Home() {
  return (
    <SafeAreaView style={styles.componentView}>
      <Text style={styles.heading}> Start Your Journey</Text>
      <TouchableOpacity style={styles.location}>
        <Image
          style={styles.image}
          source={require('../../src/assests/image/my-location.png')}
        />
        <Text>Choose Pickup Point </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.destination}>
        <Image
          style={styles.image}
          source={require('../../src/assests/image/destination.png')}
        />
        <Text>Choose Destination</Text>
      </TouchableOpacity>
      <View style={styles.view2}>
        <Text style={styles.heading}>Near By Riders</Text>
        <Text>see all</Text>
      </View>

      <FlatList
        data={driver}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  componentView: {
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    height: 30,
    width: 30,
    margin: 10,
    tintColor: '#443124',
  },
  location: {
    flexDirection: 'row',
    margin: 30,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
  },
  destination: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginLeft: 30,
    marginRight: 30,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
  },
  view2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  driverImg: {
    height: 40,
    width: 40,
  },
});
