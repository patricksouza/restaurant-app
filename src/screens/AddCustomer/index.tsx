import {View} from 'react-native';
import React from 'react';
import {darkColors, Text, Button, Divider, lightColors} from '@rneui/themed';
import GLOBALS_STYLES from '../../generic/styles/globals';
import HeaderGeneric from '../../generic/components/HeaderGeneric';
import {ScrollView} from 'react-native-gesture-handler';
import AlertGeneric from '../../generic/components/AlertGeneric';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';
import STYLES from './styles';

function AddCustomerScreen() {
  const navigation = useNavigation();
  const {params} = useRoute();
  const currentTable = 'Mesa'.concat(' ', params?.id);
  return (
    <>
      <View style={STYLES.header}>
        <HeaderGeneric isVisible={false} getChecks={(checks: any) => {}} />
        <Text h4 style={GLOBALS_STYLES.pageTitle}>
          Adicionar cliente
        </Text>
      </View>
      <ScrollView>
        <View style={GLOBALS_STYLES.container}>
          <AlertGeneric message={3} />
          <Divider
            style={STYLES.divider}
            color="grey"
            width={0.2}
            orientation="horizontal"
          />
        </View>
        <SafeAreaView>
          <View style={GLOBALS_STYLES.inputContainer}>
            <TextInput
              placeholderTextColor={'black'}
              style={STYLES.disabledInput}
              placeholder={currentTable}
              value={params?.id}
              editable={false}
            />
            <TextInput
              style={STYLES.input}
              placeholderTextColor={'black'}
              placeholder="Nome do cliente"
            />
          </View>
        </SafeAreaView>
      </ScrollView>
      <View style={GLOBALS_STYLES.buttonsContainer}>
        <Button
          title="Voltar"
          type="outline"
          buttonStyle={{
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            width: '90%',
            borderColor: darkColors.grey5,
          }}
          titleStyle={{
            marginHorizontal: 5,
            fontSize: 14,
            color: darkColors.grey5,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Button
          title="Adicionar"
          type="solid"
          buttonStyle={{
            backgroundColor: darkColors.grey5,
            borderRadius: 10,
            width: '100%',
          }}
          size="lg"
          titleStyle={{marginHorizontal: 5, fontSize: 14}}
        />
      </View>
    </>
  );
}
export default AddCustomerScreen;
