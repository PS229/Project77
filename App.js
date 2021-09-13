import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import SpaceCraft from '../screens/spaceCraft'
import DailyPic from '../screens/dailyPic'
import StarMap from '../screens/starMap'
import Home from './screens/home';

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home" screenOptions = {{
        headerShown:false
      }}>
        <Stack.Screen name = "Home" component = {Home}/>
        <Stack.Screen name = "Spacecraft" component = {SpaceCraft}/>
        <Stack.Screen name = "DailyPic" component = {DailyPic}/>
        <Stack.Screen name = "StarMap" component = {StarMap}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
