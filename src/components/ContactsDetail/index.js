import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Icon from '../common/Icon';
import {DEFAULT_IMAGE_URL} from '../../constants/general';
import styles from './style';
import colors from '../../assets/theme/colors';
import {useNavigation} from '@react-navigation/core';
import ImageComponent from './ImageComponent';
import CustomButton from '../common/CustomButton';
import {CREATE_CONTACT} from '../../constants/routeName';
const ContactsDetail = ({contact}) => {
  const {navigate} = useNavigation();

  const {
    country_code,
    first_name,
    last_name,
    phone_number,
    contact_picture,
    is_favorite,
  } = contact;

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {contact_picture && <ImageComponent src={contact_picture} />}
        <View style={styles.content}>
          <Text style={styles.name}>{first_name + ' ' + last_name}</Text>
        </View>
        <View style={styles.hrLine}></View>
        <View style={styles.topCallOption}>
          <TouchableOpacity>
            <Icon
              style={styles.icon}
              name="call"
              type="materialIcon"
              size={30}
            />
            <Text style={styles.textTopOption}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              style={styles.icon}
              name="message"
              type="materialIcon"
              size={30}
            />
            <Text style={styles.textTopOption}>Text</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              style={styles.icon}
              name="videocam"
              type="materialIcon"
              size={30}
            />
            <Text style={styles.textTopOption}>Video</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomOption}>
          <TouchableOpacity style={styles.buttonCall}>
            <Icon
              style={styles.iconCallBottom}
              name="call"
              type="materialIcon"
              size={30}
            />
          </TouchableOpacity>
          <View>
            <Text>{phone_number}</Text>
            <Text>Mobile</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <Icon
                style={styles.icon}
                name="videocam"
                type="materialIcon"
                size={30}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                style={styles.icon}
                name="message"
                type="materialIcon"
                size={30}
              />
            </TouchableOpacity>
          </View>
        </View>
        <CustomButton
          title="Edit Profile"
          primary
          style={{width: 256, alignSelf: 'flex-end'}}
          onPress={() => {
            navigate(CREATE_CONTACT, {contact, editing: true});
          }}
        />
      </View>
    </ScrollView>
  );
};
export default ContactsDetail;
