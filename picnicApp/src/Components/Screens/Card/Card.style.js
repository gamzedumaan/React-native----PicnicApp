import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor:'#FFFFFF',
  },
  headerContainer: {
    borderBottomWidth: 1,
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
    padding: 2,
    borderColor: '#D8CECE',
  },

  IconTwo: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'column',
  },

  ButtonContainer: {
    height: 30,
    width: 320,
    backgroundColor: '#EBCB7F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },
  containerTop: {
    flexDirection: 'row',
  },
  text: {
    textAlign: 'center',
    letterSpacing: 1,
    fontSize: 12,
    color: 'black',
    fontFamily:'Montserrat-SemiBold',
  },

  containerButton: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
  },

  txtButton: {
    color: 'black',
    fontFamily:'Montserrat-Medium',

  },
});

export default styles;
