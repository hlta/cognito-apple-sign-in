import {StyleSheet} from 'react-native';
import {Helpers} from 'App/Theme';

export default StyleSheet.create({
  logoContainer: {
    ...Helpers.fullWidth,
    height: 300,
    marginBottom: 25,
  },
  appleButton: {
    width: '100%',
    height: 45,
    shadowColor: '#555',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    marginVertical: 45,
  },
});
