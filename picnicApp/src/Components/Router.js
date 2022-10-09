import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';

import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon4 from 'react-native-vector-icons/Ionicons';
import Icon5 from 'react-native-vector-icons/AntDesign';

import Home from './Screens/Home';
import Calender from './Screens/Calendar';
import Map from './Screens/Map';
import Food from './Screens/Food';
import Menu from './Screens/Menu';

const Tab = createBottomTabNavigator();
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Result from './Screens/Account/Result';
import Balance from './Screens/Wallet/Balance';
import AddCard from './Screens/Card/AddCard';
import PicnicDetail from './Screens/myPicnics/PicnicDetail';

const Stack = createNativeStackNavigator();

function MenuStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Menu1" component={Menu} />
      <Stack.Screen name="Result" component={Result} />
      <Stack.Screen name="Balance" component={Balance} />
      <Stack.Screen name="AddCard" component={AddCard} />
      <Stack.Screen name="PicnicDetail" component={PicnicDetail}/>
    </Stack.Navigator>
  );
}
function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerTitle: 'Test',
          headerShown: false,
          headerTintColor: 'blue',
          tabBarShowLabel: false,
          tabBarStyle: {backgroundColor: '#EBCB7F'},
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => <Icon1 name="home" size={24} color="black" />,
          }}
        />
        <Tab.Screen
          name="Calender"
          component={Calender}
          options={{
            tabBarIcon: () => <Icon2 name="calendar" size={24} color="black" />,
          }}
        />
        <Tab.Screen
          name="Map"
          component={Map}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon3
                name="map-marker"
                size={26}
                color="black"
                style={{
                  width: 25,
                  height: 25,
                  color: 'red',
                  headerTintColor: 'red',
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Food"
          component={Food}
          options={{
            tabBarIcon: () => (
              <Icon4 name="fast-food" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Menu"
          component={MenuStack}
          options={{
            tabBarIcon: () => (
              <Icon5 name="menufold" size={25} color="black" s />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({});
export default Router;
