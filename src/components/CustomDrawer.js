import React from 'react';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

import LoginScreen from './Login'
import JokesScreen from './Jokes'
import WifiScreen from './Wifi'

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Login">
      <Drawer.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
      <Drawer.Screen name="Jokes" component={JokesScreen} />
      <Drawer.Screen name="Wifi" component={WifiScreen} />
    </Drawer.Navigator>
  );
}