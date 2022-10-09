import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },

  title: {
    color: '#010101',
    fontFamily: 'Montserrat-Medium',
    fontSize:13,
  },
  ContainerItem: {
    height: 40,
    width: '100%',
    borderRadius: 3,
    borderBottomWidth: 1,
    borderColor: '#E8E8E8',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 4,
  },
  price: {
    textAlign: 'right',
    marginRight: 5,
    fontFamily: 'Montserrat-Medium',
    color:'black',
  },
  priceText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 17,
  },
  ContainerTop: {
    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  containerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  Button: {
    height: 36,
    width: 300,
    backgroundColor: '#EBCB7F',
    borderRadius: 3,
  },
  containerTop: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 5,
  },
  containerArea: {
    width: 320,
    height: 120,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    color: '#F9F9F9',
    shadowOffset: 3,
  },
  buttonText: {
    textAlign: 'center',
    letterSpacing: 2,
    margin: 4,
    color: 'black',
    marginTop: 8,
    fontFamily: 'Montserrat-SemiBold',
  },

  containerBalanceText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  balanceText: {
    fontSize: 19,
    color: 'black',
    fontFamily: 'Montserrat-Medium',
    letterSpacing:1,
  },
  containerMovementsText: {
    marginTop: 15,
  },
  Text: {
    fontSize: 13,
    letterSpacing: 2,
    color: 'black',
    fontWeight: 'bold',
  },
  containerMovements: {
    marginLeft: 10,
  },
  movementsText: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'Montserrat-SemiBold',
  },
});

export default styles;
