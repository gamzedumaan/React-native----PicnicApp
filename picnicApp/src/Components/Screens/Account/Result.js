import {Text, View, Button, Alert} from 'react-native';
import {useRoute} from '@react-navigation/native';
import React from 'react';
import styles from './Result.style';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

function Result() {
  const route = useRoute();
  console.log(route);
  const Update = () => {
    Alert.alert('No changes were made');
  };
  const {goBack} = useNavigation();
  return (
    <View style={styles.container}>
      <Icon
        style={styles.Icon}
        onPress={() => goBack()}
        name="arrow-back-sharp"
        size={24}
        color="black"
      />
      <View style={styles.Header}>
        <Text style={styles.headerText}>Account</Text>
      </View>
      <View style={styles.containerHeader}>
        <View style={styles.containerInput}>
          <Text style={styles.Text}>{route.params.name}</Text>
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.Text}> {route.params.mail}</Text>
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.Text}>{route.params.age}</Text>
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.Text}>{route.params.password}</Text>
        </View>
      </View>

      <View style={styles.butonContainer}>
        <Button title="Update" color="#EBCB7F" onPress={Update} />
      </View>
    </View>
  );
}

export default Result;
