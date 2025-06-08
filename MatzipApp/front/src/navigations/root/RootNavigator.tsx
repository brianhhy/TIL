import React from 'react';
import AuthStackNavigator from '../AuthStackNavigator';
import MainDrawerNavigator from '../drawer/MainDrawerNavigator';

function RootNavigator(){
    const isLoggedIn = true;

    return <>{isLoggedIn ? <MainDrawerNavigator /> : <AuthStackNavigator />}</>;
}
export default RootNavigator;