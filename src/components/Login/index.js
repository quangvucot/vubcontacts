import React from 'react';
import { View, Text, Image } from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import logoImage from '../../assets/images/logo.png'
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { REGISTER } from '../../constants/routeName';

const LoginComponent = () => {
    const { navigate } = useNavigation();
    return (
        <Container>
            <Image style={styles.logo} height={80} width={80} source={logoImage} />
            <View >
                <Text style={styles.title}>Welcome to Vu's Software</Text>
                <Text style={styles.subtitle}>Please login here</Text>
                <View style={styles.form}>
                    <Input lable='Username'
                        iconPosition='right'
                        placehoder="Enter Username"
                    />
                    <Input lable='Password'
                        icon={<Text>Show</Text>}
                        iconPosition='right'
                        secureTextEntry={true}
                        placehoder="Enter Password"
                    />
                    <CustomButton primary title="Submit" loading={false} disabled={false} />
                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>We need a new account? </Text>
                        <TouchableOpacity onPress={() => { navigate(REGISTER); }}>
                            <Text style={styles.linkBtn}>Regisrer</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Container>
    )
}

export default LoginComponent;
