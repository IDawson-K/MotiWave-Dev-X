import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/Home/HomeScreen';
import ProfileScreen from '../Screens/Profile/ProfileScreen';
import ServicesScreen from '../Screens/Services/ServicesScreen';
import Colors from '../Utils/Colors';
import { Entypo } from '@expo/vector-icons';
import HomeNavigation from './HomeNavigation';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.orange,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopColor: 'transparent'
        }
      }}>
      <Tab.Screen name="Home" component={HomeNavigation}/>
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Services" component={ServicesScreen} />
    </Tab.Navigator>
  )
}