import {Text, View} from 'react-native';
import React from 'react';
import styles from './Help.style';

import AboutUs from '../AboutUs';
import Contact from '../Contact';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Top = createMaterialTopTabNavigator();

function Help() {
  return (
    <Top.Navigator
      screenOptions={{
        headerStyle: {
          color: '#EBCB7F',
        },
        headerTintColor: 'black',
      }}>
      <Top.Screen name="About" component={AboutUs} />
      <Top.Screen name="Contact" component={Contact} />
    </Top.Navigator>
  );
}
export default Help;
