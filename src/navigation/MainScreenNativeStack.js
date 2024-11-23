import React from "react";
import { MainScreen } from './../screens/MainScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { PostScreen } from './../screens/PostScreen';
import { options } from './../utils/screenOpt';

export const MainScreenNativeStack = props => {
    const MainScreenNativeStack = createNativeStackNavigator();
    return (
        <MainScreenNativeStack.Navigator
        initialRouteName="Main"
        screenOptions={options}
      >
        <MainScreenNativeStack.Screen name="Main" component={MainScreen} />
        <MainScreenNativeStack.Screen name="Post" component={PostScreen} />
      </MainScreenNativeStack.Navigator> 
    )
}