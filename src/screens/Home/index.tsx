import React, {useState} from 'react';
import {View} from 'react-native';
import {Text, Divider, ListItem, Icon, lightColors} from '@rneui/themed';
import HeaderGeneric from '../../generic/components/HeaderGeneric';
import {StackActions, useNavigation} from '@react-navigation/native';
import STYLES from './styles';
import SearchBarGeneric from '../../generic/components/SearchBarGeneric';
import {ScrollView} from 'react-native-gesture-handler';
import AlertGeneric from '../../generic/components/AlertGeneric';
import GLOBALS_STYLES from '../../generic/styles/globals';

function HomeScreen() {
  const navigation = useNavigation();
  const listFilter = ['ENABLED', 'DISABLED', 'ALL'];

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
    {
      id: 10,
      title: 'Teste',
      icon: 'people',
      color: lightColors.platform.ios.error,
      state: 'DISABLED',
    },
  ];
  let [filteredList, setFilteredList] = useState(list);
  let [oldList, setOldList] = useState(filteredList);

  async function handleNavigation(id: number, title: string) {
    navigation.dispatch(
      StackActions.push('Customer', {
        id,
        title,
      }),
    );
  }

  async function callback(checks: any | undefined) {
    let filter: string = 'ALL';
    let filtered: boolean = false;
    checks.forEach((element: boolean, index: number) => {
      if (element) {
        filter = listFilter[index];
      }
    });
    filtered = filter !== 'ALL';
    if (filtered) {
      list = list.filter(value => {
        if (value.state === filter) {
          return value;
        }
      });
    }
    setFilteredList(list);
  }

  function removeWhiteSpaces(value: string) {
    let toBeReturned = '';
    if (typeof value === 'string') {
      toBeReturned = value.toLocaleUpperCase().trim();
    }
    return toBeReturned;
  }

  function callbackSearch(value: string) {
    const matches = oldList.filter(item =>
      removeWhiteSpaces(item.title).includes(removeWhiteSpaces(value)),
    );

    console.log(matches.length);

    if (matches.length > 0) {
      setFilteredList(matches);
    } else {
      setFilteredList([]);
    }

    if (value === '') {
      setFilteredList(oldList);
    }
  }

  function _renderList(): any {
    return (
      <>
        <AlertGeneric message={0} />
        <Divider
          style={{width: '90%', margin: 20, marginBottom: 0}}
          color="grey"
          width={0.2}
          orientation="horizontal"
        />
        {filteredList.map((item, index) => (
          <ListItem
            key={index}
            style={STYLES.listItems}
            containerStyle={GLOBALS_STYLES.listItemsContainer}
            onPress={() => {
              handleNavigation(item.id, item.title);
            }}>
            <ListItem.Content style={{marginLeft: 10}}>
              <ListItem.Title
                style={{textTransform: 'capitalize', fontSize: 16}}>
                {item.title}
              </ListItem.Title>
            </ListItem.Content>
            <Icon name={item.icon} color={item.color} reverse size={15} />
            <ListItem.Chevron color={lightColors.grey1} size={28} />
          </ListItem>
        ))}
      </>
    );
  }

  function _renderWarning(): any {
    return <AlertGeneric message={5} />;
  }

  function _renderListOrWarning(): any {
    if (filteredList.length > 0) {
      return _renderList();
    } else {
      return _renderWarning();
    }
  }

  return (
    <>
      <View style={{elevation: 1, paddingBottom: 0}}>
        <HeaderGeneric isVisible={true} getChecks={callback} />
        <Text h4 style={GLOBALS_STYLES.pageTitle}>
          Listagem de mesas
        </Text>
        <AlertGeneric message={4} />
        <SearchBarGeneric getSearchValue={callbackSearch} />
      </View>
      <ScrollView>
        <View style={GLOBALS_STYLES.container}>{_renderListOrWarning()}</View>
      </ScrollView>
    </>
  );
}
export default HomeScreen;
