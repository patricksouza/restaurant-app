import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Header as HeaderRNE, Image, Icon} from '@rneui/themed';
import STYLES from './styles';
import BottomSheetGeneric from '../BottomSheetGeneric';
import {Button} from '@rneui/base';
import {HeaderGenericProps} from '../../../utils/types';

const logoImage = require('../../../assets/images/logo.png');

const HeaderGeneric: React.FunctionComponent<HeaderGenericProps> = props => {
  const [openSheet, setOpenSheet] = useState(false);
  const [isVisible, setIsVisible] = useState(STYLES.visible);

  useEffect(() => {
    setOpenSheet(false);
    if (props.isVisible) {
      setIsVisible(STYLES.invisible);
    }
  });

  const callback = (checks: any | undefined) => {
    props.getChecks(checks);
  };

  return (
    <>
      <View style={{paddingBottom: 20}}>
        <HeaderRNE
          backgroundColor="#FC4B56"
          containerStyle={{}}
          leftComponent={
            <View>
              <Image
                style={STYLES.logo}
                source={logoImage}
                resizeMode={'cover'}
              />
            </View>
          }
          rightComponent={
            <View style={{...isVisible}}>
              <TouchableOpacity>
                <Button
                  buttonStyle={{backgroundColor: 'transparent'}}
                  onPress={() => {
                    setOpenSheet(!openSheet);
                  }}>
                  <Icon
                    name="filter"
                    color="white"
                    type="ionicon"
                    style={{marginBottom: 0}}
                  />
                </Button>
              </TouchableOpacity>
            </View>
          }
        />
      </View>
      <BottomSheetGeneric openBottomSheet={openSheet} getChecks={callback} />
    </>
  );
};

export default HeaderGeneric;
