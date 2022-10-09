import {Text, View, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import styles from './Account.style';
import {useNavigation} from '@react-navigation/native';

import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';

function Account() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const {goBack} = useNavigation();
  const register = () => {
    navigation.navigate('Result', {
      name: name,
      mail: mail,
      age: age,
      password: password,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text onPress={() => goBack()} style={styles.headerText}>
          Login
        </Text>
      </View>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.Input}
          placeholder="Name"
          value={name}
          onChangeText={text => setName(text)}
          placeholderTextColor='black'
    
        />
        <Icon1 style={styles.Icon} name="person" size={17} color="black" />
      </View>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.Input}
          placeholder="Mail"
          value={mail}
          onChangeText={text => setMail(text)}
          placeholderTextColor='black'
        />
        <Icon2 style={styles.Icon} name="mail" size={17} color="black" />
      </View>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.Input}
          placeholder="Age"
          value={age}
          onChangeText={text => setAge(text)}
          type="mail"
          placeholderTextColor='black'
        />
        <Icon3 style={styles.Icon} name="user" size={17} color="black" />
      </View>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.Input}
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          placeholderTextColor='black'
          secureTextEntry
        />
        <Icon4 style={styles.Icon} name="lock-reset" size={17} color="black" />
      </View>
      <View style={styles.butonContainer}>
        <Button title="Register" color="#EBCB7F" onPress={register} />
      </View>
    </View>
  );
}
export default Account;
