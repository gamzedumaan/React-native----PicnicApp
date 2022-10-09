import {Dimensions, StyleSheet, useWindowDimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    backgroundColor: 'white',
  },
  containerImage: {
    margin: 3,
    padding: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Image: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  deliveryText: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Montserrat-ExtraBold',
  },
  containerFoodText: {
    left: 10,
    top: 5,
  },
  containerDeliveryText: {
    left: 10,
    marginTop: 5,
    top: 10,
  },
  containerCardWrapper: {
    margin: 5,
    padding: 5,
  },

  containerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  search: {
    flex: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  searchText: {
    fontSize: 11,
    marginBottom: 5,
    color: 'grey',
    fontFamily: 'Montserrat-Medium',
  },

  Icon: {
    right: 10,
  },
  buttonOne: {
    height: 140,
    width: 95,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'white',
    borderColor: '#EEF2E6',
  },
  buttonText: {
    fontSize: 10,
    fontFamily: 'Montserrat-Medium',
    left: 5,
  },
  pizzaImage: {
    height: 100,
    width: 90,
    borderRadius: 3,
  },
  containerImagePizza: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 4,
  },
  foodText: {
    color: 'black',
    left: 5,
    fontSize: 12,
    fontFamily: 'Montserrat-ExtraBold',
  },
  containerbuttonOne: {
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    flexDirection: 'row',
    margin: 10,
    padding: 10,
  },
  Images: {
    height: 140,
    width: 200,
  },
  ContainerItem: {
    height: 140,
    width: 200,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'white',
    borderColor: '#EEF2E6',
  },
  containerFlatList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: 'white',
    elevation: 0.5,
  },
  position: {
    position: 'absolute',
    height: height,
    width: width,
    backgroundColor: 'black',
    opacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 999,
  },

  positionText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Montserrat-Medium',
  },
  containerCampaigns: {
    marginLeft: 20,
  },
  campaignText: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Montserrat-ExtraBold',
  },
  containerCampaignText: {
    left: 10,
  },
  conainerEvaluation: {
    width: '100%',
    height: 80,
    borderColor: 'white',
    borderRadius: 1,
    borderWidth: 1,
    elevation: 2,
  },
  Button: {
    width: 80,
    height: 30,
    backgroundColor: '#EB1D36',
    borderRadius: 40,
    marginTop: 10,
    marginLeft: 10,
  },
  evaluationText: {
    textAlign: 'center',
    color: 'white',
    top: 5,
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
  },
  orderText: {
    color: 'black',
    top: 10,
    left: 10,
    fontSize: 12,
    fontFamily: 'Montserrat-ExtraBold',
  },
  containerIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    right: 10,
  },
  containerOrder: {
    padding: 4,
    margin: 4,
  },
  foodHeaderText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: 'grey',
  },
});

export default styles;
