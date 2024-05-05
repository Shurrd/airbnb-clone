import { View, TextInput } from 'react-native';
import React from 'react';
import defaultStyles from '@/constants/styles';
import { InputFieldProps } from '@/types/types';

const InputField = ({
  placeholder,
  keyboardType,
  value,
  onChangeText,
  secureTextEntry,
}: InputFieldProps) => {
  return (
    <View>
      <TextInput
        style={defaultStyles.input}
        autoCapitalize='none'
        placeholder={placeholder}
        placeholderTextColor='#ABABAB'
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default InputField;
