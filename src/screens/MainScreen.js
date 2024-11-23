import React from "react";
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import {Post} from '../components/Post'
import { AppHeaderIcon } from './../components/AppHeaderIcon';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from 'react-redux';

export const MainScreen = ({navigation}) => {

    navigation.setOptions({
        title: 'Мой блог',
        headerRight:() => (<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Take photo" iconName="camera" onPress={() => console.log('photo')}/>
        </HeaderButtons>),
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title="Toogle Drawer" iconName="menu" onPress={() => console.log('drawer')}/>
            </HeaderButtons>
        )
    });
    const openPostHandler = post => {
        navigation.navigate('PostScreen', {postId: post.id});
    }
    const data = useSelector(state => state.post.allPosts)
    console.log(data)
    return (
        <View>
             <FlatList 
                data={data} 
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