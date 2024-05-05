import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import defaultStyles from '@/constants/styles';
import { ButtonProps } from '@/types/types';

const Button = ({ text, onPress }: ButtonProps) => {
  return (
    <View>
      <TouchableOpacity style={defaultStyles.button} onPress={onPress}>
        <Text style={defaultStyles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
