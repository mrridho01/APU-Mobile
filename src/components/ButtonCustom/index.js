import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

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
    backgroundColor: '#71C4FC',
    borderRadius: 4,
    paddingVertical: 8,
  },
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
