import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainScreen } from './../screens/MainScreen';
import { BookedScreen } from './../screens/BookedScreen';
import { options } from './../utils/screenOpt';
import { PostScreen } from './../screens/PostScreen';

export const BookedScreenNativeStack = props => {
    const BookedScreenNativeStack = createNativeStackNavigator();
    return (
        <BookedScreenNativeStack.Navigator
        initialRouteName="BookedScreen"
        screenOptions={options}
      >
        <BookedScreenNativeStack.Screen name="BookedScreen" component={BookedScreen} />
        <BookedScreenNativeStack.Screen name="PostScreen" component={PostScreen} />
      </BookedScreenNativeStack.Navigator> 
    )
}