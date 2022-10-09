import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  Header: {
    textAlign: 'center',
    fontSize: 15,
    color: 'black',
    margin: 5,
    padding: 5,
    fontFamily: 'Montserrat-Medium',
  },

  containerHeader: {
    marginTop: 15,
    marginBottom: 15,
  },
  containerText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  containerInput: {
    height: 180,
    borderRadius: 5,
    margin: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    color: 'white',
  },
  Text: {
    fontSize: 12,
    color: 'black',
    fontFamily: 'Montserrat-Medium',
  },
  containerButton: {
    marginTop: 10,
    padding: 18,
  },
  InputText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
    color: 'black',
  },
});

export default styles;
