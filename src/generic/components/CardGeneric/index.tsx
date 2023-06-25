import React, {useEffect, useState} from 'react';
import GLOBALS_STYLES from '../../../generic/styles/globals';
import {Row, Col, Grid} from 'react-native-easy-grid';
import {Text, lightColors, Card, Icon} from '@rneui/themed';
import STYLES from './styles';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const CardGeneric: React.FunctionComponent = props => {
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
    <ScrollView>
      <Grid>
        <Row>
          <Col>
            <Card
              containerStyle={STYLES.cardContainer}
              wrapperStyle={STYLES.cardWrapper}>
              <Card.Title>Capacidade</Card.Title>
              <Card.Divider />
              <Text style={STYLES.cardText}>20</Text>
            </Card>
          </Col>
          <Col>
            <Card
              containerStyle={STYLES.cardContainer}
              wrapperStyle={STYLES.cardWrapper}>
              <Card.Title>Total de mesas</Card.Title>
              <Card.Divider />
              <Text style={STYLES.cardText}>9</Text>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card
              containerStyle={STYLES.cardContainer}
              wrapperStyle={STYLES.cardWrapper}>
              <Card.Title>Ocupadas</Card.Title>
              <Card.Divider />
              <Text style={STYLES.cardText}>5</Text>
            </Card>
          </Col>
          <Col>
            <Card
              containerStyle={STYLES.cardContainer}
              wrapperStyle={STYLES.cardWrapper}>
              <Card.Title>Desocupadas</Card.Title>
              <Card.Divider />
              <Text style={STYLES.cardText}>4</Text>
            </Card>
          </Col>
        </Row>
      </Grid>
    </ScrollView>
  );
};

export default CardGeneric;
