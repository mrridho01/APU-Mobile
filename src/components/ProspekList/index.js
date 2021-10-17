import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ILProspek} from '../../asset';

const ProspekList = ({title, precustomer}) => {
  return (
    <View style={styles.container}>
      <ILProspek />
      <TouchableOpacity activeOpacity={0.7} style={styles.prospekDetail}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{precustomer}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProspekList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F8FCFF',
    borderRadius: 2,
    shadowColor: 'rgba(0,0,0,1)',
    elevation: 4,
    alignItems: 'center',
    padding: 12,
    marginBottom: 12,
  },
  prospekDetail: {
    marginLeft: 12,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: 12,
    color: '#404040',
    marginBottom: 12,
  },
  desc: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    color: '#8A8484',
  },
});
