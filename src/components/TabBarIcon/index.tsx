import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

const Icons = {
  Home: require('../../assets/home.png'),
  Favourites: require('../../assets/heart.png'),
} as const;

const TabBarIcon = ({
  focused,
  icon,
}: {
  focused: boolean;
  icon: 'Home' | 'Favourites';
}) => {
  return (
    <Image
      style={styles.icon}
      tintColor={focused ? Colors.Primary : Colors.White}
      source={Icons[icon]}
    />
  );
};

export default TabBarIcon;

const styles = StyleSheet.create({
  icon: {
    height: 25,
    width: 25,
  },
});
