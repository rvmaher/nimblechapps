import {StyleSheet} from 'react-native';
import {Colors} from '../constants/Colors';

export const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    gap: 20,
  },
  btnContainer: {
    backgroundColor: Colors.Secondary,
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
  },
  btnText: {
    color: Colors.White,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  flex: {
    flex: 1,
  },
  sceneContainer: {
    backgroundColor: Colors.Secondary,
  },
  tabbar: {
    backgroundColor: Colors.Secondary,
    borderTopWidth: 0,
  },
  tabbarLabel: {
    color: Colors.White,
    fontWeight: 'bold',
  },
});
