import React, {createContext, useReducer} from 'react';
import authIntials from './initialsState/authState';
import contactsIntials from './initialsState/contactsIntials';
import auth from './reducers/auth';
import contacts from './reducers/contacts';
export const GlobalContext = createContext({});
const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, authIntials);
  const [contactsState, contactsDispatch] = useReducer(
    contacts,
    contactsIntials,
  );
  return (
    <GlobalContext.Provider
      value={{authState, contactsState, authDispatch, contactsDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
