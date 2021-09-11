import React from 'react';
import {
  Image,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Container from '../../components/common/Container';
import {SETTING} from '../../constants/routeName';
import logoutUser from '../../context/actions/auth/logoutUser';
import styles from './style';
import Icon from '../../components/common/Icon';

const SideMenu = ({navigation, authDispatch}) => {
  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert('Logout', 'Are you sure to logout?', [
      {text: 'Cancel', onPress: () => {}},
      {
        text: 'OK',
        onPress: () => {
          logoutUser()(authDispatch);
        },
      },
    ]);
  };
  const menuItems = [
    {
      icon: <Icon type="materialIcon" size={21} name="settings" />,
      name: 'Setting',
      onPress: () => {
        navigation.navigate(SETTING);
      },
    },
    {
      icon: <Icon type="materialIcon" size={21} name="logout" />,
      name: 'Logout',
      onPress: handleLogout,
    },
  ];
  return (
    <SafeAreaView>
      <Container>
        <View style={styles.logo} />
        <View style={{paddingHorizontal: 60}}>
          {menuItems.map(({name, icon, onPress}) => (
            <TouchableOpacity onPress={onPress} key={name} style={styles.item}>
              {icon}
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default SideMenu;
