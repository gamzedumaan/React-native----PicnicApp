import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  containerWrapper: {
    margin: 10,
    padding: 10,
  },
  containerBorder: {
    width: '100%',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#EEF2E6',
    shadowColor: '#000',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 2,
    shadowRadius: 5,
    elevation: 3,
  },
  Image: {
    width: '100%',
    height: 100,
    borderRadius: 2,
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 5,
  },
  text: {
    color: 'black',
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
  },
  containerIcon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 4,
  },
  textDate: {
    color: '#FFB200',
    fontSize: 14,
    right: 21,
    fontFamily: 'Montserrat-Medium',
  },
  oneIcon: {
    right: 50,
  },
  twoIcon: {
    right: 50,
  },
});

export default styles;
