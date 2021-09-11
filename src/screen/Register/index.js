import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {useContext} from 'react/cjs/react.development';
import RegisterComponent from '../../components/Signup';
import {LOGIN} from '../../constants/routeName';
import register, {clearAuthState} from '../../context/actions/auth/register';
import {GlobalContext} from '../../context/Provider';
const SignUp = () => {
  const [form, setForm] = useState({});
  const {navigate} = useNavigation();
  const [errors, setErrors] = useState({});

  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data, error]),
  );

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {...prev, [name]: 'This field needs min 6 characters'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is requied'};
      });
    }
  };
  const onSubmit = () => {
    //Validations
    // console.log('form :>> ', form);
    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'Please Enter Your Username'};
      });
    }
    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Please Enter Your First Name'};
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Please Enter Your Last Name'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please Enter Your Password'};
      });
    }
    if (!form.repeatPassword) {
      setErrors(prev => {
        return {...prev, repeatPassword: 'Please Enter Your Password'};
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please Enter Your Email'};
      });
    }

    if (
      Object.values(form).length === 6 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      register(form)(authDispatch)(response => {
        navigate(LOGIN, {data: response});
      });
    }
  };
  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  );
};

export default SignUp;
