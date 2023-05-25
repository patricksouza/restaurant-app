import {StackActions, useNavigation} from '@react-navigation/native';

function AlertGenericProps() {
  const navigation = useNavigation();

  async function handleNavigationBack() {
    navigation.goBack();
  }

  async function handleNavigationCreate() {
    navigation.dispatch(StackActions.push('Other'));
  }

  return {
    handleNavigationBack,
    handleNavigationCreate,
  };
}

export default AlertGenericProps;
