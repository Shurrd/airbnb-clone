import { StyleSheet } from 'react-native';
import Colors from './Colors';

const defaultStyles = StyleSheet.create({
  container: {
    padding: 28,
    backgroundColor: 'white',
    flex: 1,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#ABABAB',
    display: 'flex',
    gap: 28,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ABABAB',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fff',
    height: 44,
    fontSize: 14,
  },
  button: {
    backgroundColor: Colors.primary,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'mon-sb',
    fontSize: 16,
  },
  buttonOutline: {
    height: 48,
    display: 'flex',
    flexDirection: 'row',
    borderColor: '#ABABAB',
    borderWidth: 1,
    alignItems: 'center',
    paddingHorizontal: 14,
    gap: 48,
    borderRadius: 8,
  },
  buttonOutlineText: {
    fontFamily: 'mon-sb',
    fontSize: 18,
  },
  buttonOutlineIcon: {},
});

export default defaultStyles;
