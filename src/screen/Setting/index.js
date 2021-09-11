import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import SettingsComponent from '../../components/SettingsComponent';

const Setting = () => {
  const [email, setEmail] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState(null);

  const saveSetting = (key, value) => {
    AsyncStorage.setItem(key, value);
  };
  const settingOption = [
    {title: 'My info', subTitle: 'Setup your profile', onPress: () => {}},
    {title: 'Account', onPress: () => {}},
    {
      title: 'Default account for new contacts',
      subTitle: email,
      onPress: () => {},
    },
    {
      title: 'Contacts display',
      subTitle: 'All Contacts',
      onPress: () => {},
    },
    {
      title: 'Sort By',
      subTitle: sortBy,
      onPress: () => {
        setModalVisible(true);
      },
    },
    {
      title: 'Name format',
      subTitle: 'First Name first',
      onPress: () => {},
    },
    {
      title: 'Import',
      subTitle: '',
      onPress: () => {},
    },
  ];
  const prefArr = [
    {
      name: 'First Name',
      selected: sortBy === 'First Name',
      onPress: () => {
        saveSetting('sortBy', 'FirstName');
        setSortBy('First Name');
        setModalVisible(false);
      },
    },
    {
      name: 'Last Name',
      selected: sortBy === 'Last Name',
      onPress: () => {
        saveSetting('sortBy', 'LastName');
        setSortBy('Last Name');
        setModalVisible(false);
      },
    },
  ];
  const getSettings = async () => {
    const user = await AsyncStorage.getItem('user');
    setEmail(JSON.parse(user).email);
    const sortPref = await AsyncStorage.getItem('sortBy');
    if (sortPref) {
      setSortBy(sortPref);
    }
  };
  useEffect(() => {
    getSettings();
  }, []);
  return (
    <SettingsComponent
      settingsOption={settingOption}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      prefArr={prefArr}
    />
  );
};
export default Setting;
