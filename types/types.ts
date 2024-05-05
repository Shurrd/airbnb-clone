import { Dispatch, SetStateAction } from 'react';
import { KeyboardTypeOptions } from 'react-native';

export interface GlobalContext {
  email?: string;
  password?: string;
  setEmail?: React.Dispatch<React.SetStateAction<string>>;
  setPassword?: React.Dispatch<React.SetStateAction<string>>;
  handleEmailAuth?: () => void;
}

export interface InputFieldProps {
  placeholder: string;
  keyboardType: KeyboardTypeOptions | undefined;
  value: string | undefined;
  onChangeText: Dispatch<SetStateAction<string>> | undefined;
  secureTextEntry?: boolean;
}

export interface ButtonProps {
  text: string;
  onPress?: () => void;
}
