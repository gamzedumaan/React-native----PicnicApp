import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import styles from './Wallet.style';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const DataWallet = [
  {
    id: '1',
    title: '  Uses from the blance.',
    price: '-9.72 £',
  },
  {
    id: '2',
    title: '  Uses from the blance.',
    price: '-8.90 £',
  },
  {
    id: '3',
    title: '  Uses from the blance.',
    price: '-10 £',
  },
  {
    id: '4',
    title: '  Uses from the blance.',
    price: '-20 £',
  },
  {
    id: '5',
    title: '  Uses from the blance.',
    price: '-9.72 £',
  },
  {
    id: '6',
    title: '  Uses from the blance.',
    price: '-30 £',
  },
  {
    id: '7',
    title: '  Uses from the blance.',
    price: '-5.75 £',
  },
];

function Wallet() {
  const [setWallet] = useState();

  const navigation = useNavigation();

  const Balance = () => {
    navigation.navigate('Balance', {
      wallet: setWallet,
    });
  };
  const Movements = () => {
    return (
      <View style={styles.containerMovements}>
        <Text style={styles.movementsText}>Movements</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.Container}>
      {/*Top Button*/}
      <View style={styles.containerTop}>
        <View style={styles.containerArea}>
          <View style={styles.containerBalanceText}>
            <Text style={styles.balanceText}>Balance £29</Text>
          </View>
          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.Button} onPress={Balance}>
              <Text style={styles.buttonText}>LOAD</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/*FlatList*/}
      <FlatList
        ListHeaderComponent={Movements}
        data={DataWallet}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.ContainerItem}>
              <Icon
                style={styles.Icon}
                name="money-bill"
                size={15}
                color="green"
              />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

export default Wallet;
