import {Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './PicnicDetail.style';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

function PicnicDetail() {
  const [Picnic, setPicnic] = useState();
  const route = useRoute();

  const PicnicDetail = () => {};
  const {goBack} = useNavigation();

  return (
    <View style={styles.container}>
      <Icon
        style={styles.containerIcon}
        name="arrow-back-sharp"
        size={24}
        color="black"
        onPress={() => goBack()}
      />
      <View style={styles.containerWrapper}>
        <TouchableOpacity>
          <View style={styles.Area}>
            <View style={styles.containerText}>
              <Image
                style={styles.Image}
                source={require('../../../../image/chair.png')}
              />
              <Text style={styles.chairText}>Chair</Text>
              <Text style={styles.piece}>2 PİECE</Text>
              <Text style={styles.price}>4.75</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.buttonText}>View Document</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default PicnicDetail;
