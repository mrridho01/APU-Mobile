import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HeaderMenu} from '../../components';

const Progress = () => {
  return (
    <View style={styles.container}>
      <HeaderMenu />
      <Text>Progress</Text>
    </View>
  );
};

export default Progress;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#16ADF9'
    // flex: 1,
  },
});
