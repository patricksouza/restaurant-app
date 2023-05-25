import React from 'react';
import {ScrollView, View} from 'react-native';
import HeaderGeneric from '../../generic/components/HeaderGeneric';
import STYLES from './styles';
import {
  darkColors,
  Text,
  Button,
  ListItem,
  Divider,
  lightColors,
} from '@rneui/themed';
import {HStack} from '@react-native-material/core';
import {useRoute} from '@react-navigation/native';
import AlertGeneric from '../../generic/components/AlertGeneric';
import GLOBALS_STYLES from '../../generic/styles/globals';
import {StackActions, useNavigation} from '@react-navigation/native';
import {Row, Col} from 'react-native-easy-grid';
import {Image} from '@rneui/base';

function CustomerScreen() {
  type SecondListData = {
    name: string;
    avatar_url: string;
    subtitle: string;
  };

  const logoImage = require('../../assets/images/add_orders.png');

  const navigation = useNavigation();
  const {params} = useRoute();

  const secondList: Partial<SecondListData>[] = [
    {
      name: 'Batata Frita G',
      subtitle: 'R$ 17,39',
    },
    {
      name: 'Smash Burguer',
      subtitle: 'R$ 32,94',
    },
    {
      name: 'Coca Cola 350ml',
      subtitle: 'R$ 6,50',
    },
  ];
  const [expanded, setExpanded] = React.useState(false);

  async function handleNavigation() {
    navigation.dispatch(
      StackActions.push('AddCustomer', {
        id: params?.id,
      }),
    );
  }

  function _renderAddItem(index: number): any {
    if (index === 0) {
      return (
        <View style={{marginBottom: 20, width: '100%'}}>
          <Button
            buttonStyle={{
              backgroundColor: lightColors.platform.ios.success,
              borderRadius: 5,
            }}>
            Adicionar item
          </Button>
        </View>
      );
    } else {
      return;
    }
  }

  function _renderDeleteClient(index: number, totalLength: number): any {
    if (index === totalLength - 1) {
      return (
        <View style={{marginTop: 20, width: '100%'}}>
          <Button
            title="Remover cliente"
            buttonStyle={{
              width: '100%',
              backgroundColor: '#FF0500',
              borderRadius: 5,
            }}
            titleStyle={{color: 'white'}}
          />
        </View>
      );
    } else {
      return;
    }
  }

  function _renderAll(): any {
    const mockIDsNotShowList = [2, 4, 5, 8];
    if (mockIDsNotShowList.includes(params?.id)) {
      return (
        <View>
          <AlertGeneric message={2} />
          <Image style={STYLES.logo} source={logoImage} resizeMode={'cover'} />
        </View>
      );
    }
    return (
      <ListItem.Accordion
        style={STYLES.listItems}
        containerStyle={GLOBALS_STYLES.listItemsContainer}
        content={
          <>
            <ListItem.Content>
              <Row>
                <Col size={15}>
                  <ListItem.Title>Carla</ListItem.Title>
                </Col>
                <Col></Col>
              </Row>
            </ListItem.Content>
          </>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}>
        {secondList.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={GLOBALS_STYLES.listContentContainer}
            onPress={() => {}}
            bottomDivider>
            <ListItem.Content>
              {_renderAddItem(i)}
              <Row>
                <Col size={4}>
                  <ListItem.Title>{l.name}</ListItem.Title>
                </Col>
                <Col size={2}>
                  <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                </Col>
                <Col size={2}>
                  <Button
                    type="clear"
                    buttonStyle={{padding: 0}}
                    icon={{
                      name: 'remove-circle-outline',
                      size: 25,
                      color: '#FF0000',
                    }}
                  />
                </Col>
              </Row>
              {_renderDeleteClient(i, secondList.length)}
            </ListItem.Content>
          </ListItem>
        ))}
      </ListItem.Accordion>
    );
  }

  return (
    <>
      <View style={{elevation: 1}}>
        <HeaderGeneric isVisible={false} getChecks={(checks: any) => {}} />
        <HStack m={2} left={0} spacing={35}>
          <Row>
            <Col size={3}>
              <Text h4 style={GLOBALS_STYLES.pageTitle}>
                Comanda da {params?.title}
              </Text>
            </Col>
            <Col size={2}>
              <Button
                titleStyle={{fontSize: 14}}
                size={'sm'}
                type="solid"
                onPress={() => {
                  handleNavigation();
                }}
                buttonStyle={{
                  backgroundColor: darkColors.grey5,
                  borderRadius: 5,
                  marginLeft: 10,
                  padding: 10,
                  width: '85%',
                }}>
                Adicionar Cliente
              </Button>
            </Col>
          </Row>
        </HStack>
      </View>
      <ScrollView>
        <View style={GLOBALS_STYLES.container}>
          <AlertGeneric message={1} />
          <Divider
            style={{width: '90%', margin: 20, marginBottom: 0}}
            color="grey"
            width={0.2}
            orientation="horizontal"
          />
          {_renderAll()}
        </View>
      </ScrollView>
      <View style={GLOBALS_STYLES.buttonsContainer}>
        <Button
          title="Voltar"
          type="outline"
          buttonStyle={{
            borderWidth: 1,
            borderRadius: 5,
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
          title="Finalizar este pedido"
          type="solid"
          buttonStyle={{
            backgroundColor: darkColors.grey5,
            borderRadius: 5,
            width: '90%',
          }}
          size="lg"
          titleStyle={{marginHorizontal: 5, fontSize: 14}}
        />
      </View>
    </>
  );
}
export default CustomerScreen;
