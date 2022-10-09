import styles from './Card.style';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {Text, View, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function Card() {
  const navigation = useNavigation();
  const AddCard = () => {
    navigation.navigate('AddCard');
  };

  const ShowConfirm = () => {
    Alert.alert('Delete Card Information', 'Are you sure ?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  return (
    <View style={styles.Container}>
      <View style={styles.headerContainer}>
        <View style={styles.containerTop}>
          <Icon1 name="radio-button-on" size={20} color="#EBCB7F" />

          <View style={styles.containertext}>
            <Text style={styles.text}>**** **** **** 5312</Text>
            <Text style={styles.text}>09/26 Gamze Duman</Text>
          </View>
        </View>

        <TouchableOpacity onPress={ShowConfirm}>
          <View style={styles.IconTwo}>
            <Icon2 name="trash" size={28} color="grey" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.ButtonContainer} onPress={AddCard}>
          <Text style={styles.txtButton}>ADD TO CARD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Card;
