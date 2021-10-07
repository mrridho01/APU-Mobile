import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
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
          <Text style={styles.title}>Aok Workspace</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 58,
    fontFamily: 'Nunito-Bold',
    color: '#63ACD2',
    // opacity: '60%',
    fontSize: 32,
    textAlign: 'center',
  },
  background: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    paddingTop: 54,
    paddingHorizontal: 32,
  },
});
