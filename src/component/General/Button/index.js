import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import color from '../../../assets/color';

const Button = ({
  title,
  width = '100%',
  height = 40,
  onPress,
  backgroundColor = color.primary,
  textColor = color.white,
  borderRadius = 10,
}) => {
  return (
    <View style={[styles.container, {width, height}]}>
      <TouchableOpacity
        style={[styles.button, {backgroundColor, borderRadius}]}
        onPress={onPress}>
        <Text style={[styles.buttonText, {color: textColor}]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
