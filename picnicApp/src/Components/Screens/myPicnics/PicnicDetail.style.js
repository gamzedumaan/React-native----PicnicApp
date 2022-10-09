import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  containerWrapper: {
    marginTop: 30,
  },
  Area: {
    elevation: 9,
    height: 70,
    width: '95%',
    borderRadius: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  chairText: {
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
  },
  Image: {
    height: 40,
    width: 40,
  },
  containerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '90%',
  },
  Button: {
    height: 36,
    width: 300,
    backgroundColor: '#EBCB7F',
    borderRadius: 3,
  },
  buttonText: {
    textAlign: 'center',
    letterSpacing: 4,
    margin: 4,
    fontSize: 14,
    color: 'black',
    marginTop: 8,
    fontFamily: 'Montserrat-SemiBold',
  },
  price: {
    borderBottomWidth: 1,
    borderColor: '#EBCB7TF',
    color: '#EBCB7F',
    fontFamily: 'Montserrat-SemiBold',
  },
  containerIcon: {
    left: 6,
    top: 5,
  },
  piece: {
    fontFamily: 'Montserrat-Medium',
    color:'black',
  },
});

export default styles;
