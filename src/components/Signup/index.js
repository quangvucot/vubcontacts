import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../constants/routeName';
import Message from '../common/Message';

const RegisterComponent = ({
  onSubmit,
  onChange,
  errors,
  form,
  error,
  loading,
}) => {
  const [showPassword, setShowPassword] = useState(true);
  const {navigate} = useNavigation();
  return (
    <Container>
      <View>
        <Text style={styles.title}>Welcome to Vu's Software</Text>
        <Text style={styles.subtitle}>Create new free account</Text>
        <View style={styles.form}>
          {error?.error && (
            <Message
              danger
              retry
              retryFn={() => {
                console.log('2222 => ', 2222);
              }}
              message={error.error}
            />
          )}
          <Input
            lable="First Name"
            iconPosition="right"
            placehoder="Enter First Name"
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
            error={errors.firstName || error?.firstName?.[0]}
          />
          <Input
            lable="Last Name"
            iconPosition="right"
            placehoder="Enter Last Name"
            onChangeText={value => {
              onChange({name: 'lastName', value});
            }}
            error={errors.lastName || error?.lastName?.[0]}
          />
          <Input
            lable="Username"
            iconPosition="right"
            placehoder="Enter Username"
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
            error={errors.userName || error?.userName?.[0]}
          />
          <Input
            lable="Email"
            iconPosition="right"
            placehoder="Enter Email"
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
            error={errors.email}
          />
          <Input
            lable="Password"
            icon={
              <TouchableOpacity
                onPress={() => {
                  showPassword ? setShowPassword(false) : setShowPassword(true);
                  // setShowPassword(prev => !prev);
                }}>
                <Text>{showPassword ? 'Show' : 'Hide'}</Text>
              </TouchableOpacity>
            }
            iconPosition="right"
            secureTextEntry={showPassword}
            placehoder="Enter Password"
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
            error={errors.password || error?.password?.[0]}
          />

          <Input
            lable="Repeat Password"
            icon={<Text>Show</Text>}
            iconPosition="right"
            secureTextEntry={true}
            placehoder="Enter Repeat Password"
            onChangeText={value => {
              onChange({name: 'repeatPassword', value});
            }}
            error={errors.repeatPassword}
          />
          {console.log('error1122', error)}
          <CustomButton
            onPress={onSubmit}
            primary
            title="Submit"
            loading={loading}
            disabled={loading}
          />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already a new account? </Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
