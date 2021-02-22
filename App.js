import 'react-native-gesture-handler';
import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import LoginMenu from './screen/LoginMenu';
// import * as firebase from 'firebase';
// import {firebaseConfig} from './config';
// firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome to SULUT360 APP" component={LoginMenu}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}