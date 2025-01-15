import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import color from '../../../assets/color';

const ItemBar = ({data, title, max = 100, min = 0, unit = '%'}) => {
  const percentage = Math.min(
    Math.max(((data - min) / (max - min)) * 100, 0),
    100,
  );

  return (
    <View style={styles.container}>
      <Text style={styles.barTitle}>{title}</Text>
      <View style={styles.barOutline}>
        <View style={[styles.bar, {width: `${percentage}%`}]} />
      </View>
      <Text style={styles.barText}>{data + unit}</Text>
    </View>
  );
};

export default ItemBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    flexDirection: 'column',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    borderColor: color.primary,
  },
  barOutline: {
    borderRadius: 5,
    width: '100%',
    height: 30,
    borderWidth: 2,
    borderColor: color.primary,
    backgroundColor: color.background,
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  bar: {
    backgroundColor: color.primary,
    height: '100%',
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  },
  barTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: color.primary,
    marginBottom: 5,
  },
  barText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: color.primary,
    marginTop: 5,
  },
});
