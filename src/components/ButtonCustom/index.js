import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ButtonCustom = ({title, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.button}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonCustom;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#248CC2',
    borderRadius: 4,
    paddingVertical: 8,
  },
  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 28,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
