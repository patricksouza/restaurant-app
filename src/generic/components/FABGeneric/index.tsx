import React from 'react';
import {StackActions, useNavigation} from '@react-navigation/native';
import {FAB, lightColors} from '@rneui/themed';
import {FABGenericProps} from '../../../utils/types';

import STYLES from './styles';

const FABGeneric: React.FunctionComponent<FABGenericProps> = props => {
  const navigation = useNavigation();
  async function handleNavigationBack() {
    navigation.goBack();
  }

  async function handleNavigationCreate() {
    navigation.dispatch(StackActions.push('Other'));
  }
  const actionOfProp =
    props.action === 'back' ? handleNavigationBack : handleNavigationCreate;
  const placeOfProp =
    props.place === 'top' ? STYLES.actionButtonTop : STYLES.actionButtonAbove;

  const iconType = props.action === 'back' ? 'return-down-back-outline' : 'add';

  const iconColor =
    props.action === 'back'
      ? lightColors.platform.ios.error
      : lightColors.platform.ios.primary;

  return (
    <FAB
      visible={true}
      placement="right"
      size="large"
      containerStyle={placeOfProp}
      icon={{name: iconType, color: 'white', type: 'ionicon'}}
      color={iconColor}
      onPress={actionOfProp}
    />
  );
};
export default FABGeneric;
