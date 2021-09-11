import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import colors from '../../assets/theme/colors';
import AppModal from '../common/AppModal';
import CustomButton from '../common/CustomButton';
import Icon from '../common/Icon';
import Message from '../common/Message';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {CONTACT_DETAL, CREATE_CONTACT} from '../../constants/routeName';
const ContactsComponents = ({sortBy, data, loading, setModalVisible}) => {
  const {navigate} = useNavigation();
  const ListEmptyComponent = () => {
    return (
      <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
        <Message info message="No contacts to show" />
      </View>
    );
  };
  const renderItem = ({item}) => {
    const {contact_picture, phone_number, first_name, last_name} = item;
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => {
          navigate(CONTACT_DETAL, {item});
        }}>
        <View style={styles.item}>
          {contact_picture ? (
            <Image
              style={{height: 45, width: 45, borderRadius: 25}}
              source={{uri: contact_picture}}
            />
          ) : (
            <View
              style={{
                height: 45,
                width: 45,
                backgroundColor: colors.gray,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>{first_name[0]}</Text>
              <Text>{last_name[0]}</Text>
            </View>
          )}
          <View style={{paddingLeft: 20}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.name}>{first_name}</Text>
              <Text style={styles.name}> {last_name}</Text>
            </View>
            <Text style={styles.phoneNumber}>VN {phone_number}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Icon name="arrow-right" type="materialIcon" size={25} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View style={{backgroundColor: colors.white}}>
        {loading && (
          <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
            <ActivityIndicator color={colors.primary} size="large" />
          </View>
        )}
        {!loading && (
          <View style={{paddingVertical: 20}}>
            <FlatList
              renderItem={renderItem}
              data={
                sortBy
                  ? data.sort((a, b) => {
                      if (sortBy === 'FirstName') {
                        if (b.first_name > a.first_name) {
                          return -1;
                        } else {
                          return 1;
                        }
                      }
                      if (sortBy === 'LastName') {
                        if (b.last_name > a.last_name) {
                          return -1;
                        } else {
                          return 1;
                        }
                      }
                    })
                  : data
              }
              keyExtractor={item => String(item.id)}
              ItemSeparatorComponent={() => (
                <View
                  style={{height: 0.5, backgroundColor: colors.gray}}></View>
              )}
              ListEmptyComponent={ListEmptyComponent}
              ListFooterComponent={<View style={{height: 50}}></View>}
            />
          </View>
        )}
      </View>
      <TouchableOpacity
        style={styles.floatingActionButton}
        onPress={() => {
          navigate(CREATE_CONTACT);
        }}>
        <Icon name="add" type="materialIcon" color={colors.white} size={25} />
      </TouchableOpacity>
    </>
  );
};

export default ContactsComponents;
