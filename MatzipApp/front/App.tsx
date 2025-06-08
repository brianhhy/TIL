import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  Button,
  TextInput,
  SafeAreaView,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthHomeScreen from './src/screens/AuthHomeScreen';
import AuthStackNavigator from './src/navigations/AuthStackNavigator';
import RootNavigator from './src/navigations/root/RootNavigator';




function App(){
  

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});


export default App;
