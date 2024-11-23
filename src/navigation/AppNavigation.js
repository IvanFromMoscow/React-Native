import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MainScreenNativeStack } from './MainScreenNativeStack';
import { BookedScreenNativeStack } from './BookedScreenNativeStack';
import { THEME } from './../theme';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform } from 'react-native';

export const AppNavigation = (props) => {
  const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator(): createBottomTabNavigator();
  return (
      <NavigationContainer>
      <Tab.Navigator screenOptions={ 
      ({ route }) => { 
        let config = {
          headerShown: false,
          tabBarLabel: (route.name === "MainScreenTab")?'Все':'Избранное',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "MainScreenTab") {
              iconName = 'ios-album'
            } else if (route.name === "BookedScreenTab") {
              iconName = "ios-star";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        };
        if (Platform.OS === 'android'){
          config = { 
            ...config,
            activeColor: "#fff",
            barStyle: {
              backgroundColor: THEME.MAIN_COLOR
            }
    
          }
        } else {
          config = {
            ...config,
            tabBarActiveTintColor: THEME.MAIN_COLOR,
            tabBarInactiveTintColor: "gray",
          } 
        }
        return config;
        }
      }>
        <Tab.Screen name="MainScreenTab" component={MainScreenNativeStack} />
        <Tab.Screen name="BookedScreenTab" component={BookedScreenNativeStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
