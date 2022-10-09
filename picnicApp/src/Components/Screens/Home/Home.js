import {View} from 'react-native';
import React from 'react';
import styles from './Home.style';
import HomeLoading from '../HomeLoading/HomeLoading';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
function Home() {
  return (
    <View style={styles.container}>
       <HomeLoading />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 41.0082,
          longitude: 28.9784,
          latitudeDelta: 0.003,
          longitudeDelta: 0.02,
        }}
      />
     
    </View>
  );
}
export default Home;
