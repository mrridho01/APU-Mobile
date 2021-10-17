import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {BottomTab} from '../components';
import {
  Login,
  SplashScreen,
  Progress,
  Prospek,
  Search,
  Archieve,
  Asset,
} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MainApp" component={MainApp} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      backBehavior="order"
      tabBar={props => <BottomTab {...props} />}>
      <Tab.Screen name="Progress" component={Progress} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Asset" component={Asset} />
    </Tab.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
