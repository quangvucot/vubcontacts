import React from 'react';
import {View, Text, Switch, Image, TouchableOpacity} from 'react-native';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import styles from './style';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URL} from '../../constants/general';
import colors from '../../assets/theme/colors';
import ImagePicker from '../common/ImagePicker';
const CreateContactComponent = ({
  loading,
  error,
  onChangeText,
  form,
  onSubmit,
  setForm,
  toggleValueChange,
  sheetRef,
  openSheet,
  closeSheet,
  onFileSelected,
  localFile,
}) => {
  console.log('localFile', localFile);
  return (
    <View style="styles.container">
      <Container>
        <Image
          source={{uri: localFile?.path || DEFAULT_IMAGE_URL}}
          style={styles.imageView}
        />
        <TouchableOpacity onPress={openSheet}>
          <Text style={styles.chooseText}>Choose Image</Text>
        </TouchableOpacity>

        <Input
          lable="First name"
          placeholder="Enter your First Name"
          onChangeText={value => {
            onChangeText({name: 'first_name', value: value});
          }}
          error={error?.first_name?.[0]}
        />
        <Input
          lable="Last name"
          placeholder="Enter your Last Name"
          onChangeText={value => {
            onChangeText({name: 'last_name', value: value});
          }}
          error={error?.last_name?.[0]}
        />
        <Input
          icon={
            <CountryPicker
              withFilter
              withFlag
              withCountryNameButton={false}
              countryCode={form.country_code || undefined}
              withCallingCodeButton
              withCallingCode
              withEmoji
              onSelect={v => {
                const phoneCode = v.callingCode[0];
                const cCode = v.cca2;
                setForm({...form, phoneCode, country_code: cCode});
              }}
            />
          }
          error={error?.country_code?.[0]}
          style={{paddingLeft: 10}}
          iconPosition="left"
          onChangeText={value => {
            onChangeText({name: 'phone_number', value: value});
          }}
          lable="Phone number"
          placeholder="Enter your Phone Number"
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text>Add Your Favorite</Text>
          <Switch
            trackColor={{false: 'blue', true: colors.black}}
            thumbColor={form.is_favorite ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleValueChange}
            value={form.is_favorite}
          />
        </View>
        <CustomButton
          loading={loading}
          disabled={loading}
          onPress={onSubmit}
          primary
          title="Submit"
        />
      </Container>
      <ImagePicker onFileSelected={onFileSelected} ref={sheetRef} />
    </View>
  );
};

export default CreateContactComponent;
