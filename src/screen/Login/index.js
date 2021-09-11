import {useRoute} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import LoginComponent from '../../components/Login';
import login from '../../context/actions/auth/login';
import {GlobalContext} from '../../context/Provider';

const SignIn = () => {
  const [form, setForm] = useState({});
  const {params} = useRoute();
  const [justSignedUp, setJustSignedUp] = useState(false);
  useEffect(() => {
    if (params?.data) {
      setJustSignedUp(true);
      console.log('Params', params);
      setForm({...form, userName: params.data.username});
    }
  }, [params]);
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);
  const onSubmit = () => {
    if (form.userName && form.password) {
      login(form)(authDispatch);
    }
  };
  const onChange = ({name, value}) => {
    setJustSignedUp(false);
    setForm({...form, [name]: value});
  };
  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      error={error}
      loading={loading}
      justSignedUp={justSignedUp}
    />
  );
};

export default SignIn;
