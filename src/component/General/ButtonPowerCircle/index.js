import {StyleSheet, TouchableOpacity, View, Animated} from 'react-native';
import React from 'react';
import color from '../../../assets/color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ButtonPowerCircle = ({onPress, colors}) => {
  const scale = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
    onPress();
  };

  const animatedStyle = {
    transform: [{scale}],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.buttonWrapper, animatedStyle, colors]}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}>
          <MaterialIcons
            name="power-settings-new"
            size={70}
            style={{color: color.white}}
          />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};
export default ButtonPowerCircle;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    width: 170,
    height: 170,
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  button: {
    width: 140,
    height: 140,
    borderRadius: '50%',
    backgroundColor: color.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
