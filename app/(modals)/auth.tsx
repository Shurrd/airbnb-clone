import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import defaultStyles from '@/constants/styles';
import { Ionicons } from '@expo/vector-icons';

import { useGlobalContext } from '@/context/context';

const Page = () => {
  const { email, password, handleSignUp, setEmail, setPassword }: any =
    useGlobalContext();

  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <View style={defaultStyles.container}>
        <TextInput
          style={defaultStyles.input}
          autoCapitalize='none'
          placeholder='Email'
          placeholderTextColor='#ABABAB'
          keyboardType='email-address'
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={defaultStyles.input}
          autoCapitalize='none'
          placeholder='Password'
          placeholderTextColor='#ABABAB'
          keyboardType='visible-password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={defaultStyles.button} onPress={handleSignUp}>
          <Text style={defaultStyles.buttonText}>Continue</Text>
        </TouchableOpacity>

        <View style={styles.separatorView}>
          <View
            style={{
              height: 1,
              flex: 1,
              backgroundColor: '#ABABAB',
            }}
          ></View>
          <Text>or</Text>
          <View
            style={{
              height: 1,
              flex: 1,
              backgroundColor: '#ABABAB',
            }}
          ></View>
        </View>

        <View style={{ gap: 20 }}>
          <TouchableOpacity style={defaultStyles.buttonOutline}>
            <Ionicons name='call-outline' size={24} />
            <Text style={defaultStyles.buttonOutlineText}>
              Continue with Phone
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={defaultStyles.buttonOutline}>
            <Ionicons name='logo-apple' size={24} />
            <Text style={defaultStyles.buttonOutlineText}>
              Continue with Apple
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={defaultStyles.buttonOutline}>
            <Ionicons name='logo-google' size={24} />
            <Text style={defaultStyles.buttonOutlineText}>
              Continue with Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={defaultStyles.buttonOutline}>
            <Ionicons name='logo-facebook' size={24} />
            <Text style={defaultStyles.buttonOutlineText}>
              Continue with Facebook
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  separatorView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});

export default Page;
