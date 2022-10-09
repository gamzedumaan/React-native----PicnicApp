import {Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Account from './../Account';
import Wallet from './../Wallet';
import Help from './../Help';
import myPicnics from '../myPicnics/myPicnics';
import Card from './../Card';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Top = createMaterialTopTabNavigator();

function Menu() {
  return (
    <Top.Navigator
      screenOptions={{tabBarLabelStyle: {fontSize: 9}}}
      style={{height: 100, width: '100%'}}>
      <Top.Screen
        name="Account"
        component={Account}
        options={{
          tabBarStyle: {
            backgroundColor: '#EBCB7F',
            tabBarShownIcon: 'false',
            tabBarIcon: () => (
              <Icon name="account-balance" size={10} color="black" />
            ),
          },
        }}
      />
      <Top.Screen
        name="Wallet"
        component={Wallet}
        options={{tabBarStyle: {backgroundColor: '#EBCB7F'}}}
      />
      <Top.Screen
        name="Card"
        component={Card}
        options={{tabBarStyle: {backgroundColor: '#EBCB7F'}}}
      />

      <Top.Screen
        name="Picnic"
        component={myPicnics}
        options={{tabBarStyle: {backgroundColor: '#EBCB7F'}}}
      />
      <Top.Screen
        name="Help"
        component={Help}
        options={{tabBarStyle: {backgroundColor: '#EBCB7F'}}}
      />
    </Top.Navigator>
  );
}

export default Menu;
