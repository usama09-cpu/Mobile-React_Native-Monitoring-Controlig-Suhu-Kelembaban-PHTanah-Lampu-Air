import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import color from '../../../assets/color';

const ItemBar = ({
  data,
  title,
  max = 100,
  min = 0,
  unit = '%',
  barColor = color.primary,
  barHeight = 30,
  barOutlineWidth = 2,
  barBackgroundColor = color.background,
}) => {
  const percentage = Math.min(
    Math.max(((data - min) / (max - min)) * 100, 0),
    100,
  );

  return (
    <View style={[styles.container, {borderColor: barColor}]}>
      <Text style={[styles.barTitle, {color: barColor}]}>{title}</Text>
      <View
        style={[
          styles.barOutline,
          {
            borderColor: barColor,
            backgroundColor: barBackgroundColor,
            borderWidth: barOutlineWidth,
            height: barHeight,
          },
        ]}>
        <View
          style={[
            styles.bar,
            {width: `${percentage}%`, backgroundColor: barColor},
          ]}
        />
      </View>
      <Text style={[styles.barText, {color: barColor}]}>{data + unit}</Text>
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
  },
  barOutline: {
    borderRadius: 5,
    width: '100%',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  bar: {
    height: '100%',
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  },
  barTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  barText: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
