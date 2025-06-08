import React from 'react';
import {StyleSheet} from 'react-native';
import AuthHomeScreen from '../screens/AuthHomeScreen';
import LoginScreen from '../screens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import {authNavigations} from '../constants';


export type AuthStackParamList = {
    [authNavigations.AuthHome]: undefined;
    [authNavigations.Login]: undefined;
}

function AuthStackNavigator() {
  const Stack = createStackNavigator<AuthStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen name={authNavigations.AuthHome} component={AuthHomeScreen} />
      <Stack.Screen name={authNavigations.Login} component={LoginScreen} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({});

export default AuthStackNavigator;