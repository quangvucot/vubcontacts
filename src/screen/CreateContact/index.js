import React, {useContext, useRef, useState} from 'react';
import {GlobalContext} from '../../context/Provider';
import CreateContactComponent from '../../components/CreateContactComponent';
import createContacts from '../../context/actions/contacts/createContacts';
import {useNavigation} from '@react-navigation/native';
import {CONTACT_LIST} from '../../constants/routeName';
import uploadImages from '../../helpers/uploadImages';
const CreateContact = () => {
  const [form, setForm] = useState({});
  const [uploading, setUploading] = useState(false);
  const {
    contactsDispatch,
    contactsState: {
      createContacts: {error, loading},
    },
  } = useContext(GlobalContext);
  const [localFile, setLocalFile] = useState(null);
  const sheetRef = useRef(null);
  const {navigate} = useNavigation();
  const onChangeText = ({name, value}) => {
    setForm({...form, [name]: value});
  };
  const onSubmit = () => {
    if (localFile?.size) {
      setUploading(true);
      uploadImages(localFile)(url => {
        setUploading(false);
        console.log('url', url);
        createContacts({...form, contact_picture: url})(contactsDispatch)(
          () => {
            navigate(CONTACT_LIST);
          },
        );
      })(err => {
        console.log('err', err);
        setUploading(false);
      });
    }
    createContacts(form)(contactsDispatch)(() => {
      navigate(CONTACT_LIST);
    });
  };
  console.log('loading: ', loading);
  const toggleValueChange = () => {
    setForm({...form, is_favorite: !form.is_favorite});
  };
  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };
  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };
  const onFileSelected = images => {
    closeSheet();
    setLocalFile(images);
    console.log('image', images);
  };
  return (
    <CreateContactComponent
      onChangeText={onChangeText}
      onSubmit={onSubmit}
      setForm={setForm}
      form={form}
      loading={loading || uploading}
      error={error}
      toggleValueChange={toggleValueChange}
      sheetRef={sheetRef}
      closeSheet={closeSheet}
      openSheet={openSheet}
      onFileSelected={onFileSelected}
      localFile={localFile}
    />
  );
};
export default CreateContact;
