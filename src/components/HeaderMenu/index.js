import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ILAvatar, ILHamburger, ILNotif} from '../../asset';

const HeaderMenu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <ILAvatar />
        <View style={styles.identity}>
          <Text style={styles.name}>Muhammad Ridho</Text>
          <Text style={styles.desc}>Let's conquer this day</Text>
        </View>
      </View>
      <View style={styles.rightSide}>
        <TouchableOpacity
          style={styles.notifWrapper}
          activeOpacity={0.3}
          onPress={() => alert('Button pressed')}>
          <ILNotif />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.3}
          onPress={() => alert('Button pressed')}>
          <ILHamburger />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 11,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    shadowColor: 'rgba(0,0,0,1)',
    elevation: 4,
  },
  leftSide: {
    flexDirection: 'row',
    flex: 1,
  },
  rightSide: {
    flexDirection: 'row',
  },
  identity: {
    flexDirection: 'column',
    marginLeft: 8,
  },
  notifWrapper: {
    marginRight: 12,
  },
  name: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: '#404040',
    marginBottom: 4,
  },
  desc: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: '#B2ACAC',
  },
});
