import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  Wrapper: {
    backgroundColor: '#FFFFFF',
    height: 500,
    width: '100%',
  },
  containerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
    padding: 3,
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  balanceText: {
    fontSize: 20,
    color: 'black',
    letterSpacing: 2,
    fontFamily: 'Montserrat-SemiBold',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30,
  },
  button: {
    height: 60,
    width: 100,
    backgroundColor: 'white',
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
  buttonTextcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Montserrat-Medium',
  },
  containertext: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 30,
    marginLeft: 50,
  },
  containerUnderline: {
    margin: 2,
    padding: 5,
  },

  underline: {
    borderWidth: 0.5,
    borderBottomEndRadius: 1,
    borderColor: 'black',
  },
  containerBottomText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,

  },
  BottomText: {
    color: 'black',
    fontSize: 13,
    fontFamily: 'Montserrat-Medium',
  },
  containerLoadButton: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:30,
  },
  loadButton: {
    height: 35,
    width: 260,
    backgroundColor: '#EBCB7F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },
  txtButton: {
    color: 'black',
    fontSize: 18,
    letterSpacing: 4,
  },
  text: {
    color: '#EBCB7F',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },
  containerIcon: {
    left: 6,
    top: 5,
  },
});

export default styles;
