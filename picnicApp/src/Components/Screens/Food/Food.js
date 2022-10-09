import {
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './Food.style';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';

import Icon3 from 'react-native-vector-icons/AntDesign';

function Food() {
  const campaignsData = [
    {
      id: '1',
      Image: require('./../../../../image/kfc.jpg'),
    },
    {
      id: '1',
      Image: require('./../../../../image/hamburger.png'),
    },
    {
      id: '1',
      Image: require('./../../../../image/kfc.jpg'),
    },
    {
      id: '1',
      Image: require('./../../../../image/pizza.jpg'),
    },
  ];
  return (
    /*Header*/
    <View style={{flex:1}}>
        <View style={styles.position}>
        <Text style={styles.positionText}> Takeaway coming soon .. </Text>
      </View>
    <ScrollView style={styles.container}>
     
      <View style={styles.containerImage}>
        <Image
          style={styles.Image}
          source={require('./../../../../image/profile.png')}
        />
        <Icon name="menu" size={20} color="black" />
      </View>
      <View style={styles.containerFoodText}>
        <Text style={styles.foodHeaderText}>Food</Text>
      </View>
      <View style={styles.containerDeliveryText}>
        <Text style={styles.deliveryText}>Delivery</Text>
      </View>

      {/*Search*/}
      <View style={styles.containerWrapper}>
        <Icon2 style={styles.Icon} name="search1" size={18} color="black" />
        <View style={styles.search}>
          <Text style={styles.searchText}>
            Search for restaurants and shops
          </Text>
        </View>
      </View>
      {/*Food*/}
      <View style={styles.containerbuttonOne}>
        <View style={styles.buttonOne}>
          <Text style={styles.foodText}>Food</Text>
          <Text style={styles.buttonText}>Daily Order</Text>
          <View style={styles.containerImagePizza}>
            <Image
              style={styles.pizzaImage}
              source={require('../../../../image/pizza.jpg')}
            />
          </View>
        </View>
        {/*Junk Food*/}
        <View style={styles.buttonOne}>
          <Text style={styles.foodText}>Junk Food</Text>
          <Text style={styles.buttonText}>Daily Shopping</Text>
          <View style={styles.containerImagePizza}>
            <Image
              style={styles.pizzaImage}
              source={require('../../../../image/shopping.jpg')}
            />
          </View>
        </View>
        {/*Shopping*/}
        <View style={styles.buttonOne}>
          <Text style={styles.foodText}>Shopping</Text>
          <Text style={styles.buttonText}>Knife</Text>
          <View style={styles.containerImagePizza}>
            <Image
              style={styles.pizzaImage}
              source={require('../../../../image/knife.jpg')}
            />
          </View>
        </View>
      </View>
      <View style={styles.containerCampaignText}>
        <Text style={styles.campaignText}>Campaigns</Text>
      </View>
      <View style={styles.containerFlatList}>
        <FlatList
          horizontal={true}
          data={campaignsData}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <View style={styles.ContainerItem}>
                <Image style={styles.Images} source={item.Image} />
              </View>
            );
          }}
        />
      </View>
      {/*Order*/}
      <View style={styles.containerOrder}>
        <View style={styles.conainerEvaluation}>
          <Text style={styles.orderText}>How Was Your Order ?</Text>
          <View style={styles.containerIcon}>
            <Icon3 name="star" size={12} color="yellow" />
            <Icon3 name="star" size={12} color="yellow" />
            <Icon3 name="star" size={12} color="yellow" />
            <Icon3 name="star" size={12} color="yellow" />
            <Icon3 name="star" size={12} color="yellow" />
          </View>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.evaluationText}>Evaluate</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/*position*/}
     
    </ScrollView>
    </View>
  );
}

export default Food;
