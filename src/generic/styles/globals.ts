import {lightColors} from '@rneui/themed';
import {StyleSheet} from 'react-native';

const GLOBALS_STYLES = StyleSheet.create({
  buttonsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 90,
  },
  container: {
    flex: 1,
    paddingTop: 10,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#F4F4F4',
  },
  cardContainer: {
    backgroundColor: lightColors.disabled,
    borderColor: lightColors.divider,
    borderRadius: 10,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  pageTitle: {
    color: '#222222',
    paddingLeft: 20,
    paddingBottom: 5,
  },
  listItemsContainer: {
    borderRadius:  10,
    width: '95%',
    marginLeft: 10,
    elevation: 1,
  },
  listContentContainer: {
    backgroundColor: lightColors.background,
    borderRadius:  10,
    width: '90%',
    marginLeft: 20,
    top: 0,
  },
});

export default GLOBALS_STYLES;
