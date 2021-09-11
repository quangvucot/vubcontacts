import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, Settings} from 'react-native';
import {
  CONTACT_DETAL,
  CONTACT_LIST,
  CREATE_CONTACT,
  LOGOUT,
  SETTING,
} from '../constants/routeName';
import Contacts from '../screen/Contacts';
import ContactDetail from '../screen/ContactDetail';
import CreateContact from '../screen/CreateContact';
import Setting from '../screen/Setting';
import Logout from '../screen/Logout';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator
      initialRouteName={CONTACT_LIST}
      screenOptions={{headerTitleAlign: 'center'}}>
      <HomeStack.Screen
        name={CONTACT_LIST}
        component={Contacts}></HomeStack.Screen>
      <HomeStack.Screen
        name={CONTACT_DETAL}
        component={ContactDetail}></HomeStack.Screen>
      <HomeStack.Screen
        name={CREATE_CONTACT}
        component={CreateContact}></HomeStack.Screen>
      <HomeStack.Screen name={SETTING} component={Setting}></HomeStack.Screen>
      <HomeStack.Screen name={LOGOUT} component={Logout}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};
export default HomeNavigator;
