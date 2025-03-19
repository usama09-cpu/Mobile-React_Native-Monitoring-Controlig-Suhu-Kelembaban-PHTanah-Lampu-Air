import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import PropTypes from 'prop-types';
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
  colors = color.primary,
  backgroundColor = color.background,
}) => {
  const fill = ((data - min) / (max - min)) * 100;

  return (
    <View style={[styles.container, {borderColor: colors}]}>
      {topTitle && (
        <Text style={[styles.topTitle, {color: colors}]}>{topTitle}</Text>
      )}
      <AnimatedCircularProgress
        size={size}
        width={width}
        fill={Math.min(Math.max(fill, 0), 100)} // Pastikan fill antara 0-100
        tintColor={colors}
        backgroundColor={backgroundColor}>
        {() => (
          <Text style={[styles.valueText, {color: colors}]}>
            {`${data}${unit}`}
          </Text>
        )}
      </AnimatedCircularProgress>
      {bottomTitle && (
        <Text style={[styles.bottomTitle, {color: colors}]}>{bottomTitle}</Text>
      )}
    </View>
  );
};

// Menambahkan validasi tipe properti
ItemCircular.propTypes = {
  data: PropTypes.number.isRequired,
  max: PropTypes.number,
  min: PropTypes.number,
  size: PropTypes.number,
  width: PropTypes.number,
  unit: PropTypes.string,
  bottomTitle: PropTypes.string,
  topTitle: PropTypes.string,
  colors: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default ItemCircular;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    flexDirection: 'column',
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.white, // Tambahkan warna latar default
  },
  topTitle: {
    width: '100%',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  valueText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  bottomTitle: {
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
});
