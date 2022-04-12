import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function RegesteredUserData({route, navigation}) {
  const {userName, email, name, mobile} = route.params;
  return (
    <SafeAreaView style={styles.view}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          style={styles.icon}
          source={require('../../src/assests/image/back.png')}
        />
        <Text style={styles.heading}>Details</Text>
      </TouchableOpacity>
      <View style={styles.textView}>
        <Text style={styles.text}>User Name :{userName}</Text>
        <Text style={styles.text}>Name :{name}</Text>
        <Text style={styles.text}>Email:{email}</Text>
        <Text style={styles.text}>Mobile :{mobile}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 2,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#110e0d',
    justifyContent: 'flex-start',
  },
  text: {
    color: 'white',
  },
  icon: {
    height: 30,
    width: 30,
    tintColor: 'white',
    marginLeft: 20,
  },
  textView: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 30,
    marginTop: 50,
    alignSelf: 'center',
  },
});
