import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';

const EmptyPlaceholder: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.rickImage}
        source={require('../../assets/rickAndMorty.png')}
      />
      <Text style={styles.emptyText}>
        Oops!! Nothing to Show {'\n'}
        Please Add Some Characters to Favourites
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  rickImage: {
    height: 200,
  },
  emptyText: {
    textAlign: 'center',
    color: Colors.White,
  },
});

export default EmptyPlaceholder;
