'use client';

import React, { FormEvent, useContext, useState } from 'react';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

import { auth } from '@/lib/firebase';

const AppContext = React.createContext({});

const AppProvider = ({ children }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //   Handle Sign Up

  const handleSignUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log({ res });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        email,
        password,
        setEmail,
        setPassword,
        handleSignUp,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
