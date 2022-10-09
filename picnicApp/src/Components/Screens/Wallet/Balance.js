import {Text, View, Alert, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './Balance.styles';
import CheckBox from '@react-native-community/checkbox';

import Icon from 'react-native-vector-icons/Ionicons';

function Balance() {
  const [Balance, setBalance] = useState(false);
  const route = useRoute();
  const Load = () => {
    Alert.alert('The payoff is successful');
  };
  const [indexNumber, setIndexNumber] = useState('-1');

  const {goBack} = useNavigation();
  return (
    <View style={styles.container}>
      <Icon
        style={styles.containerIcon}
        onPress={() => goBack()}
        name="arrow-back-sharp"
        size={24}
        color="black"
      />
      {/*Header*/}
      <View style={styles.containerWrapper}>
        <View style={styles.Wrapper}>
          <View style={styles.containerText}>
            <Text style={styles.balanceText}>Balance $29</Text>
          </View>
          {/*Buttons*/}
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              onPress={() => setIndexNumber(0)}
              style={[
                styles.button,
                {backgroundColor: indexNumber !== 0 ? 'white' : '#EBCB7F'},
              ]}>
              <View style={styles.buttonTextcontainer}>
                <Text style={styles.buttonText}>$ 25</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIndexNumber(1)}
              style={[
                styles.button,
                {backgroundColor: indexNumber !== 1 ? 'white' : '#EBCB7F'},
              ]}>
              <View style={styles.buttonTextcontainer}>
                <Text style={styles.buttonText}>$ 50</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIndexNumber(2)}
              style={[
                styles.button,
                {backgroundColor: indexNumber !== 2 ? 'white' : '#EBCB7F'},
              ]}>
              <View style={styles.buttonTextcontainer}>
                <Text style={styles.buttonText}>$ 100</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/*Card Input*/}
          <View style={styles.containertext}>
            <Text style={styles.text}>09/26 Gamze Duman</Text>
            <Text style={styles.text}>**** **** **** 5312</Text>
          </View>
          <View style={styles.containerUnderline}>
            <View style={styles.underline} />
          </View>
          {/*CheckBox*/}
          <View style={styles.containerBottomText}>
            <CheckBox
              tintColors={{true:'black'}}
              disabled={false}
              value={Balance}
              onValueChange={newValue => setBalance(newValue)}
            />
            <Text style={styles.BottomText}>
              I have read the wallet agreement and I accept it.
            </Text>
          </View>
          {/*Button Load*/}
          <View style={styles.containerLoadButton}>
            <TouchableOpacity style={styles.loadButton} onPress={Load}>
              <Text style={styles.txtButton}>LOAD</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Balance;
