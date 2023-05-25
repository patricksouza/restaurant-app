import React, {useEffect, useState} from 'react';
import {Text, lightColors, Card, Divider} from '@rneui/themed';
import HeaderGeneric from '../../generic/components/HeaderGeneric';
import GLOBALS_STYLES from '../../generic/styles/globals';
import {View} from 'react-native';
import {Row, Col, Grid} from 'react-native-easy-grid';
import CardGeneric from '../../generic/components/CardGeneric';

function CentralScreen() {
  const [quantityTablesFilter, setQuantityTablesFilter] = useState(0);

  let list = [
    {
      id: 1,
      title: 'Mesa 1',
      icon: 'people',
      color: lightColors.platform.ios.error,
      state: 'DISABLED',
    },
    {
      id: 2,
      title: 'Mesa 2',
      icon: 'people',
      color: lightColors.platform.ios.success,
      state: 'ENABLED',
    },
    {
      id: 3,
      title: 'Mesa 3',
      icon: 'people',
      color: lightColors.platform.ios.error,
      state: 'DISABLED',
    },
    {
      id: 4,
      title: 'Mesa 4',
      icon: 'people',
      color: lightColors.platform.ios.success,
      state: 'ENABLED',
    },
    {
      id: 5,
      title: 'Mesa 5',
      icon: 'people',
      color: lightColors.platform.ios.success,
      state: 'ENABLED',
    },
    {
      id: 6,
      title: 'Mesa 6',
      icon: 'people',
      color: lightColors.platform.ios.error,
      state: 'DISABLED',
    },
    {
      id: 7,
      title: 'Mesa 7',
      icon: 'people',
      color: lightColors.platform.ios.error,
      state: 'DISABLED',
    },
    {
      id: 8,
      title: 'Mesa 8',
      icon: 'people',
      color: lightColors.platform.ios.success,
      state: 'ENABLED',
    },
    {
      id: 9,
      title: 'Mesa 9',
      icon: 'people',
      color: lightColors.platform.ios.error,
      state: 'DISABLED',
    },
  ];
  async function filterTable() {
    let quantityTablesEnabled = 0;
    list.forEach(element => {
      if (element.state.toUpperCase() === 'ENABLED') {
        quantityTablesEnabled++;
      }
    });
    setQuantityTablesFilter(quantityTablesEnabled);
  }

  useEffect(() => {
    filterTable();
  });
  return (
    <>
      <View style={{elevation: 1, paddingBottom: 0}}>
        <HeaderGeneric isVisible={false} getChecks={(checks: any) => {}} />
        <Text h4 style={GLOBALS_STYLES.pageTitle}>
          Visão geral
        </Text>
      </View>
      <>
        <Divider
          style={{width: '90%', margin: 20, marginBottom: 20}}
          color="grey"
          width={0}
          orientation="horizontal"
        />
      </>
      <View style={GLOBALS_STYLES.container}>
        <CardGeneric />
      </View>
    </>
  );
}
export default CentralScreen;
