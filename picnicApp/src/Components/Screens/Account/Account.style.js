import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFFFFF',
    alignItems:'center',
    paddingTop:50,


  },
  Input: {
    borderRadius: 1,
    borderWidth: 1,
    borderColor: 'black',
    width: 250,
    margin: 4,
    padding: 5,
    paddingLeft: 35,
    fontFamily:'Montserrat-Medium',
    fontSize:13,
    color:'black',

  },
  butonContainer: {
    marginTop: 15,
    padding: 20,
    marginRight: 30,
  },
  Icon: {
    position: 'absolute',
    left: 0,
    margin: 8,
    padding: 5,
  },
  containerName: {
    flexDirection: 'row',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',

  },
  headerText: {
    margin: 5,
    padding: 5,
    right: 5,
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize:20,
    color: 'black',
  },
});

export default styles;
