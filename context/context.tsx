'use client';

import React, { FormEvent, ReactNode, useContext, useState } from 'react';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

import { auth } from '@/lib/firebase';

const AppContext = React.createContext({});

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  //   Handle Sign Up

  const handleEmailAuth = async () => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    console.log({ res });
  };

  // Handle Sign In

  return (
    <AppContext.Provider
      value={{
        email,
        password,
        setEmail,
        setPassword,
        handleEmailAuth,
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
