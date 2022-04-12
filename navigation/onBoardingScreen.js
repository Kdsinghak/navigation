import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';

export default function OnBoardingScreen({navigation}) {
  return (
    <View style={styles.cointainer}>
      <ImageBackground
        style={styles.Image}
        source={require('../src/assests/image/homeScreen.jpeg')}
        resizeMode="cover">
        <Text style={styles.text}> Ride. </Text>
        <Text style={styles.quote}>Rent your Vehicles & Earn</Text>
        <Text style={styles.quote}>Some Extra Money</Text>

        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => {
              navigation.navigate('tab');
            }}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  cointainer: {
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 50,
    marginLeft: 20,
    marginTop: 100,
    paddingBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
  Button: {
    flexDirection: 'row-reverse',
    backgroundColor: '#443124',
    padding: 10,
    alignSelf: 'center',
    borderRadius: 5,
  },

  Image: {
    height: 900,
    width: '100%',
  },
  buttonView: {
    flex: 0.8,
    justifyContent: 'flex-end',
  },
  quote: {
    color: 'white',
    marginLeft: 30,
  },
});
