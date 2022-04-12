import React, {useEffect, useState} from 'react';

import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  console.log(navigation);

  return (
    <View style={[styles.view]}>
      <Text
        onPress={() =>
          navigation.navigate(
            'Details',
            /* 1. Navigate to the Details route with params */
            {userId: 'AZ12', Name: 'kd'},
          )
        }>
        Click to go Details
      </Text>
    </View>
  );
}

function DetailsScreen({route, navigation}) {
  const {userId, Name} = route.params;
  // useEffect(() => {
  //   if (route.params?.post) {
  // Post updated, do something with `route.params.post`
  // For example, send the post to the server
  //   }
  // }, [route.params?.post]);

  console.log('route', route);
  return (
    <View style={[styles.view, styles.details]}>
      <Text>user Details ↓ </Text>
      <Text>User-ID: - {userId}</Text>
      <Text>Name :- {Name}</Text>

      <Text
        onPress={() => navigation.setParams({userId: 'Abc12', Name: '213312'})}>
        click to update userId and Name ↑
      </Text>
      <Text
        onPress={() => {
          navigation.navigate('Services', {
            services: 'this is services',
          });
        }}>
        Click to go Services
      </Text>
      <Text
        onPress={() => {
          navigation.goBack();
        }}>
        click to Go back
      </Text>
      <Text>this data is recived from services screen ↓ </Text>
      <Text>Post :{route.params?.post}</Text>
      <Text>id :{route.params?.id}</Text>
    </View>
  );
}

function Services({route, navigation}) {
  // console.log(navigation);
  const {services} = route.params;
  const [postText, setPostText] = useState('');

  return (
    <View style={[styles.view, styles.services]}>
      <Text>{services}</Text>

      <TextInput
        placeholder="hello"
        style={{backgroundColor: 'white', padding: 10, width: '70%'}}
        value={postText}
        onChangeText={setPostText}
      />
      <Text
        onPress={() => {
          navigation.navigate({
            name: 'Details',
            params: {post: postText, id: 'service@12'},
          });
        }}>
        click to Go back
      </Text>
      <Text
        onPress={() => {
          navigation.popToTop();
        }}>
        click to go Home
      </Text>
      <Text
        onPress={() => {
          navigation.push('Services', {services});
        }}>
        Click to go inside services
      </Text>
    </View>
  );
}

// function LogoTitle() {
//   return (
//     <Image
//       style={styles.Image}
//       source={require('./src/assests/image/back.png')}
//     />
//   );
// }

const Stack = createNativeStackNavigator();
console.log(Stack);
function App() {
  const {Navigator, Screen} = Stack;
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: '#1a0000',
            },
            headerTintColor: 'white',
            headerShown: false,
          }}
        />
        <Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: 'Details',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'white',
            headerBackVisible: false,
            headerTransparent: true,
            headerShown: false,
            // headerBackImageSource: () => <LogoTitle />,
            // headerTitle: props => <LogoTitle {...props} />,
          }}
          initialParams={{id: 'service 2'}}
        />
        <Screen
          name="Services"
          component={Services}
          options={{
            title: 'Services',
            headerStyle: {
              backgroundColor: '#001a1a',
            },
            headerTintColor: 'white',
            headerBackVisible: false,
            headerShown: false,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  details: {
    backgroundColor: 'yellow',
  },
  services: {
    backgroundColor: 'aqua',
  },

  Image: {
    height: 20,
    width: 20,
  },
});
