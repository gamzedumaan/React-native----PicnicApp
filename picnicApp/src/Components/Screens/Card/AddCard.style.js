import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  containerImage: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Image: {
    borderRadius: 5,
  },
  WrapperText: {
    margin: 10,
    padding: 10,
  },
  cardNumberText: {
    color: 'black',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },
  numberText1: {
    letterSpacing: 0.5,
    fontSize: 12,
    color: 'grey',
    borderBottomWidth: 1,
    borderRadius: 4,
    marginTop: 3,
    fontFamily: 'Montserrat-Medium',
  },
  Icon: {
    marginLeft: 320,
  },
  containersText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  containersNumberText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 5,
  },
  containerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonLoad: {
    height: 36,
    width: 300,
    backgroundColor: '#EBCB7F',
    borderRadius: 3,
  },
  buttonLoadText: {
    textAlign: 'center',
    marginTop: 7,
    color: 'black',
    letterSpacing: 1,
    fontFamily: 'Montserrat-Medium',
  },
  expiryText: {
    color: 'black',
    fontSize: 13,
    fontFamily: 'Montserrat-Medium',
  },
  cvvText: {
    color: 'black',
    fontSize: 13,
    fontFamily: 'Montserrat-Medium',
  },
  numberText2: {
    letterSpacing: 0.5,
    fontSize: 12,
    color: 'grey',
    borderBottomWidth: 1,
    borderRadius: 4,
    marginTop: 3,
    borderBottomColor: 'black',
    fontFamily: 'Montserrat-Medium',
  },
  containerBottomText: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 5,
    padding: 5,
    marginTop: 10,
  },
  bottomText: {
    color: 'black',
    fontSize: 12,
    marginTop: 10,
    fontFamily: 'Montserrat-Medium',
  },
  containerIcon: {
    left: 6,
    top: 5,
  },
});

export default styles;
