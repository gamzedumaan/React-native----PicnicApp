import {View, Text} from 'react-native';
import React from 'react';
import styles from './Map.style';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import HomeLoading from '../HomeLoading/HomeLoading';

const Map = () => {
  return (
    <View style={styles.container}>
      <MapView
        region={{
          latitude: 40.9583,
          longitude: 29.0969,
          latitudeDelta: 0.003,
          longitudeDelta: 0.02,
        }}
        style={styles.map}
        provider={PROVIDER_GOOGLE}></MapView>
      <HomeLoading />
    </View>
  );
};

export default Map;
