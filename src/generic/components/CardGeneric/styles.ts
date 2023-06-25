import { StyleSheet } from 'react-native';
import GLOBALS_STYLES from '../../styles/globals';

const STYLES = StyleSheet.create({
  header: {
    elevation: 1,
    paddingBottom: 0,
  },
  pageTitle: {
    ...GLOBALS_STYLES.pageTitle,
  },
  divider: {
    width: '90%',
    margin: 20,
    marginBottom: 20,
  },
  container: {
    ...GLOBALS_STYLES.container,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  cardContainer: {
    margin: 10,
    borderRadius: 10,
  },
  cardWrapper: {
    padding: 10,
  },
  cardText: {
    textAlign: 'center',
    color: '#555',
    fontSize: 35
  },
});

export default STYLES;
