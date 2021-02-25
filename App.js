import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './src/components/CustomDrawer'

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>  
  );
}