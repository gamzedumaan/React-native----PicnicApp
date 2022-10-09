import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  containerInput: {
    width: 250,
    borderRadius: 1,
    borderWidth: 1,
    margin: 4,
    padding: 5,
    paddingLeft: 35,
    backgroundColor: '#E8E8E8',
    elevation: 10,
  },

  butonContainer: {
    marginTop: 15,
    padding: 20,
  },
  containerHeader: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    padding: 20,
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 20,
  },
  headerText: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Montserrat-SemiBold',
  },
  Icon: {
    left: 6,
    top: 5,
  },
  Text:{
    color:'black',
  }
});

export default styles;
