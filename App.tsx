import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {darkColors} from '@rneui/base';

import HomeScreen from './src/screens/Home';
import CustomerScreen from './src/screens/Customer';
import CentralScreen from './src/screens/Central';
import AddCustomerScreen from './src/screens/AddCustomer';

function GenericScreen() {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}
const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="Customer" component={CustomerScreen} />
    <HomeStack.Screen name="AddCustomer" component={AddCustomerScreen} />
    <HomeStack.Screen name="Other" component={GenericScreen} />
  </HomeStack.Navigator>
);

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
          }}>
          <Tab.Screen
            options={{
              tabBarLabel: 'Início',
              tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: '500',
              },
              tabBarActiveTintColor: 'black',
              tabBarInactiveTintColor: darkColors.grey3,
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="apps" color={color} size={size} />
              ),
            }}
            name="Generic"
            component={CentralScreen}
          />
          <Tab.Screen
            options={{
              tabBarLabel: 'Pedidos',
              tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: '500',
              },
              tabBarActiveTintColor: 'black',
              tabBarInactiveTintColor: darkColors.grey3,
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name="account-group-outline"
                  color={color}
                  size={size}
                />
              ),
            }}
            name="HomeStack"
            component={HomeStackScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
