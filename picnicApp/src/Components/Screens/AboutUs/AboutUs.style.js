import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  containerText: {
    width: 300,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 10,
    padding: 10,
  },
  paragraphTxt: {
    fontSize: 13,
    color: 'black',
    marginTop: 25,
    fontFamily: 'Montserrat-Medium',
  },
  containerHeaderText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    
  },
  headerText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 22,
    borderRadius: 0.2,
    textAlign:'center',
    color:'black',
  },
});

export default styles;
