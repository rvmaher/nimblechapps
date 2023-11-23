import React from 'react';
import {Animated, Pressable, Text} from 'react-native';
import {Colors} from '../../constants/Colors';
import {useRef} from 'react';
import {styles} from '../../styles/commonStyle';
import {CapsuleButtonProps} from '../../typings/components';

const CapsuleButton: React.FC<CapsuleButtonProps> = ({
  text,
  onPress,
  bgColor = Colors.Secondary,
}) => {
  const animatedVal = useRef(new Animated.Value(1)).current;

  const handlePress = (type: 'In' | 'Out') => {
    Animated.timing(animatedVal, {
      toValue: type === 'In' ? 0.97 : 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{transform: [{scale: animatedVal}]}}>
      <Pressable
        onPressIn={() => handlePress('In')}
        onPressOut={() => handlePress('Out')}
        style={[styles.btnContainer, {backgroundColor: bgColor}]}
        onPress={onPress}>
        <Text style={styles.btnText}>{text}</Text>
      </Pressable>
    </Animated.View>
  );
};

export default CapsuleButton;
