import React from 'react';
import {StyleSheet, View, Button, SafeAreaView} from 'react-native';
import { SafeAreaFrameContext } from 'react-native-safe-area-context';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import {AuthStackParamList} from '../navigations/AuthStackNavigator';
import { authNavigations } from '../constants';

type AuthHomeScreenProps = StackScreenProps<AuthStackParamList, typeof authNavigations.AuthHome>;

function AuthHomeScreen({navigation} : AuthHomeScreenProps) {
  return (
    <SafeAreaView>
        <View>
            <Button title="로그인 화면으로 이동" onPress={() => navigation.navigate(authNavigations.Login)} />
        </View>
    </SafeAreaView>
  )
}

export default AuthHomeScreen;