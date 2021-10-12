import React, {useEffect} from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import {ILBackgroundSplashScreen, ILSplashScreen} from '../../asset';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('Login'), 3000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={ILSplashScreen} style={styles.logo} />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#003EA7',
  },
  background: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 122,
    height: 128,
  },
});
