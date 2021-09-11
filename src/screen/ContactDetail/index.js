import {useRoute} from '@react-navigation/core';
import React from 'react';
import {View, Text} from 'react-native';
import ContactsDetail from '../../components/ContactsDetail';
const ContactDetail = () => {
  const {params: {item = {}} = {}} = useRoute();
  console.log('item', item);
  return <ContactsDetail contact={item} />;
};
export default ContactDetail;
