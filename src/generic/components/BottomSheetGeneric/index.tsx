import React, {useEffect, useState} from 'react';
import {Icon, ListItem, CheckBox} from '@rneui/themed';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {BottomSheetGenericProps} from '../../../utils/types';
import {BottomSheet} from '@rneui/base';

const BottomSheetGeneric: React.FunctionComponent<
  BottomSheetGenericProps
> = props => {
  const [isVisible, setIsVisible] = useState(false);
  const list = [
    {
      title: 'Desocupada',
      titleStyle: {color: 'black', marginLeft: 10},
      containerStyle: {
        borderTopStartRadius: 15,
        borderTopEndRadius: 15,
        paddingTop: 5,
        paddingBottom: 0,
      },
    },
    {
      title: 'Ocupada',
      titleStyle: {color: 'black', marginLeft: 10, paddingBottom: 0},
    },
    {
      title: 'Mostrar tudo',
      titleStyle: {color: 'black', marginLeft: 10, paddingBottom: 0},
    },
  ];

  const [checks, setChecks] = useState([false, false, true]);

  useEffect(() => {
    if (props.openBottomSheet) {
      setIsVisible(props.openBottomSheet);
    }
  }, [props, isVisible]);

  function handleChecks(index: number) {
    setChecks(checks.fill(false));
    let newCheckArray = [...checks];
    newCheckArray[index] = !checks[index];
    setChecks(newCheckArray);
    setIsVisible(false);
    props.getChecks(newCheckArray);
  }

  return (
    <SafeAreaProvider>
      <BottomSheet
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(false)}>
        {list.map((element, index) => (
          <ListItem key={index} containerStyle={element.containerStyle}>
            <ListItem.Content>
              <ListItem.Title style={element.titleStyle}>
                {element.title}
              </ListItem.Title>
            </ListItem.Content>
            <CheckBox
              center
              checkedIcon={
                <Icon
                  name="radio-button-checked"
                  type="material"
                  color="grey"
                  size={25}
                  iconStyle={{marginRight: 10}}
                />
              }
              uncheckedIcon={
                <Icon
                  name="radio-button-unchecked"
                  type="material"
                  color="grey"
                  size={25}
                  iconStyle={{marginRight: 10}}
                />
              }
              checked={checks[index]}
              onPress={() => {
                handleChecks(index);
              }}
            />
          </ListItem>
        ))}
      </BottomSheet>
    </SafeAreaProvider>
  );
};

export default BottomSheetGeneric;
