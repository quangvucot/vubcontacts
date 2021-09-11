import {useNavigation} from '@react-navigation/native';
import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import Icon from '../../components/common/Icon';
import ContactsComponents from '../../components/ContactsComponents';
import {GlobalContext} from '../../context/Provider';
import getContacts from '../../context/actions/contacts/getContacts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CONTACT_DETAL} from '../../constants/routeName';
const Contacts = ({navigation}) => {
  const {setOptions, toggleDrawer} = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState(null);
  const contactsRef = useRef();
  const {
    contactsDispatch,
    contactsState: {
      getContacts: {data, loading},
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    getContacts()(contactsDispatch);
  }, []);

  React.useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}>
          <Icon
            style={{padding: 10}}
            type="materialIcon"
            size={25}
            name="menu"
          />
          {/* <Text style={{padding: 10}}>Menu</Text> */}
        </TouchableOpacity>
      ),
    });
  }, []);

  console.log('sortBy', sortBy);
  const getSettings = async () => {
    const sortPref = await AsyncStorage.getItem('sortBy');
    if (sortPref) {
      setSortBy(sortPref);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      getSettings();
      return () => {};
    }, []),
  );
  useEffect(() => {
    const prev = contactsRef.current;
    contactsRef.current = data;
    const newList = contactsRef.current;

    if (newList.length - prev.length === 1) {
      const newContacts = newList.find(
        item => !prev.map(i => i.id).include(item),
      );
      navigate(CONTACT_DETAL, {item: newContacts});
    }
  }, [data.length]);
  return (
    <ContactsComponents
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      loading={loading}
      data={data}
      sortBy={sortBy}
    />
  );
};
export default Contacts;
