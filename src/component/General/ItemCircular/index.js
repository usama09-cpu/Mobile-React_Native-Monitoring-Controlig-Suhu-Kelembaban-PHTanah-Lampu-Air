import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import color from '../../../assets/color';

const ItemCircular = ({
  data,
  max = 100,
  min = 0,
  size = 200,
  width = 20,
  unit = '',
  bottomTitle = '',
  topTitle = '',
  tintColor = '#ff0000',
  backgroundColor = '#ff0000',
}) => {
  const fill = ((data - min) / (max - min)) * 100;

  return (
    <View style={styles.container}>
      {topTitle && <Text style={styles.topTitle}>{topTitle}</Text>}
      <AnimatedCircularProgress
        size={size}
        width={width}
        fill={fill}
        tintColor={tintColor}
        backgroundColor={backgroundColor}>
        {() => <Text style={styles.valueText}>{data + unit}</Text>}
      </AnimatedCircularProgress>
      {bottomTitle && <Text style={styles.bottomTitle}>{bottomTitle}</Text>}
    </View>
  );
};

export default ItemCircular;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    flexDirection: 'column',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    borderColor: color.primary,
    alignItems: 'center',
  },
  topTitle: {
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
    color: color.primary,
    marginBottom: 5,
  },
  valueText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: color.primary,
  },
  bottomTitle: {
    fontSize: 14,
    color: color.primary,
    marginTop: 5,
  },
});
