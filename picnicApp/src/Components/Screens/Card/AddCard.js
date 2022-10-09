import {Text, View, Alert, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import styles from './AddCard.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import Icon2 from 'react-native-vector-icons/Ionicons';

function AddCard() {
  const route = useRoute();
  const Update = () => {
    Alert.alert(alert);
  };

  const Delete = () => {
    Alert.alert('Delete the card', 'Are you sure ?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'Cancel',
      },
      {text: 'Delete', onPress: () => console.log('OK Pressed')},
    ]);
  };
  const LOAD = () => {
    Alert.alert('Updated Card Change');
  };
  const {goBack} = useNavigation();
  return (
    <View style={styles.container}>
      <Icon2
        style={styles.containerIcon}
        onPress={() => goBack()}
        name="arrow-back-sharp"
        size={24}
        color="black"
      />
      <View style={styles.containerImage}>
        <Image
          style={styles.Image}
          source={require('../../../../image/crediCard.png')}
        />
      </View>
      <View style={styles.WrapperText}>
        <Text style={styles.cardNumberText}>Card number</Text>
        <Icon
          style={styles.Icon}
          name="cancel"
          size={15}
          color="grey"
          onPress={Delete}
        />
        <Text style={styles.numberText1}>1234 5678 8965 7896 3652</Text>
      </View>
      <View style={styles.containersText}>
        <Text style={styles.expiryText}>Expiry</Text>
        <Text style={styles.cvvText}>CVV</Text>
      </View>
      <View style={styles.containersNumberText}>
        <Text style={styles.numberText2}>11/20</Text>
        <Text style={styles.numberText2}>581</Text>
      </View>
      <View style={styles.containerBottomText}>
        <Text style={styles.bottomText}>
          When adding a card, $1 will be withdrawn from your card for
          verification purposes.
        </Text>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.buttonLoad} onPress={LOAD}>
          <Text style={styles.buttonLoadText}>LOAD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AddCard;
