import {StyleSheet} from 'react-native';
import {Colors} from '../constants/Colors';

export const characterModalstyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: Colors.Overlay,
  },
  modalContent: {
    backgroundColor: Colors.Primary,
    borderRadius: 10,
    padding: 20,
    gap: 5,
  },
  modalImage: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  modalName: {
    fontSize: 20,
    color: Colors.Secondary,
  },
  metaText: {
    fontSize: 16,
    color: Colors.Secondary,
  },
});
