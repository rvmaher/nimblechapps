import {StyleSheet} from 'react-native';
import {Colors} from '../constants/Colors';

export const paginationStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: Colors.Primary,
  },
  buttonText: {
    color: Colors.Secondary,
  },
  activeButtonText: {
    color: Colors.Secondary,
    fontWeight: 'bold',
  },
  disabledButton: {
    opacity: 0.5,
  },
});
