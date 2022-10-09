import {View, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button} from 'react-native-paper';
import styles from './HomeLoading.style';

function HomeLoading() {
  const [loading, setLoading] = useState(true);
  const startLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    startLoading();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerActivityIndicator}>
        {loading ? (
          <ActivityIndicator animating color="red" size="large" />
        ) : (
          <>
            <Button onPress={startLoading} />
          </>
        )}
      </View>
    </View>
  );
}

export default HomeLoading;
