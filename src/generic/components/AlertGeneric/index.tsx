import React from 'react';
import {View} from 'react-native';
import {Text, Icon} from '@rneui/themed';
import STYLES from './styles';
import {CONSTANTS} from '../../../utils/constants';
import {AlertGenericProps} from '../../../utils/types';

const AlertGeneric: React.FunctionComponent<AlertGenericProps> = props => {
  type ObjectKey = keyof typeof STYLES;
  const MESSAGE_TYPE_OBJ = CONSTANTS.MESSAGE_TYPE[props.message];

  const TEXT = MESSAGE_TYPE_OBJ.TEXT as ObjectKey;
  const ICON = MESSAGE_TYPE_OBJ.ICON as ObjectKey;
  const CONTAINER_KEY = MESSAGE_TYPE_OBJ.STYLE as ObjectKey;
  const ICON_COLOR = MESSAGE_TYPE_OBJ.ICON_COLOR;
  const CONTAINER_STYLE = STYLES[CONTAINER_KEY];

  return (
    <View style={CONTAINER_STYLE}>
      <Icon
        name={ICON}
        color={ICON_COLOR}
        type="ionicon"
        textBreakStrategy={'balanced'}
        style={{padding: 5}}
      />
      <Text style={{fontSize: 13,  color: '#222222'}}>{TEXT}</Text>
    </View>
  );
};
export default AlertGeneric;
