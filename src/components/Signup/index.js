import React from 'react';
import { View, Text, Image } from 'react-native';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { LOGIN } from '../../constants/routeName';


const RegisterComponent = ({ onSubmit, onChange, form, errors }) => {
    const { navigate } = useNavigation();
    return (
        <Container>
            <View >
                <Text style={styles.title}>Welcome to Vu's Software</Text>
                <Text style={styles.subtitle}>Create new free account</Text>
                <View style={styles.form}>
                    <Input lable='First Name'
                        iconPosition='right'
                        placehoder="Enter First Name"
                        onChangeText={(value) => {
                            onChange({ name: "firstName", value })
                        }}
                        error={errors.firstName}
                    />
                    <Input lable='Last Name'
                        iconPosition='right'
                        placehoder="Enter Last Name"
                        onChangeText={(value) => {
                            onChange({ name: "lastName", value })
                        }}
                        error={errors.lastName}
                    />
                    <Input lable='Username'
                        iconPosition='right'
                        placehoder="Enter Username"
                        onChangeText={(value) => {
                            onChange({ name: "userName", value })
                        }}
                        error={errors.userName}
                    />
                    <Input lable='Email'
                        iconPosition='right'
                        placehoder="Enter Email"
                        onChangeText={(value) => {
                            onChange({ name: "email", value })
                        }}
                        error={errors.email}
                    />
                    <Input lable='Password'
                        icon={<Text>Show</Text>}
                        iconPosition='right'
                        secureTextEntry={true}
                        placehoder="Enter Password"
                        onChangeText={(value) => {
                            onChange({ name: "password", value })
                        }}
                        error={errors.password}
                    />

                    <Input lable='Repeat Password'
                        icon={<Text>Show</Text>}
                        iconPosition='right'
                        secureTextEntry={true}
                        placehoder="Enter Repeat Password"
                        onChangeText={(value) => {
                            onChange({ name: "repeatPassword", value })
                        }}
                        error={errors.repeatPassword}
                    />

                    <CustomButton onPress={onSubmit} primary title="Submit" loading={false} disabled={false} />
                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Already a new account? </Text>
                        <TouchableOpacity onPress={() => { navigate(LOGIN); }}>
                            <Text style={styles.linkBtn}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Container>
    )
}

export default RegisterComponent;
