import { lightColors } from '@rneui/base';
import { StyleSheet } from 'react-native';

const STYLES = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderColor: lightColors.platform.ios.grey,
    color: 'black',
    width: '85%',
    textAlign: 'center',
    backgroundColor: '#FFF',
  },
  disabledInput: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderColor: lightColors.platform.ios.grey,
    backgroundColor: '#e4e4e4',
    color: 'black',
    fontSize: 15,
    width: '85%',
    textAlign: 'center',
  },
  header: {
    elevation: 1,
    paddingBottom: 0,
  },
  divider: {
    width: '90%',
    margin: 20,
    marginBottom: 0,
  },
});

export default STYLES;
