import {ViewStyle, ImageStyle, StyleSheet} from 'react-native';

interface Styles {
  container: ViewStyle;
  logo: ImageStyle;
  visible: ViewStyle;
  invisible: ViewStyle;
}
const STYLES = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    paddingTop: 20,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#F4F4F4',
  },
  logo: {
    marginTop: 5,
    height: 32,
    width: 160,
  },
  visible: {
    display: 'none',
  },
  invisible: {
    display: 'flex',
  },
});

export default STYLES;
