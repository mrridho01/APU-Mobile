import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {ILBackgroundSplashScreen, ILSplashScreen} from '../../asset';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('Login'), 3000);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={ILBackgroundSplashScreen}
        resizeMode="cover"
        style={styles.background}>
        <View style={styles.content}>
          <ILSplashScreen />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  background: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
