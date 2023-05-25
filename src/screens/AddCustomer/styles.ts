import { lightColors } from '@rneui/base';
import {StyleSheet} from 'react-native';

const STYLES = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: lightColors.platform.ios.grey,
    borderRadius:  10,
    color: 'black',
    width: '90%',
    textAlign: 'center',
  },
  disabledInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: lightColors.platform.ios.grey,
    borderRadius:  10,
    backgroundColor: '#e4e4e4',
    color: 'black',
    fontSize: 15,
    width: '90%',
    textAlign: 'center',
  },
});

export default STYLES;
