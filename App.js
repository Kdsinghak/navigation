import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabNavigation from './navigation/TabView/tabNavigation';
import OnBoardingScreen from './navigation/onBoardingScreen';
import RegesteredUserData from './navigation/TabView/regesteredUserData';

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="OnBoardingScreen"
          component={OnBoardingScreen}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="tab"
          component={TabNavigation}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="RegesteredUserData"
          component={RegesteredUserData}
          options={{headerShown: false}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
