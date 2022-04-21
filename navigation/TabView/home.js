import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import styles from '../../src/style/homestyle';
import driver from '../../src/assests/driverData';
import locations from '../../src/assests/locations';

const renderItem = ({item}) => {
  return (
    <View style={{flexDirection: 'row', margin: 10}}>
      <Image style={styles.driverImg} source={item.img} />
      <View style={styles.card}>
        <Text>ID :{item.id}</Text>
        <Text>Driver Name:{item.name}</Text>
        <Text>Driver location:{item.location}</Text>
      </View>
    </View>
  );
};

export default function Home() {
  const [modalVisible, setmodalVisible] = useState(false);
  const showLocations = ({item}) => {
    console.log(item.area);
    return (
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => {
            setmodalVisible(!modalVisible);
          }}>
          <View style={styles.loactioncard}>
            <Text>{item.area}</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView style={styles.componentView}>
      <Text style={styles.heading}> Start Your Journey</Text>
      <View style={styles.modalView}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.');
            setmodalVisible(!modalVisible);
          }}>
          <FlatList
            data={locations}
            renderItem={showLocations}
            style={styles.locationcon}
          />
        </Modal>
      </View>

      <TouchableOpacity
        style={styles.location}
        onPress={() => {
          setmodalVisible(!modalVisible);
        }}>
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
