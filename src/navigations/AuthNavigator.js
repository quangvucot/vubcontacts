import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LOGIN, REGISTER} from '../constants/routeName';
import SignUp from '../screen/Register';
import SignIn from '../screen/Login/index';

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={LOGIN} component={SignIn}></AuthStack.Screen>
      <AuthStack.Screen name={REGISTER} component={SignUp}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};
export default AuthNavigator;
