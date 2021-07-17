import React, { useState } from 'react'
import { View, Text } from 'react-native';
import RegisterComponent from '../../components/Signup';

const SignUp = () => {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    const onChange = ({ name, value }) => {
        setForm({form, [name]: value });
        if (value !== '') {
            setErrors((prev) => {
                return { ...prev, [name]: null };
            });
        } else { 
            setErrors((prev) => { 
                return { ...prev, [name]: 'This field is requied' };
            });
        }
    };

    const onSubmit = () => {
        //Validations
        console.log('form :>> ', form);
        if (!form.userName) {
            setErrors((prev) => {
                return { ...prev, userName: "Please Enter Your Username" };
            });
        }
        if (!form.firstName) {
            setErrors((prev) => {
                return { ...prev, firstName: "Please Enter Your First Name" };
            });
        }
        if (!form.lastName) {
            setErrors((prev) => {
                return { ...prev, lastName: "Please Enter Your Last Name" };
            });
        }
        if (!form.password) {
            setErrors((prev) => {
                return { ...prev, password: "Please Enter Your Password" };
            });
        }
        if (!form.repeatPassword) {
            setErrors((prev) => {
                return { ...prev, repeatPassword: "Please Enter Your Password" };
            });
        }
        if (!form.email) {
            setErrors((prev) => {
                return { ...prev, email: "Please Enter Your Email" };
            });
        }

    }
    return (
        < RegisterComponent
            onSubmit={onSubmit}
            onChange={onChange}
            form={form}
            errors={errors} />
    );
}

export default SignUp;
