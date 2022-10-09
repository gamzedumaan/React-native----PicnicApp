import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './myPicnics.style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

function myPicnics() {
  const [setMap] = useState();

  const navigation = useNavigation();

  const PicnicDetail = () => { 
    navigation.navigate('PicnicDetail', {
      myPicnics: setMap,
    });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerWrapper}>
        <View style={styles.containerBorder}>
          <Image
            style={styles.Image}
            source={require('../../../../image/map.png')}
          />
          <View style={styles.containerIcon}>
            <Text style={styles.textDate}>09.09.2022</Text>
            <Icon
              style={styles.oneIcon}
              name="stopwatch"
              size={17}
              color="#FFB200"
            />
            <Icon2
              style={styles.twoIcon}
              name="money-bill-wave"
              size={17}
              color="#FFB200"
            />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.text}>20:52 - 22:55</Text>
            <Text style={styles.text}>123 Minute</Text>
            <Text style={styles.text}> $ 18:47</Text>
            <TouchableOpacity onPress={PicnicDetail}>
              <Icon3 name="rightsquare" size={27} color="#FFB200" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.containerWrapper}>
        <View style={styles.containerBorder}>
          <Image
            style={styles.Image}
            source={require('../../../../image/map.png')}
          />
          <View style={styles.containerIcon}>
            <Text style={styles.textDate}>09.09.2022</Text>
            <Icon
              style={styles.oneIcon}
              name="stopwatch"
              size={17}
              color="#FFB200"
            />
            <Icon2
              style={styles.twoIcon}
              name="money-bill-wave"
              size={17}
              color="#FFB200"
            />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.text}>20:52 - 22:00</Text>
            <Text style={styles.text}>150 Minute</Text>
            <Text style={styles.text}> $ 40:00</Text>
            <TouchableOpacity onPress={PicnicDetail}>
              <Icon3 name="rightsquare" size={27} color="#FFB200" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.containerWrapper}>
        <View style={styles.containerBorder}>
          <Image
            style={styles.Image}
            source={require('../../../../image/map.png')}
          />
          <View style={styles.containerIcon}>
            <Text style={styles.textDate}>09.09.2022</Text>
            <Icon
              style={styles.oneIcon}
              name="stopwatch"
              size={17}
              color="#FFB200"
            />
            <Icon2
              style={styles.twoIcon}
              name="money-bill-wave"
              size={17}
              color="#FFB200"
            />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.text}>18:52 - 21:55</Text>
            <Text style={styles.text}>80 Minute</Text>
            <Text style={styles.text}> $ 18:00</Text>
            <TouchableOpacity onPress={PicnicDetail}>
              <Icon3 name="rightsquare" size={27} color="#FFB200" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.containerWrapper}>
        <View style={styles.containerBorder}>
          <Image
            style={styles.Image}
            source={require('../../../../image/map.png')}
          />
          <View style={styles.containerIcon}>
            <Text style={styles.textDate}>09.09.2022</Text>
            <Icon
              style={styles.oneIcon}
              name="stopwatch"
              size={17}
              color="#FFB200"
            />
            <Icon2
              style={styles.twoIcon}
              name="money-bill-wave"
              size={17}
              color="#FFB200"
            />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.text}>20:00 - 21:10</Text>
            <Text style={styles.text}>120 Minute</Text>
            <Text style={styles.text}> $ 50</Text>
            <TouchableOpacity onPress={PicnicDetail}>
              <Icon3 name="rightsquare" size={27} color="#FFB200" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default myPicnics;
