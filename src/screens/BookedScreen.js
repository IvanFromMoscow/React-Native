import React from "react";
import {View, StyleSheet, FlatList} from 'react-native';
import {DATA} from '../data';
import {Post} from '../components/Post'
import { AppHeaderIcon } from './../components/AppHeaderIcon';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

export const BookedScreen = ({navigation}) => {
    navigation.setOptions({
        title: 'Избранное',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title="Toogle Drawer" iconName="menu" onPress={() => console.log('drawer')}/>
            </HeaderButtons>
        )
    });
    const openPostHandler = post => {
        navigation.navigate('PostScreen', {postId: post.id});
    }
    return (
        <View>
             <FlatList 
                data={DATA.filter(i => i.booked)} 
                keyExtractor={ post => post.id.toString()} 
                renderItem={({item}) =>{ 
                return (
                   <Post post={item} onOpen={openPostHandler}/>
                );}}/>
        </View>
     

    );
}

styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});