import { initializeApp, getApp } from 'firebase/app';
import {
  initializeAuth,
  getAuth,
  getReactNativePersistence,
} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyApCC4N-jkpyNdDpKbspmJg7oN_6-0Lku8',
  authDomain: 'airbnb-e2556.firebaseapp.com',
  projectId: 'airbnb-e2556',
  storageBucket: 'airbnb-e2556.appspot.com',
  messagingSenderId: '1052068934228',
  appId: '1:1052068934228:web:81595d8d92a5da572cb3c1',
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { auth };
