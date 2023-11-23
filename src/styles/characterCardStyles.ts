import {StyleSheet} from 'react-native';
import {Colors} from '../constants/Colors';

export const characterCardstyles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: Colors.Primary,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  favouriteButton: {
    position: 'absolute',
    right: 30,
    top: 30,
  },
  favouriteImage: {
    height: 40,
    width: 40,
  },
  details: {
    marginLeft: 10,
  },
  name: {
    fontSize: 20,
    color: Colors.Secondary,
  },
  metaInfo: {
    fontSize: 16,
    color: Colors.Secondary,
  },
});
