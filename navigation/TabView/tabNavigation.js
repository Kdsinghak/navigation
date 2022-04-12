import React, {useState} from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './home';
import Feed from './feed';
import Map from './map';
import Profile from './profile';

const Tab = createBottomTabNavigator();

export default function TabNavigation({navigation}) {
  const [registeredUser, setregisteredUser] = useState({
    userName: 'cdsc',
    email: 'dcewdwe',
    name: 'dcwcdcc',
    mobile: '43578867653',
  });
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#060606'},
        // tabBarActiveTintColor: 'yellow',
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: '#4e331d',
      }}>
      <Tab.Screen
        name=" "
        component={Home}
        options={{
          // headerShown: false,
          // tabBarShowLabel: false,
          headerLeft: () => {
            return (
              <TouchableOpacity>
                <Image
                  style={{height: 20, width: 20, marginLeft: 10}}
                  source={require('../../src/assests/image/menu.png')}
                />
              </TouchableOpacity>
            );
          },
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('RegesteredUserData', registeredUser);
                }}>
                <Image
                  style={{height: 30, width: 30, marginRight: 20}}
                  source={require('../../src/assests/image/man.png')}
                />
              </TouchableOpacity>
            );
          },
          tabBarIcon: () => {
            return (
              <Image
                style={styles.image}
                source={require('../../src/assests/image/home.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <Image
                style={styles.image}
                source={require('../../src/assests/image/user.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <Image
                style={styles.image}
                source={require('../../src/assests/image/compass.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="feed"
        component={Feed}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <Image
                style={styles.image}
                source={require('../../src/assests/image/love.png')}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 20,
    width: 20,
    tintColor: 'white',
  },
});
